/* Import of required packages */
import React, { Component } from 'react'
import axios from 'axios'

/* Import of package elements */
import appConfig from '../appConfig'

/* Boostrap styles */
import '../css/styles.css';

/**
* [Class which renders the elements for a login, validating email and password for the logged in.]
*
*
* @version 1.01.00
*
* @author Miller Esteban Gallego Forero
*
* @since Available from version 1
*
*/
export default class Login extends Component {
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
    * [Method that reacts with the 'Click' event makes an axios request to the Mongo DB to send elements and validate the logged.]
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
        let response = await axios.post(appConfig.urlBackendLogin + '/users/user', this.state)
        if (response.data.length === 1) {
            console.log(response.data[0].email);
            this.changeStateApp(true, response.data[0].email)
        } else {
            alert('The email or password is wrong')
        }

    }


    /**
    * [Method that manipulates the information that is being entered into the form, 
    *       stores it in an object to send it to validation with the previous method.]
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
    * [Renders the elements for the user to enter email and password to validate if he/she is registered.]
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
                    <h1>BINGO VIRTUAL<span className="badge badge-secondary ">New</span></h1>
                    <form className='justify-content-center' style={{ width: '400px' }}>
                        <h2>Sign Up to Win</h2>
                        <br />
                        <div className="form-group ">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" name='username' className="form-control" id="exampleInputEmail1" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="alguien@alguien.com"></input>
                            <small id="emailHelp" className="form-text text-muted">Your Information will not be disclosed</small>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={this.handleChange} placeholder="Password"></input>
                        </div>
                        <br />
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <br />
                        <div className="d-flex bd-highlight">
                            <input type="buton" className="p-2 flex-fill bd-highlight btn btn-dark" onClick={this.handleClick} placeholder='Login' />
                            <a className="p-2 flex-fill bd-highlight btn btn-primary" href="/SignUp" >Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
