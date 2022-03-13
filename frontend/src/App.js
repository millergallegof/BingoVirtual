// importacion de librerias
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
//importacion componentes proyecto
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import WaitingRoom from './Components/WaitingRoom';

// Definicion de la clase
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      username: ''
    }
    this.updateState = this.updateState.bind(this)
  }

  async updateState(logged, username) {
    await this.setState({
      logged: logged,
      username: username
    })
  }

  renderApp() {
    return (
      <div>
        <div>
          <Routes>
            <Route path='/' element={<WaitingRoom />}></Route>
            <Route path='/index' element={<WaitingRoom />}></Route>
            <Route path='/SignUp' element={<WaitingRoom />}></Route>
          </Routes>
        </div>
      </div>
    )
  }

  renderLogin() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Login onTryLogin={this.updateState}/>}></Route>
          <Route path='/SignUp' element={<SignUp onTryLogin={this.updateState}/>}></Route>
        </Routes>
      </div>
    )
  }

  render() {

    if (this.state.logged) {
      return this.renderApp()
    } else {
      return this.renderLogin()
    }
  }
}