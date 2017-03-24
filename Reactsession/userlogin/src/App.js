import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router ,Link ,Route ,Redirect ,withRouter} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Logout from './Logout'
import About from './About'
import Userprofile from './Userprofile'
import Todo from './Todo'
import Userlist from './Userlist'
var jsonfile = require('jsonfile');


let id;
let indx;
class App extends Component {

    constructor() {
        super();
        this.state = {
            isAuthenticated:  false,
            iserr: false,
            userlist: [],
        }
    }




    /**
     * Checking authentication & adding state in userlist
     * @param e -onClickevent
     * @param state-Login name &pwd
     */
    chkauth = (e,state) => {


    e.preventDefault();
    let { name : uname ,pwd } = state;
    let {userlist} = this.state ;
    let flag = 0;

    Userlist.map((item,i) => {
        if ((uname == item.name) && (pwd == item.pwd)) {
            flag = 1;
            id = item.id;

        }
    })

        if(flag == 1){ //User is Found

            var obj = {
                uid: id,
                uname: uname,
                pwd: pwd,
                arry: [],

            };

            userlist.push(obj);

            this.setState({
                isAuthenticated: true,
               userlist: userlist,
            })

        }
        else
        {
            this.setState({
                iserr: true,
            })
        }

}

  usertodo = (state) =>{

         let { userlist } = this.state ;
         console.log("-----------------HIIIIII from todo")

           // let { uid } =state;
           // console.log(uid,'----------------uid from state')

        let flag=0;
        let f=0;


      userlist.forEach((item,i) => {


          if(id == item.uid){

              indx=i; //index where this user is present
              f=1;

          }

      });

      if( f== 1 ){

          userlist[indx].arry.push(state);

       this.setState({
           userlist: userlist
       })

          console.log(" Final List Of A User :",userlist)
      }


    }

logoauth = () =>{

    this.setState({
        isAuthenticated:  false,
    });
    console.log(this.state.isAuthenticated,"----------------logout")
    }

    render() {
        console.log(this.state.isAuthenticated,'-------------user list authentication')
        return (
            <div>

                <Router>
                    <div style={{marginLeft:'10px'}}>

                        <nav className="navbar navbar-inverse">

                            <ul className="nav navbar-nav">
                                <li ><Link to = "/">Home</Link></li>
                                <li><Link to = "/about">About</Link></li>
                                <li ><Link to = "/login">Login</Link></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right"  id="ulid">
                                <li style={{marginRight:'10x'}}><Link to = "/logout">Logout</Link></li>
                            </ul>

                        </nav>

                        <Route exact path = "/" component={Home}/>
                        <Route path = "/about" component={About}/>
                        <Route path = "/login" render={props => (<Login {...props} chkauth={this.chkauth}  />)} />
                        <Route path = "/logout" render ={props => (<Logout{...props}
                                                                         logoutauth={this.logoauth} />)}
                               />

                        {

                            this.state.isAuthenticated  ?
                            <div>

                                <Redirect  to = {`/todo/${id}`} />
                                <Route path = "/todo/:id"
                                       render ={props => (<Todo {...props}  uid={id}
                                                                  usertodo={this.usertodo} />)}
                                />
                            </div> :""
                        }

                        {this.state.iserr ? <p style={{color:'red'}}>Incorrect UserName or Password </p> : ''}


                    </div>
                </Router>


            </div>

        );
    }
}

export default App;
