import React, { Component} from 'react';
import { Link } from 'react-router-dom';

const Part = (props) => (
  <tr>
      <td><Link to={`/part/${props.part.pprtcd}`}> {props.part.pprtcd} </Link></td>
      <td>{props.part.pprtn1}</td>
      <td>{props.part.pcat}</td>
      <td>{props.part.pprdcd}</td>
      <td>{props.part.pcstlm}</td>
      <td>{props.part.pcst}</td>
      <td>{props.part.pvndc1}</td>
  </tr>
);

export default Part;
