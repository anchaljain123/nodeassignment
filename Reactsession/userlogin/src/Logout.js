/**
 * Created by anchal on 23/3/17.
 */
import React, { Component } from 'react';


import {BrowserRouter as Router ,Link ,Route ,Redirect,withRouter } from 'react-router-dom'

import Home from './Home'

class Logout extends Component {

    constructor() {
        super();

    }


    render() {
        return (
            <div>
                <Router>

                        { <div>
                                    <Redirect to="/"/>
                                    <Route exact path="/" component={Home}/>
                                </div>
                        }

                </Router>


            </div>

        );
    }
}

export default withRouter(Logout);
