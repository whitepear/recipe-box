var React = require('react');
var Main = require('../components/Main.js');

var MainContainer = React.createClass({
	getInitialState: function () {
		var defaultState = {
			'Pumpkin Pie': ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust'],
		   Spaghetti: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs'],
			'Onion Pie': ['Onion', 'Pie Crust', 'Sounds Yummy right?']
		};

		if (Object.keys(localStorage).length > 0) {
			return localStorage;
		} else {
			return defaultState;
		}		
	},
	render: function () {
		return (
			<div className="container">
				<Main recipes={this.state} />
			</div>			
		)
	}
});

module.exports = MainContainer;