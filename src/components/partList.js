'use strict';

import Part from './part';

import React, { Component } from 'react';

class PartsList extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var parts = this.props.parts.map(part =>
			<Part key={part.pprtcd} part={part}/>
		);

		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>Part Code</th>
							<th>Part Name</th>
							<th>Description</th>
						</tr>
						{parts}
					</tbody>
				</table>
			</div>
		)
	}
}
export default PartsList;
