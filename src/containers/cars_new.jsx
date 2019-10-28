import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions/index';

import SideBar from './sidebar';

const required = value => value ? undefined : 'Required';
const upper = value => value && !/[A-Z]/.test(value) ?
  'Plate must be uppercase' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      <div>
        <p> {touched && ((error && <span> {error}</span>) || (warning && <span>{warning}</span>))}</p>
      </div>
    </div>
  </div>
);

class CarsNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, this.props.garage, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }


  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main">
          <h3>Add New Car</h3>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <label htmlFor="Brand">Brand</label>
            <Field
              className="form-control"
              label="Aston Martin"
              name="brand"
              component={renderField}
              placeholder="Aston Martin"
              validate={required}
            />
            <label htmlFor="model">Model</label>
            <Field
              className="form-control"
              label="DB Mark III"
              name="model"
              component={renderField}
              placeholder="DB Mark III"
              validate={required}

            />
            <label htmlFor="owner">Owner</label>
            <Field
              className="form-control"
              label="James Bond"
              name="owner"
              component={renderField}
              placeholder="James Bond"
              validate={required}

            />
            <label htmlFor="plate">Plate</label>
            <Field
              className="form-control"
              label="DB Mark III"
              name="plate"
              component={renderField}
              placeholder="DB Mark III"
              validate={upper}
            />
            <div className="mt-3">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
             Create Car
              </button>
            </div>
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
