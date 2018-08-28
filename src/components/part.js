import React, { Component } from 'react';

class Part extends Component {

    // WARN: Useless constructor  no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <tr>
                <td>{this.props.part.pprtcd}</td>
                <td>{this.props.part.pprtn1}</td>
            </tr>
        )
    }
}

/*
TypeError: Cannot read property 'part' of undefined
const Part = () => (
  <tr>
      <td>{this.props.part.pprtcd}</td>
      <td>{this.props.part.pprtn1}</td>
  </tr>
);*/

export default Part;
