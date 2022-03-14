/* Import of required packages */
import React, { Component } from 'react'
import axios from 'axios'
import appConfig from '../appConfig'

/* Boostrap styles */
import 'bootstrap/dist/css/bootstrap.min.css';

/**
* [Class that renders a format for the user to register and send the information to the mongo database.]
*
*
* @version 1.01.00
*
* @author Miller Esteban Gallego Forero
*
* @since Available from version 1
*
*/
export default class SignUp extends Component {
  constructor(props) {
    /* Initialize the constructor */
    super(props)
    /* Bindign functiona */
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.changeStateApp = this.props.onTryLogin;
    /* Components definition */
    this.state = {
      email: '',
      password: ''
    }
  }

  /**
    * [Method that reacts with the 'Click' event which sends the new user information.]
    *
    *
    * 
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    *
    */
  async handleClick() {
    axios.post(appConfig.urlBackendLogin + '/user', this.state).then(res => res.data)
    this.changeStateApp(true, this.state.email)
  }


  /**
    * [Method which implements the saving of changes in an object which will be sent to the database with the previous method.]
    *
    *
    * @param e stores the value that is sent when an event occurs.
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    */
  async handleChange(e) {
    if (e.target.name === 'username') {
      await this.setState({
        email: e.target.value
      })
    } else {
      await this.setState({
        password: e.target.value
      })
    }
  }

  /**
    * [Renders the form for new user registration using methods to store the entered data in an object.]
    *
    *
    * @return Renders the elements of the previous methods plus the page header.
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    *
    */
  render() {
    return (
      <div className='container ' style={{ marginTop: '100px' }}>
        <div className='d-flex justify-content-center align-items-center border' style={{ height: '600px' }}>
          <form className='justify-content-center' style={{ width: '400px' }}>
            <h2 className='text-center'>Sign Up</h2>
            <br />
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">New Email</label>
              <input type="email" name='username' className="form-control" id="exampleInputEmail1" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="alguien@alguien.com"></input>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">New Password</label>
              <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Password"></input>
              <small id="emailHelp" className="form-text text-muted">The password must have between 8 and 16 characters, at least one digit, at least one lower case letter,
                at least one upper case letter and at least one non-alphanumeric character.</small>
            </div>
            <br />
            <div className="d-flex bd-highlight">
              <input type="buton" className="p-2 flex-fill bd-highlight btn btn-dark" onClick={this.handleClick} placeholder='Sign Up' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
