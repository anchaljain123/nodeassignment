import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Userprofile from './Userprofile'
class App extends Component {

    constructor() {
        super();
        this.state = {
            isAuthenticated:false,
        }
    }

chkauth =(pwd) =>{

       if( pwd==123){
            this.setState({
                isAuthenticated:true
            })
       }

}

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
                        {this.state.isAuthenticated == true ?
                            <div>
                                <Redirect to="/userprofile"/>
                                <Route path="/userprofile" component={Userprofile}/>
                            </div> :
                            <Route path="/login" render={props => (<Login {...props} chkauth={this.chkauth}/>)}/>
                        }
                    </div>
                </Router>


            </div>

        );
    }
}

export default App;
