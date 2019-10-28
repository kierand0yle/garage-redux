import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class SideBar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <h3>{this.props.garage} Garage</h3>
          <p>Hey hey</p>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
          Add Car to Garage
          </Link>
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


export default connect(mapStateToProps)(SideBar);
