'use strict';
import React, { Component } from 'react';
import axios from 'axios';

import PartsList from './PartsList';

class PartsView extends Component {

	constructor(props) {
		super(props);
		this.state = {
            ROOT_URL: 'http://localhost:3000/parts/',
		    parts: []
		};

	}

    componentDidMount() {
        axios.get(this.state.ROOT_URL)
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
