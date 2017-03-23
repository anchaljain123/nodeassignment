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

let id;
class App extends Component {

    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            iserr:false,
            userlist:[],
        }
    }

    /**
     * Checking authentication & adding state in userlist
     * @param e -onClickevent
     * @param state-Login name &pwd
     */
    chkauth = (e,state) => {


    e.preventDefault();
    var {name,pwd}=state;

     var {userlist} = this.state ;
    let flag = 0;

    Userlist.map((item,i) => {
        if ((name == item.name) && (pwd == item.pwd)) {
            flag = 1;
            id = item.id;
            console.log(id)
        }
    })

        if(flag==1){ //User is Found

            var obj = {
                name:name,
                pwd: pwd,

            };

            userlist.push(obj);

            this.setState({
                isAuthenticated: true,
               userlist: userlist,
            })
            console.log('userlist',this.state.userlist)
        }
        else
        {
            this.setState({
                iserr:true,
            })
        }

}


  usertodo = (state) =>{

        let {userlist} = this.state ;

        console.log('usertodo',state);
        /*let obj = {
            name:name,
            date: date,
            status:status,
            show:"",
            isChecked:false,

        }
        userlist.push(obj);

        this.setState({
            list:list
        })*/

    }

    render() {
        return (
            <div>

                <Router>
                    <div>

                        <nav className="navbar navbar-inverse">

                            <ul className="nav navbar-nav">
                                <li ><Link to = "/">Home</Link></li>
                                <li><Link to = "/about">About</Link></li>
                                <li><Link to = "/login">Login</Link></li>
                            </ul>


                        </nav>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" render={props => (<Login {...props} chkauth={this.chkauth}  />)} />


                        {this.state.isAuthenticated == true ?
                            <div>
                                <Redirect to="/todo" params={{id:id}}/>
                                <Route path="/todo/:id" render={props => (<Todo {...props}  usertodo={this.usertodo} />)}/>
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
