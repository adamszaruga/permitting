import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    let { firebase } = this.props;
    return (
      <div className="Dashboard">
        THIS IS THE PERMITTING DASHBOARD
      </div>
    );
  }
}

export default Dashboard;
