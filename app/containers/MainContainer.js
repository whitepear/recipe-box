var React = require('react');
var Accordion = require('../components/Accordion.js');

var MainContainer = React.createClass({	
	getInitialState: function () {		
		// If localStorage is empty, push default recipes into localStorage
		if (Object.keys(localStorage).length === 0) {			
			localStorage.setItem('Pumpkin Pie', JSON.stringify(['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']));
			localStorage.setItem('Spaghetti', JSON.stringify(['Noodles', 'Tomato Sauce', '(Optional) Meatballs']));
			localStorage.setItem('Onion Pie', JSON.stringify(['Onion', 'Pie Crust', 'Sounds Yummy right?']));			
		}		

		return {
			browserStorage: localStorage			
		}
	},	
	render: function () {
		var key = 0;
		return (
			<div className="container">
				<div className="accordion-container">
					{Object.keys(this.state.browserStorage).map(function (recipeName) {
						return <Accordion key={key++} recipeName={recipeName} ingredients={this.state.browserStorage[recipeName]} />
					}.bind(this))}
				</div>				
			</div>			
		)
	}
});

module.exports = MainContainer;