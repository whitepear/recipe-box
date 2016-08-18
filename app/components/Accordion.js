var React = require('react');
var PropTypes = React.PropTypes;

var Accordion = React.createClass({		
	propTypes: {
		recipeName: PropTypes.string.isRequired,
		ingredients: PropTypes.string.isRequired
	},
	getInitialState: function () {
		return {
			open: false
		}
	},
	toggleOpen: function () {		
		this.setState({			
			open: !(this.state.open)
		}, function () {
			console.log(this.state);
		});		
	},
	getOpenHeight: function () {
		// Refactor to apply classes rather than inline-styles
		if(this.state.open) {
			return "accordion-body open-body";			
		} else {
			return "accordion-body";
		}
	},
	render: function () {
		var key = 0;
		return (
			<div className="accordion-unit">
				<div className="accordion-header" onClick={this.toggleOpen}>{this.props.recipeName}</div>
				<div className={this.getOpenHeight()} >
					{JSON.parse(this.props.ingredients).map(function (ingredient) {
						return <div key={key++}>{ingredient}</div>
					})}
				</div>
			</div>
		)
	}
}); 	

module.exports = Accordion;