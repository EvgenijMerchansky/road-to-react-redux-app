import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this)

    const { users } = this.props.adminPanel.authorizationReducer,
            userList = users.map((elem,key) => <li key={key}>{elem.email}</li>);

    return(

        <div className="authorization__module-paths-admin-item">

          <h1>Admin panel</h1>
          <ul>{userList}</ul>
        </div>

    )

  }

}

const mapStateToProps = (state) => {

  return {

    adminPanel: state

  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({

    // functions ...

  },dispatch);

}

export default connect ( mapStateToProps, mapDispatchToProps ) (AdminPanel);
