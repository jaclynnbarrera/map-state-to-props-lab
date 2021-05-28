import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
        <li>{this.props.userCount}</li>
          <li>{this.props.users.map((user) => user.username)}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
