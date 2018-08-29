'use strict';
import React, { Component } from 'react';
import PartsList from './partList';

class PartsView extends Component {

	constructor(props) {
		super(props);
		this.state = {parts: [
			{"multipleControl":"N","returnControl":"0","pprtcd":"07AA75062      ","pprtn1":"DPS PART                      ","pprtst":"07AA75062                    ","pcat":"231","pprdcd":"D ","pcstlm":6.5,"pcst":6.5,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"20AA15150      ","pprtn1":"DPS PART                      ","pprtst":"20AA15150                     ","pcat":"231","pprdcd":"D ","pcstlm":2.17,"pcst":2.17,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"50GAA70400     ","pprtn1":"DPS PART                      ","pprtst":"50GAA70400                    ","pcat":"231","pprdcd":"D ","pcstlm":0.01,"pcst":0.01,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA20700      ","pprtn1":"DPS PART                      ","pprtst":"56AA20700                     ","pcat":"231","pprdcd":"D ","pcstlm":4.91,"pcst":4.91,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA207800     ","pprtn1":"DPS PART                      ","pprtst":"56AA207800                    ","pcat":"231","pprdcd":"D ","pcstlm":0.01,"pcst":0.01,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA42541      ","pprtn1":"DPS PART                      ","pprtst":"56AA42541                     ","pcat":"231","pprdcd":"D ","pcstlm":15.56,"pcst":15.56,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA42701      ","pprtn1":"DPS PART                      ","pprtst":"56AA42701                     ","pcat":"231","pprdcd":"D ","pcstlm":1.83,"pcst":1.83,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA53160      ","pprtn1":"DPS PART                      ","pprtst":"56AA53160                     ","pcat":"231","pprdcd":"D ","pcstlm":1.15,"pcst":1.15,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA6020       ","pprtn1":"DPS PART                      ","pprtst":"56AA6020                      ","pcat":"231","pprdcd":"D ","pcstlm":0.01,"pcst":0.01,"pvndc1":"OCEUSA"}
			,{"multipleControl":"N","returnControl":"0","pprtcd":"56AA77180      ","pprtn1":"DPS PART                      ","pprtst":"56AA77180                     ","pcat":"231","pprdcd":"D ","pcstlm":10.98,"pcst":10.98,"pvndc1":"OCEUSA"}
		]};

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
