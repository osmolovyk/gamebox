import React from 'react';
import ReactPropTypes from 'prop-types';
import axios from "axios";
import Swiper from 'react-id-swiper';

require('./MainPage.scss');

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastAddedIsReady: false,
      lastAddedProducts: [],
    };
  }

  componentDidMount() {
    this.fetchLastAdded();
  }

  fetchLastAdded() {
    axios.get('/product?sort_by=date&limit=10')
      .then((res) => {
        this.setState({
          lastAddedProducts: res.data.products.docs,
          lastAddedIsReady: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      loopFillGroupWithBlank: true
    };


    const {lastAddedIsReady, lastAddedProducts} = this.state;

    if (lastAddedProducts.length === 0) return null;

    return (
      <div className={'MainPage'}>
        <div className="imageMain">
          <img className="d-block w-100 imgMain" src="/image/back4.jpg" alt="First image"/>
        </div>
        <h5 className="text-center pt-4 mt-2">Welcome to GameBox!</h5>
        <div className="infoCard mt-4">
          <div className="container py-4">
            <div className="row">
              <div className="col">
                <img className="img-fluid imgWork my-2 mr-4 ml-2 float-left" src="image/itWorks.png"/>
                <h5 className="mt-2">You can sell, buy or rent games</h5>
                <h5>And our members can communicate with each other</h5>
                <h5><span>See our new games right now!</span></h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <h5 className="mt-5 text-center">Recently released</h5>
          <div className="row justify-content-center mt-4">
            <div className="col">
              <Swiper {...params}>
                {lastAddedProducts.map((product) => {
                  const backgroundImage = {
                    backgroundImage: `url("${product.images[0]}")`,
                  };
                  return (
                    <div
                      key={product._id}
                      className="card product text-center"
                      style={backgroundImage}
                    >
                      <div className="inner">
                        <div className="paragraphV text-light">4,5</div>
                        <a href="#"><h4 className="paragraphV pt-5">{product.title}</h4></a>
                        <button className="button mt-5"><a href="#">View More</a></button>
                      </div>
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        {/*<div className="container mb-5">*/}
          {/*<h5 className="mt-5 text-center">Recently released</h5>*/}
            {/*<div className="row mt-4">*/}
              {/*<div className="col-md-4 mb-3 mb-sm-0">*/}
                {/*{lastAddedProducts.map((product) => {*/}
                  {/*const backgroundImage = {*/}
                    {/*backgroundImage: `url("${product.images[0]}")`,*/}
                  {/*};*/}
                  {/*return (*/}
                    {/*<div*/}
                      {/*key={product._id}*/}
                      {/*className="card product text-center"*/}
                      {/*style={backgroundImage}*/}
                    {/*>*/}
                      {/*<div className="inner">*/}
                        {/*<div className="paragraphV text-light">4,5</div>*/}
                        {/*<a href="#"><h4 className="paragraphV pt-5">{product.title}</h4></a>*/}
                        {/*<button className="button mt-5"><a href="#">View More</a></button>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  {/*);*/}
                {/*})}*/}
              {/*</div>*/}
          {/*</div>*/}


          {/*<div className="card-deck mt-4">*/}
          {/*<div className="card product text-center cardRecently-4">*/}
          {/*<div className="inner">*/}
          {/*<div className="paragraphV text-light">4,5</div>*/}
          {/*<a href="#"><h4 className="paragraphV pt-5">Game's Name</h4></a>*/}
          {/*<button className="button mt-5"><a href="#">View More</a></button>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="card product text-center cardRecently-5">*/}
          {/*<div className="inner">*/}
          {/*<div className="paragraphV text-light">4,5</div>*/}
          {/*<a href="#"><h4 className="paragraphV pt-5">Game's Name</h4></a>*/}
          {/*<button className="button mt-5"><a href="#">View More</a></button>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="card product text-center cardRecently-6">*/}
          {/*<div className="inner">*/}
          {/*<div className="paragraphV text-light">4,5</div>*/}
          {/*<a href="#"><h4 className="paragraphV pt-5">Game's Name</h4></a>*/}
          {/*<button className="button mt-5"><a href="#">View More</a></button>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className="infoCard">
          <h3 className="text-center pt-4">How it works</h3>
          <div className="container pb-4">
            <div className="row">
              <div className="col-md-4 text-center">
                <img className="img-fluid imgInfo my-4" src="image/information-41225_640.png"/>
                <p>General info</p>
                <p className="text">This is a platform for sharing games between players.
                  Our members can sell, buy, rent the games and comment / rate these games and other members.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img className="img-fluid imgInfo my-4" src="image/profile2-512.png"/>
                <p>Join us</p>
                <p className="text">Being a member of our great platform means to have access to the most
                  interesting
                  games of various genres and play in real time.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img className="img-fluid imgInfo my-4" src="image/img_343397.png"/>
                <p>Payment</p>
                <p className="text">Secure payment can be made in cash, by check or Paypal.
                  Choose your game and go ahead!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <h5 className="mt-5 text-center">Most popular</h5>
          <div className="row justify-content-center mt-4">
            <div className="col">
              <Swiper {...params}>
                <div className="card product text-center cardPopular-1">
                  <div className="inner">
                    <div className="paragraphV text-light">4,5</div>
                    <a href="#"><h4 className="paragraphV pt-5">Title</h4></a>
                    <button className="button mt-5"><a href="#">View More</a></button>
                  </div>
                </div>
                <div className="card product text-center cardPopular-2">
                  <div className="inner">
                    <div className="paragraphV text-light">4,5</div>
                    <a href="#"><h4 className="paragraphV pt-5">Title</h4></a>
                    <button className="button mt-5"><a href="#">View More</a></button>
                  </div>
                </div>
                <div className="card product text-center cardPopular-3">
                  <div className="inner">
                    <div className="paragraphV text-light">4,5</div>
                    <a href="#"><h4 className="paragraphV pt-5">Title</h4></a>
                    <button className="button mt-5"><a href="#">View More</a></button>
                  </div>
                </div>
                <div className="card product text-center cardPopular-4">
                  <div className="inner">
                    <div className="paragraphV text-light">4,5</div>
                    <a href="#"><h4 className="paragraphV pt-5">Title</h4></a>
                    <button className="button mt-5"><a href="#">View More</a></button>
                  </div>
                </div>
                <div className="card product text-center cardPopular-5">
                  <div className="inner">
                    <div className="paragraphV text-light">4,5</div>
                    <a href="#"><h4 className="paragraphV pt-5">Title</h4></a>
                    <button className="button mt-5"><a href="#">View More</a></button>
                  </div>
                </div>
                <div className="card product text-center cardPopular-6">
                  <div className="inner">
                    <div className="paragraphV text-light">4,5</div>
                    <a href="#"><h4 className="paragraphV pt-5">Title</h4></a>
                    <button className="button mt-5"><a href="#">View More</a></button>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
