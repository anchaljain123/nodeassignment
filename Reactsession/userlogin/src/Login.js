/**
 * Created by anchal on 21/3/17.
 */
import React,{Component} from 'react'
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'
import Userlist from './Userlist'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pwd: "",

        }
    }


    render() {

       return(

           <div className="container">
               <section className="success" id="about">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-12 text-center">
                               <h2>LOGIN</h2>
                               <hr className="star-light"/>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-12 col-lg-offset-3">

                               <form className="form-horizontal">
                                   <div className="form-group">
                                       <label className="control-label col-sm-2">Enter Name:</label>
                                       <div>
                                           <input
                                               type="text"
                                               value={ this.state.name }
                                               placeholder="Enter Name"
                                               style={{color:'black'}}
                                               onChange={ (event) => this.setState({ name: event.target.value }) }
                                           />
                                       </div>
                                   </div>
                                   <div className="form-group">
                                       <label className="control-label col-sm-2">Enter Password:</label>
                                       <div>
                                           <input
                                               type="password"
                                               value={ this.state.pwd }
                                               style={{color:'black'}}
                                               placeholder="Enter Password"
                                               onChange={(event) => this.setState({ pwd: event.target.value })}
                                           />
                                       </div>
                                   </div>
                                   <div className="form-group">
                                       <div className="col-sm-offset-2 col-sm-10">
                                           <input type="submit"
                                                  className="button"
                                                  value="Login"
                                                  onClick={(e) => { this.props.chkauth(e,this.state) }}
                                           />
                                       </div>
                                   </div>

                               </form>


                           </div>

                       </div>
                   </div>
               </section>


           </div>
       )

}


}