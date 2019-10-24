import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';

class CarsShow extends Component {

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="car-item">
          <h3>{this.props.car.brand} - {this.props.car.model}</h3>
          <p>Owner: {this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(p => p.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
