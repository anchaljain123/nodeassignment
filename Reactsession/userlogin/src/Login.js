/**
 * Created by anchal on 21/3/17.
 */
import React,{Component} from 'react'
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pwd: "",
            isAuthenticated:false,
        }
    }


    render() {

       return(
           <div className = "divstyle">
               Enter UserName:
               <input
                   type="text"
                   value={ this.state.name }
                   placeholder="Enter Name"
                   onChange={ event => this.setState({ name: event.target.value })}
               />
               Enter Password:
               <input
                   type="password"
                   value={ this.state.pwd }
                      placeholder="Enter Password"
                   onChange={(event) => this.setState({ pwd: event.target.value })}
               />
               <input type="submit"
                      className="button"
                      value="Login"
                      onClick={() => {
                          this.state.pwd==123?
                              this.setState({ isAuthenticated: true }, () =>(
                                  this.props.chkauthenticate(this.state.isAuthenticated,this.state.name)
                             )):<span>Not Authorised</span>
                     }}
               />


           </div>
       )

}


}