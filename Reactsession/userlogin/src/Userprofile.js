/**
 * Created by anchal on 21/3/17.
 */

import React from 'react'
import Userlist from './Userlist'
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'

export default class Userprofile extends React.Component{
    constructor() {
        super()
    }


    display=props=> {
    Userlist.map((item, i) => {

    if (this.props.match.params.uname  == item[name])

    return (
        <div>{item}</div>
    );

})
}

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div className="navbar">
                            <ul>
                                <li><Link to="/Userprofile">User 1</Link></li>
                                <li><Link to="/Userprofile">User 2</Link></li>

                            </ul>

                        </div>
                        <Route exact path="/UserProfile" render = { this.dislay } />
                    </div>
                </Router>
            </div>
        )
    }

}