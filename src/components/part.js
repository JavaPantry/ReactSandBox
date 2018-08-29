import React, { Component, Link } from 'react';

const Part = (props) => (
  <tr>
      <td>{props.part.pprtcd}</td>
      <td>{props.part.pprtn1}</td>
      <td>{props.part.pcat}</td>
      <td>{props.part.pprdcd}</td>
      <td>{props.part.pcstlm}</td>
      <td>{props.part.pcst}</td>
      <td>{props.part.pvndc1}</td>
  </tr>
);

/*<td><Link to="/about"> Link </Link></td>*/


export default Part;
