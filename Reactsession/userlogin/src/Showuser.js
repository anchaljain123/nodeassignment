/**
 * Created by anchal on 23/3/17.
 */
/**
 * Created by anchal on 21/3/17.
 */

import React from 'react'
import Userlist from './Userlist'
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'

export default class Showuser extends React.Component{
    constructor() {
        super()
    }




    render() {
        return (
            <div>
                {
                    Userlist.map((item,i) =>(
                        this.props.match.params.id == item.id ?
                            <span>{item.name}</span> :<span></span>



                    ))
                }
            </div>
        )
    }

}