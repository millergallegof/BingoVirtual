import React, { Component, useState } from 'react'
import axios from 'axios'
import appConfig from '../appConfig'

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Login extends Component {
    constructor(props) {
        //Inicializar el constructor
        super(props)
        //Bindign functiona
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
        // const [email, setEmail] = useState('')

        let response = await axios.post(appConfig.urlBackendLogin + '/users/user', this.state)
        if (response.data.length === 1) {
            console.log(response.data[0].email);
            this.changeStateApp(true, response.data[0].email)
        } else {
            alert('The email or password is wrong')
        }

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
