import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class PartDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ROOT_URL: 'http://localhost:3000/parts/',
            part:{}
        };
        //this.handlepPrtcdChange = this.handlepPrtcdChange.bind(this);
        //after binding u can use in form `<input type="text" placeholder="pprtcd" className="form-control" value={`${this.state.part.pprtcd}`} onChange={this.handlepPrtcdChange}></input>`
    }

    componentDidMount() {
        axios.get(this.state.ROOT_URL+this.props.match.params.partId)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    part: response.data
                });
            })
            .catch(error => console.log(error));
    }

    handlepPrtcdChange(event) {
        let part =  this.state.part;
        part =  Object.assign({}, part, {pprtcd: event.target.value});
        let state =  this.state;
        state =  Object.assign({}, state, {part: part});
        this.setState(state);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Part Detail</h2>  <h3> {this.props.match.params.partId}</h3>
                    <form action="#">
                        <input type="text" placeholder="multipleControl" className="form-control" ></input>  {this.state.part.multipleControl}
                        <input type="text" placeholder="returnControl" className="form-control" value={`${this.state.part.returnControl}`}></input>
                        <input type="text" placeholder="pprtcd" className="form-control" value={`${this.state.part.pprtcd}`} onChange={this.handlepPrtcdChange.bind(this)}></input> {this.state.part.pprtcd}
                        <input type="text" placeholder="pprtn1" className="form-control" value={`${this.state.part.pprtn1}`}></input>
                        <input type="text" placeholder="pprtst" className="form-control" value={`${this.state.part.pprtst}`}></input>
                        <input type="text" placeholder="pcat" className="form-control" value={`${this.state.part.pcat}`}></input>
                        <input type="text" placeholder="pprdcd" className="form-control" value={`${this.state.part.pprdcd}`}></input>
                        <input type="text" placeholder="pcstlm" className="form-control" value={`${this.state.part.pcstlm}`}></input>
                        <input type="text" placeholder="pcst" className="form-control" value={`${this.state.part.pcst}`}></input>
                        <input type="text" placeholder="pvndc1" className="form-control" value={`${this.state.part.pvndc1}`}></input>
                        <br/>
                        <button className="btn btn-primary">Save</button>
                    </form>
                </div>
                <Link to="/home">Back to list</Link>
            </div>
        )
    }
}
export default PartDetail;
