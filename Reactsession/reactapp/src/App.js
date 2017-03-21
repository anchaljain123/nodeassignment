import logo from './logo.svg';
import './App.css';
import React  from    'react'
import {BrowserRouter as Router ,Link ,Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import User from './User'
class App extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="navbar">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/contact">ContactUs</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/user/123">User 1</Link></li>
                                <li><Link to="/user/456">User 2</Link></li>
                                <li><Link to="/error">Render</Link></li>

                            </ul>

                        </div>
                        <Route exact path="/" render={props=>(<Home {...props} name="test "/>)}/>
                        <Route path="/cOntact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Route path="/user/:id" component={User}/>
                        <Route path="/error" render={()=>(<div> There is an error</div>)}/>
                    </div>
                </Router>
            </div>

        );
    }
}


export default App;
