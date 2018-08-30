import React, { Component} from 'react';
import { Link } from 'react-router-dom';

/*
const PartDetail = (props) => (
    <div>
        <div>
            <h2>Part Detail</h2>  <h3>{props.match.params.partId}</h3>
            <form>
            <input type="text" placeholder="your email" className="form-control"></input>
            <textarea type="text" placeholder="your message" className="form-control"></textarea>
            <button className="btn btn-primary">Save</button>
            </form>
        </div>
        <Link to="/home">Back to list</Link>
    </div>
);
*/

class PartDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {part:{}};
    }

    componentDidMount() {
        fetch("/data/partData.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        part: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        /*var parts = this.props.parts.map(part =>
            <Part key={part.pprtcd} part={part}/>
        );



        */

        return (
            <div>
                <div>
                    <h2>Part Detail</h2>  <h3> {this.props.match.params.partId}</h3>
                    <form action="#">
                        <input type="text" placeholder="multipleControl" className="form-control" ></input>  {this.state.part.multipleControl}
                        <input type="text" placeholder="returnControl" className="form-control" value={`${this.state.part.returnControl}`}></input>
                        <input type="text" placeholder="pprtcd" className="form-control" value={`${this.state.part.pprtcd}`}></input>
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
