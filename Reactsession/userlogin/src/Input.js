/**
 * Created by anchal on 17/3/17.
 */
/**
 * Created by anchal on 15/3/17.
 */
import React from 'react'


export default class Input extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            date: "",
            status: "Pending",

        }

    }

    render() {

        return (<div className="row">
            <form className="form-inline">
                <div className="form-group">
                    <label class="control-label col-sm-2">Enter Name:</label>
                    <div>

                    <input type="text" value={this.state.name} className="form-control"
                           placeholder="Enter Todo Name " onChange={(event) => this.setState({name: event.target.value})}
                    />
                </div>
                </div>
                <div className="form-group">
                    <label class="control-label col-sm-2">Enter TodoDate:</label>
                    <div>
                    <input type="date" value={this.state.date} className="form-control" id="date"
                           placeholder="Enter dateformat dd/mm/yy"
                           onChange={(event) => this.setState({date: event.target.value})}
                    />
                </div>
                </div>


                    <div>
                    <input type="button" className="btn btn-success" value="Save" onClick={() => {

                        this.props.addItem(this.state)
                    }}/>
                    </div>

            </form>
            </div>

        );

    }









}
/**
 * Created by anchal on 23/3/17.
 */
