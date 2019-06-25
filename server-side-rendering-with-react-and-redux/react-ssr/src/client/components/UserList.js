import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <p>List of users:</p>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
