import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions/index';
import { deleteCar } from '../actions/index';
import SideBar from './sidebar';


class CarsShow extends Component {

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = (id) => {
    this.props.deleteCar(id, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div className="wrapper">
      <SideBar />
        <div className="main">
          <h3>{this.props.car.brand} - {this.props.car.model}</h3>
          <p>Owner: {this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
        <button className="btn btn-primary" onClick={this.handleClick}>Delete</button>
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
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
