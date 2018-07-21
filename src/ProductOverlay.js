import React, { Component } from 'react';
import './ProductOverlay.css';


const OpenCircle = () => <p className='circle open' />
const ClosedCircle = () => <p className='circle closed' />

class ProductOverlay extends Component {
  state = { currentlyShowing: 1 };
  incShowing = amt => {
    const maxImages = this.props.product.images.length;
    return () => {
      this.setState(({ currentlyShowing }) => ({
        currentlyShowing: Math.max(Math.min(currentlyShowing + amt, maxImages), 1)
      }));
    };
  };
  componentDidMount() {
    // fixes white flash before image show
    const { product, preloadImage } = this.props;
    const images = product.images.map(img => img.href);
    images
      .slice(1) // first img already pre-loaded from ProductCard before showing overlay
      .forEach(preloadImage);
  }
  render() {
    const { product, closeOverlay } = this.props;
    const { currentlyShowing } = this.state;
    const images = product.images.map(img => img.href);
    const curImgUrl = images[currentlyShowing - 1];
    const stylesObj = { backgroundImage: `url('${curImgUrl}')` };
    const atEnd = currentlyShowing === images.length;
    const atBeginning = currentlyShowing === 1;
    const generateArrowClass = (whichArrow, fadedBoolean) =>
      `arrow ${whichArrow} ${fadedBoolean ? 'faded' : ''}`;
    return (
      <div className="product-overlay noselect" style={stylesObj}>
        <a className="close-overlay" onClick={() => closeOverlay()}>✖</a>
        <a className={generateArrowClass('lt', atBeginning)} onClick={this.incShowing(-1)}>{"<"}</a>
        <a className={generateArrowClass('rt', atEnd)} onClick={this.incShowing(1)}>{">"}</a>
        <div className="img-bullets">
          {
            product.images.map((_, ind) => {
              return (ind === currentlyShowing - 1)
                ? <ClosedCircle />
                : <OpenCircle />;
            })
          }
        </div>
      </div>
    );
  }
}

export default ProductOverlay;
