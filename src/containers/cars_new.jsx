import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions/index';


class CarsNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, this.props.garage, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Add New Car</h3>
        </div>
        <div>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <label htmlFor="Brand">Brand</label>
            <Field
              className="form-control"
              label="brand"
              name="brand"
              component="textarea"
              rows="1"
            />
            <label htmlFor="model">Model</label>
            <Field
              className="form-control"
              label="model"
              name="model"
              component="textarea"
              rows="1"
            />
            <label htmlFor="owner">Owner</label>
            <Field
              className="form-control"
              label="owner"
              name="owner"
              component="textarea"
              rows="1"
            />
            <label htmlFor="plate">Plate</label>
            <Field
              className="form-control"
              label="plate"
              name="plate"
              component="textarea"
              rows="1"
            />
            <button className="btn btn-primary" type="submit"
              disabled={this.props.pristine || this.props.submitting}>
           Create Car
            </button>
          </form>
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


export default reduxForm({ form: 'newPostForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
