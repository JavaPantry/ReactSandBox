'use strict';
import React, { Component } from 'react';
import PartsList from './PartsList';

class PartsView extends Component {

	constructor(props) {
		super(props);
		this.state = {parts: []};

	}

    componentDidMount() {
        // Create React App includes a polyfill for `fetch()` so you can use it without worrying about the browser support.
        fetch("/data/parts.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        parts: result.parts
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
		return (
			<div>
				<PartsList parts={this.state.parts}/>
			</div>
		)
	}
}
export default PartsView;
