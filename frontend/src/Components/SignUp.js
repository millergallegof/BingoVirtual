import React, { Component } from 'react'
import axios from 'axios'
import appConfig from '../appConfig'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignUp extends Component {
  constructor(props) {
    //Inicializar el constructor
    super(props)
    //Bindign function
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.changeStateApp = this.props.onTryLogin;
    //Components definition
    this.state = {
      email: '',
      password: ''
    }
  }

  //manejo del 
  async handleClick() {

    axios.post(appConfig.urlBackendLogin + '/user', this.state).then(res => res.data)
    this.changeStateApp(true, this.state.email)
  }

  //manipular cuando se cambia algo
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
