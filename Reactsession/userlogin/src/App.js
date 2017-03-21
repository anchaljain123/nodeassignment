import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

class App extends Component {

 showuser = ({ history},Authenticate,uname) => (
   /* Authenticate ?
          <Route render =  { () => { history.push('/Userprofile/:uname') } } />
            :
            <p>You are not logged in.</p>*/
            console.log('sdjkckldj')

)

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="navbar">
                            <ul>
                                <li><Link to = "/">Home</Link></li>
                                <li><Link to = "/login">Login</Link></li>
                            </ul>

                        </div>
                        <Route exact path="/" component={Home}/>
                        <Route path = "/login" render = { props => (<Login {...props} chkauth = { this.showuser }/>) }/>

                    </div>
                </Router>


            </div>

        );
    }
}

export default App;
