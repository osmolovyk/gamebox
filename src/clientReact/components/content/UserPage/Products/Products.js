/**
 * Theme: Web Project 2
 * Description: Creating a gaming platform for exchange between players
 * File: Products.js, All user products component
 * Authors: Oleg Smolovyk, Piotr Iablocichin, Iana Kravchenko, Svitlana Melnyk
 * Date: October 2018
 */

import React from 'react';
import axios from "axios";
import ProductRow from "./ProductRow/ProductRow";

require('./Products.scss');

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {

    axios.get('/user/' + this.props.user._id + '/products')
      .then((res) => {
        // handle success
        // console.log(res.data.data.docs);
        this.setState({products: res.data.products.docs});
      })
      .catch((error) => {
        console.log(error);
      });

  }

  handleAddProduct(e) {
    e.preventDefault();
    this.props.changeInner('AddProduct');
  }

  render() {

    return (
      <div className={'Products col-md-8 text-center'}>
        <h2 className="text-center mt-4">Your games</h2>
        <button className={'btn btn-block mt-2 btnAddGame'} onClick={this.handleAddProduct.bind(this)}>Add game
        </button>
        <div id="yourGame" className="container mt-3">

                {this.state.products.map((product) => (
                  <ProductRow key={product._id} product={product}/>
                  ))}

        </div>
      </div>
    );
  }

}

export default Products;
