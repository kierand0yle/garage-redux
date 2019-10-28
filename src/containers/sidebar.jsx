import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class SideBar extends Component {

  firstLetter = (word) => {
    return word.charAt(0);
  }


  render() {
    return (
      <div className="sidebar">
        <div className="sb-header">
        </div>
        <div className="sb-avatar-container">
          <div className="sb-avatar">
            <h1>{this.firstLetter(this.props.garage)}</h1>
          </div>
        </div>
        <div className="sidebar-content">
          <h3>{this.props.garage}'s Garage</h3>
        </div>
        <div className="sidebar-button">
          <Link className="btn-flat" to="/cars/new">
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
