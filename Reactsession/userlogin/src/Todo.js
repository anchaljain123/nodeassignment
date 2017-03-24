
/**
 * Created by ttnd on 27/12/16.
 */

import React  from    'react'
import Tableitems from './Tableitems'
import Input from './Input'
import {BrowserRouter as Router ,Link ,Route ,Redirect } from 'react-router-dom'
import Logout from './Logout'
import Userlist from './Userlist'

let indx=0;
export default class Apptodo extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],

        }
    }
    addItem(state,e){

        let { list } = this.state ;
        let{ name,date,status } = state;

        let obj = {
            name: name,
            date: date,
            status: status,
            show: "",
            isChecked: false,
            uid: this.props.uid,

        };

        list.push(obj);

        this.setState({
            list: list
        });

        console.log(list,"----------------todo list : " )
        this.props.usertodo(this.state.list[indx++]);//sending array of objects



    }


    deleteItem = (rowkey) => {
        let {list} = this.state ;

        this.state.list.splice(rowkey,1);



        this.setState({
            list:list

        })
    }

    updateshow = (i) => {

        let { list } = this.state;
        list[i].show = !(list[i].show);
        this.setState(list)


    }

    updatestatus = (chkval,i) => {


        let { list } = this.state;
        list[i].isChecked = chkval;
        list[i].status = 'Done';
        this.setState(list)
    }

    editItem = (newstate,indx) => {

        this.updateshow(indx);

        let { list } = this.state ;

        let { text1:name,text2:date } = newstate;
        let { show,status } = list[indx];
        let newobj = { name,date,show,status };
        let objx = Object.assign([],this.state.list,{[indx]: newobj});
       console.log('after list',objx)

        this.setState({
            list: objx,
        });



    }



    render(){

        const uid = this.props.uid;

        return (

            <div>
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>TOdo</h2>
                            <hr className="star-light"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-lg-offset-5">

                            <input type ="button"
                                   value="ADD"
                                   className="btn btn-primary"
                                   style={{width:'155px'}}
                                   onClick={() =>{
                                this.setState({ hide: !this.state.hide })}}/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-lg-offset-4">
                            <div >

                                { this.state.hide?<Input addItem={this.addItem.bind(this)}/>: <span />}
                            </div>
                            <br/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6  col-lg-offset-3">
                            <div >
                                <Tableitems
                                    items={this.state.list}
                                    Deleteitem={this.deleteItem}
                                    checkstatus={this.updatestatus}
                                    edititem={this.editItem}
                                    updateshow={this.updateshow}
                                    isChecked={this.state.isChecked}
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </section>
            </div>
        )
    }

}