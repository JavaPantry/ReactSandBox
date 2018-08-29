import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
* {props.match.params.partId}
*/

const PartDetail = (props) => (
    <div>
        <div>
            <h2>Part Detail {props.match.params.partId}</h2>
            <input type="text" placeholder="your email" className="form-control"></input>
            <textarea type="text" placeholder="your message" className="form-control"></textarea>
            <button className="btn btn-primary">Save</button>
        </div>
        <Link to="/home">Back to list</Link>
    </div>
);

PartDetail.contextTypes = {
    //NOT REQUIRED????  router: PropTypes.object.isRequired
}

export default PartDetail;