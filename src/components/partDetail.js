import React, { Component} from 'react';
import { Link } from 'react-router-dom';

const PartDetail = (props) => (
    <div>
        <div>
            <h2>Part Detail</h2>  <h3>{props.match.params.partId}</h3>
            <input type="text" placeholder="your email" className="form-control"></input>
            <textarea type="text" placeholder="your message" className="form-control"></textarea>
            <button className="btn btn-primary">Save</button>
        </div>
        <Link to="/home">Back to list</Link>
    </div>
);

export default PartDetail;