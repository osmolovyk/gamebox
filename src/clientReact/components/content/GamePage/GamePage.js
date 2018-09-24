import React from 'react';
import axios from 'axios';
import Carousel from "./Carousel/Carousel";
require('./GamePage.scss');

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{_id: }]
    }
  }

  componentDidMount() {
    axios.get('/product')
      .then( (res) => {
        this.setState({products: res.data.products.docs});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id={"GamePage"}>
        <div id="gamePage">
          <h3 className="text-light text-center mb-4">{this.props.product.title}</h3>
          <div className="container mb-4">
            <div className="row">
              <div className="col-md-5">
                <img id="imageMainGame" className="img-thumbnail" src="image/img6.jpg" alt="First slide"/>
                <Carousel />
              </div>
              <div className="col-md-6">
                <div className="row ml-sm-0 ml-md-5">
                  <div className="col-md-6">
                    <p className="text-light">Product seller : Piotr</p>
                    <p className="text-light">Type : Game</p>
                    <p className="text-light">Release Date : Sep 11, 2018</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-light">Rating : 10</p>
                    <p className="text-light">Purchase price : 300$</p>
                    <p className="text-light">Rent price : 30$</p>
                  </div>
                  <div className="col-md-12 mt-3">
                    <p className="text-light">Genre : Strategy, Adventure, etc.</p>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-block mt-5 mb- btnGamePage">Add to cart</button>
                    <button className="btn btn-block btnGamePage">Rent the game</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="text-light mb-4 text-center">Description</h3>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores beatae dicta enim et ex facere
                  id necessitatibus odit omnis, optio quae quam qui quia quis quisquam saepe unde vitae?
                </p>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid animi aperiam blanditiis
                  delectus facilis harum impedit ipsam laudantium magnam obcaecati officiis omnis quidem recusandae, saepe,
                  similique sit tempora voluptas.
                </p>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid animi aperiam blanditiis
                  delectus facilis harum impedit ipsam laudantium magnam obcaecati officiis omnis quidem recusandae, saepe,
                  similique sit tempora voluptas.
                </p>
              </div>
            </div>
        </div>
        <div className="card-body mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-nowrap">
                <form>
                  <section id="rate" className="my-5 text-light">Rate the game
                    <div className="form-check form-check-inline ml-md-5">
                      <span><i className="fa fa-star-o"></i></span>
                    </div>
                    <div className="form-check form-check-inline">
                      <span><i className="fa fa-star-o"></i></span>
                    </div>
                    <div className="form-check form-check-inline">
                      <span><i className="fa fa-star-o"></i></span>
                    </div>
                    <div className="form-check form-check-inline">
                      <span><i className="fa fa-star-o"></i></span>
                    </div>
                    <div className="form-check form-check-inline">
                      <span><i className="fa fa-star-o"></i></span>
                    </div>
                  </section>
                  <h5 id="marginCom" className="text-light">Write a comment</h5>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-pencil"></i></span>
                    </div>
                    <textarea className="form-control form-control-lg font-input" name="comments"
                              placeholder="Your comments" rows="5"></textarea>
                  </div>
                  <input type="submit" value="Send" className="btn btn-sm btn-block btnGamePage"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;
