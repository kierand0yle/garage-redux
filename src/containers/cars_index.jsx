import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { fetchCars } from '../actions/index';
import SideBar from './sidebar';


class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="card-product">
            <img src="https://source.unsplash.com/random/600x600?car" alt='' />
            <div className="card-product-infos">
              <h2>{car.brand} - {car.model}</h2>
              <p>Owner: {car.owner}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
