import React from 'react';
// import Frontpage from './components/Frontpage';
import AddComment from './components/AddCommentModal/CommentIndex';
// import xBanner from './images/xBanner.png';
// import xBottle from './images/xBottle.png';
import yBottle from './images/yBottle.png';
// import xMap from './images/xMap.png';
import MapComponent from './components/MapComponent';
// import ModalIndex from './components/NewCommentModal/ModalIndex';
import cooler from './images/cooler.png';
import refill from './images/refill.png';
import waterDrop from './images/water-drop.png';
import pumpDiagonal from './images/pumpDiagonal.png';
import pumpBack from './images/pumpBack.png';
import cupsDiagonal from './images/cupsDiagonal.png';
import cupsBack from './images/cupsBack.png';
import dispenserDiagonal from './images/dispenserDiagonal.png';
import dispenserBack from './images/dispenserBack.png';
import FlipCard from './components/FlipCard/FlipCard';

const App = () => {
  return (
    <div>
      <header>
        <div className='headerWrapper'>
          <div className='bannerContainer'>
            {/* <img src={xBanner} className='bannerImage' /> */}
            <h1>SPARKLING FRESH WATER</h1>
          </div>
          <div className='contactContainer'>
            <div className='phoneContainer'>
              <h2>Call Us: (416) 241-7866</h2>
            </div>
            {/* <AddComment /> */}
            {/* <ModalIndex /> */}
          </div>
        </div>
      </header>

      <div className='hero'>
        <div className='hero-wrapper'>
          <div className='hero-about'>
            <h2>Our Water</h2>
            <h3>Local. Affordable. Water You Can <u>Trust</u>.</h3>
            <p><i>Pure drinking water filtered by reverse osmosis</i></p>
            <p><i>Total dissolved solids less than 10 parts per million</i></p>
          </div>
          <div className='bottle-container'>
            <img src={cooler} />
          </div>
        </div>
      </div>

      <div className='prices'>
        <div className='price-container'>
          <div className='price-title'>
            <h3><u>Refill</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$3.5</p>
            </div>
            <div className='price-desc-img refill'>
              <img src={waterDrop} />
            </div>
          </div>
        </div>
        <div className='price-container'>
          <div className='price-title'>
            <h3><u>Empty Bottle</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$10</p>
            </div>
            <div className='price-desc-img'>
              <img src={yBottle} />
            </div>
          </div>
        </div>
        <div className='price-container'>
          <div className='price-title'>
            <h3><u>Bottle & Water</u></h3>
          </div>
          <div className='price-desc'>
            <div className='price-desc-text'>
              <p>$13.5</p>
            </div>
            <div className='price-desc-img bottleWater'>
              <img src={refill} />
            </div>
          </div>
        </div>
      </div>

      <div className='location'>
        <div className='location-head'>
          <div className='location-wrapper'>
            <h2>Where Are We Located?</h2>
            <h2><span className='location-span'><u>1722 Jane Street</u> at Jane & Lawrence</span></h2>
          </div>
        </div>
        <div className='location-map'>
          <div className='location-wrapper map-wrapper'>
            <div className='map-container'>
              <MapComponent />
            </div>
            <div className='location-desc'>
              {/* <h2>1722 Jane Street</h2> */}
              {/* <h3>North York, Ontario</h3> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan risus et eros molestie, a cursus nibh tempor. Cras rutrum lobortis dictum. Quisque ac purus sit amet nibh feugiat consectetur. Aliquam tincidunt nunc in diam tempus, vitae fermentum ipsum rutrum. Vivamus tincidunt neque et arcu feugiat luctus. Maecenas quis porttitor lorem. In leo nulla, consectetur ut blandit id, vulputate sed odio. Quisque sed orci ut diam dapibus ultrices. Nullam pulvinar nibh nec turpis consectetur, ut tincidunt sem posuere. Praesent non consequat quam. Sed tincidunt sed est pharetra cursus. Maecenas id diam a mauris porta suscipit. Aenean sed lacinia risus. Praesent vitae dictum ex, non efficitur erat. Maecenas nibh eros, lobortis vel tortor eget, sollicitudin egestas enim. Phasellus vestibulum eros massa, vel tristique arcu sagittis et */}
              {/* </p> */}
              {/* <p>placeholder</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className='other-products'>
        <div className='other-wrapper'>
          <h2>Our Other Products</h2>
        </div>
        <div className='product-list'>
          <div className='product-card'>
            <FlipCard
              image={pumpDiagonal}
              backImage={pumpBack}
              desc='Drinking Water Pump'
              price='$20' />
          </div>
          <div className='product-card'>
            <FlipCard
              image={cupsDiagonal}
              backImage={cupsBack}
              desc='Cone Water Cups'
              price='$30' />
          </div>
          <div className='product-card product-card-3'>
            <FlipCard
              image={dispenserDiagonal}
              backImage={dispenserBack}
              desc='Water Cooler Cup Dispenser'
              price='$50' />
          </div>
        </div>
      </div>

      <footer>
        <div className='footer-wrapper'>
          <div>
            <h2>When Are We Open?</h2>
            <p>Wednesday: Closed </p>
            <p>Monday, Tuesday, Thursday, Friday, Saturday: 10am - 6pm</p>
            <p>Sunday: 11am - 4pm</p>
          </div>
          <div className='email-btn'>
            <AddComment />
          </div>
        </div>
      </footer>
    </div>

  );
};

export default App;
