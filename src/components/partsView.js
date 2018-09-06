'use strict';
import React, { Component } from 'react';
import { API } from '../utils/api';

import PartsList from './PartsList';

class PartsView extends Component {

	constructor(props) {
		super(props);
		this.state = {
		    parts: []
		};

	}

    componentDidMount() {
        API.get()
            .then(response => {
                this.setState({
                    isLoaded: true,
                    parts: response.data
                });
            })
            .catch(error => console.log(error));
    }

	render() {
		return (
			<div>
				<PartsList parts={this.state.parts}/>
			</div>
		)
	}
}
export default PartsView;
