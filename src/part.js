'use strict';

const React = require('react');
const ReactDOM = require('react-dom')

class Part extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.part.pprtcd}</td>
                <td>{this.props.part.pprtn1}</td>
            </tr>
        )
    }
}

export default Part;
