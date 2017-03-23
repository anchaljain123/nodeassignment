/**
 * Created by anchal on 23/3/17.
 */


import React from 'react'


class Tableitems extends React.Component{
    constructor(){
        super();

        this.state = {
            text1: "",
            text2: "",
            ischk:false,
        }
    }

ComponentWillUpdate(state)
{
    this.setState({
        ischk:true,
    })
}

    render(){

        return(
            <div class="table-responsive" style={{'display':'inline'}}>
                {this.props.items.map((item, i) => {

                    return (

                        <div key={i} className="row">
                            {item.show?
                                <div>
                                    <div className="col-xs-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.text1}
                                            style={{fontFamily:'monospace',width:'200px'}}
                                            placeholder="Enter Todo Name"
                                            onChange={(event) => {
                                                console.log("called")
                                                this.setState({text1: event.target.value});
                                            }}/>
                                    </div>
                                    <div className="col-xs-3">
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={this.state.text2}
                                            style={{fontFamily:'monospace'}}
                                            placeholder="Enter Todo Date"
                                            onChange={(event) => {
                                                this.setState({text2: event.target.value});

                                            }}

                                        />
                                    </div>
                                    <div className="col-xs-1" style={{marginTop:'14px'}}>
                                        {item.status}
                                    </div>
                                    <div className="col-xs-1">
                                        <input
                                            type="button" style={{fontFamily:'monospace'}}
                                            value="Save Updates" className=" btn btn-success"
                                            onClick={(event) => {

                                                this.props.edititem(this.state,i);

                                            }}

                                        />
                                    </div>
                                </div>

                                :<div  className="panel panel-default">
                                    <div style={{display:'inline-block',fontFamily:' monospace'}} className="panel-body"> {item.name} </div>
                                    <div style={{display:'inline-block',fontFamily:' monospace'}} className="panel-body"> {item.date} </div>
                                    <div style={{display:'inline-block',fontFamily:' monospace'}} className="panel-body"> {item.status} </div>
                                    <div style={{display:'inline-block'}} className="panel-body ">

                                        <input type="checkbox" value=" " checked={this.state.ischk}
                                               onChange={(event)=>{
                                                   this.setState({ischk: event.target.value});
                                                   (this.props.checkstatus(event.target.checked,i))}}
                                        />&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button
                                            type="button" style={{fontFamily:'monospace'}}
                                            value="Delete" className="btn btn-default "
                                            onClick={() => (this.props.Deleteitem(i))}
                                        >
                                            <span className="glyphicon glyphicon-remove">Delete</span>
                                        </button>
                                    </div>

                                    <div style={{display:'inline-block'}} className="panel-body">
                                        <button type="button" style={{fontFamily:'monospace'}}
                                                className="btn btn-default btn-sm"
                                                onClick={(event) => this.props.updateshow(i)} >
                                            <span className="glyphicon glyphicon-pencil" ></span>Edit
                                        </button></div>

                                </div>}
                        </div>


                    );

                })
                }
            </div>

        );
    }
}



export default Tableitems;
