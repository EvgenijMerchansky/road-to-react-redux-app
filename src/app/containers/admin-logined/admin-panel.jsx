import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteUser, changeUser } from '../../actions/admin-actions/admin-actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.changeValue = '';
    this.state = {
        openMenu: false
    }
  }

  openChangeUserMenu = () => {

    this.setState({

        openMenu: true

    });

  };

  hideChangeUserMenu = () => {

    this.setState({

        openMenu: false

    });

  };

  saveStateValue = () => {

      this.setState({

          openMenu: false

      });

  };

  render() {

    const openChangeMenu = { display: this.state.openMenu === true ? 'block' : 'none' },
          displayNoneStyle = { display: 'none' },
          displayBLockStyle = { display: 'block' };


    const { users } = this.props.adminPanel.authorizationReducer,
            userList = users.map((elem,key) => {
              return (
                <div key={key} className="authorization__module-paths-admin-item-user">
                  <h1>{elem.name}</h1>
                  <br/>
                  <p>{elem.email}</p>
                  <br/>
                  <button onClick={::this.openChangeUserMenu} style={this.state.openMenu === true ? displayNoneStyle : displayBLockStyle}>Change</button>



                    <div style={openChangeMenu}>
                      <label>New name:</label>
                      <input
                          type='text'
                          onChange={ev => this.changeValue = ev.target.value}
                          placeholder={`chanege: ` + elem.name}
                      />
                      <button
                        onClick={() => {this.props.changeUser(this.changeValue, key); this.saveStateValue.call(this)}}>
                          Save
                      </button>
                      <button
                        onClick={() => {this.props.deleteUser(elem)}}>
                          Delete user
                      </button>
                      <button
                          onClick={::this.hideChangeUserMenu}>
                          Cancel
                      </button>
                    </div>



                </div>
              )
            });

    return(

        <div className="authorization__module-paths-admin-item">

          <h1>Admin panel</h1>
            <Link to="/map">Map</Link>
          {userList}
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

    deleteUser,
    changeUser

    // functions ...

  },dispatch);

}

export default connect ( mapStateToProps, mapDispatchToProps ) (AdminPanel);
