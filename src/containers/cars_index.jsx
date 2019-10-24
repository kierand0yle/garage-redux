import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { fetchCars } from '../actions/index';


class CarsIndex extends Component {

  componentDidMount() {
    this.props.fetchCars(this.props.garageName);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.brand} - {car.model}</h3>
            <p>Owner: {car.owner}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Garage</h3>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
          Add Car to Garage
          </Link>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garageName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
