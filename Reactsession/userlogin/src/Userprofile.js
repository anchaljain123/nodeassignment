/**
 * Created by anchal on 21/3/17.
 */

import React from 'react'
import Userlist from './Userlist'
import Showuser from './Showuser'
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'

export default class Userprofile extends React.Component{
    constructor() {
        super()
    }




    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div >

                            <ul>
                                {
                                    Userlist.map((item,i) =>(
                                        <li key={i}><Link to={`/Userprofile/`+item.id}>{item.name}</Link></li>
                                    ))
                                }



                            </ul>

                        </div>
                        <Route exact path="/UserProfile/:id"  component={Showuser} />
                    </div>
                </Router>
            </div>
        )
    }

}