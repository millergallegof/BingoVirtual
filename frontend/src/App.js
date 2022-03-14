/* Import of required packages */
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'

/* Import of package elements */
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import WaitingRoom from './Components/WaitingRoom';
import GameBingo from './Components/GameBingo';

/**
* [Parent class which has the render method to render React-like objects.]
*
*
* @version 1.01.00
*
* @author Miller Esteban Gallego Forero
*
* @since Available from version 1
*
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      username: ''
    }
    this.updateState = this.updateState.bind(this)
  }

  /**
  * [Change the logged and username attribute to keep the session logged in.]
  *
  *
  * @param logged boolean parameter indicating login status
  * @param usernam string type parameter taken from the database
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
  async updateState(logged, username) {
    await this.setState({
      logged: logged,
      username: username
    })
  }

  /**
  * [method by which the different addresses of the project are rendered and can be accessed when logged in..]
  *
  *
  * 
  * @return returns render type elements where it routes the different js elements
  * 
  * @throws error in presenting the pledge
  *
  * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
  *
  * @since Version 1
  *
  */
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

  /**
  * [method by which the different project addresses are rendered and can be accessed when you are not logged in..]
  *
  *
  * 
  * @return returns render type elements where it routes the different js elements
  * 
  * @throws error in presenting the pledge
  *
  * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
  *
  * @since Version 1
  *
  */
  renderLogin() {
    return (
      <div>
        <Routes>
          
          <Route path='/' element={<Login onTryLogin={this.updateState}/>}></Route>
          <Route path='/SignUp' element={<SignUp onTryLogin={this.updateState}/>}></Route>
          <Route path='/GameBingo' element={<GameBingo/>}></Route>
        </Routes>
      </div>
    )
  }

  /**
  * [Method which verifies if the user is logged in to use one of the methods described above.]
  *
  *
  * 
  * @return returns render type elements where it routes the different js elements
  * 
  * @throws error in presenting the pledge
  *
  * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
  *
  * @since Version 1
  *
  */
  render() {

    if (this.state.logged) {
      return this.renderApp()
    } else {
      return this.renderLogin()
    }
  }
}