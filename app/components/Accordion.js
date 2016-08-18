var React = require('react');
var PropTypes = React.PropTypes;

var Accordion = React.createClass({		
	propTypes: {
		recipeName: PropTypes.string.isRequired,
		ingredients: PropTypes.string.isRequired
	},
	render: function () {
		var key = 0;
		return (
			<div className="accordion-unit">
				<div className="accordion-header">{this.props.recipeName}</div>
				<div className="accordion-body">
					{JSON.parse(this.props.ingredients).map(function (ingredient) {
						return <div key={key++}>{ingredient}</div>
					})}
				</div>
			</div>
		)
	}
}); 	

module.exports = Accordion;