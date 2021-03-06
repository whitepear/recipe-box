var React = require('react');
var PropTypes = React.PropTypes;

var Accordion = React.createClass({		
	propTypes: {
		recipeName: PropTypes.string.isRequired,
		ingredients: PropTypes.string.isRequired,
		onModalCall: PropTypes.func.isRequired,
		onRecipeDelete: PropTypes.func.isRequired
	},
	getInitialState: function () {
		return {
			open: false
		}
	},
	toggleOpen: function () {		
		this.setState({			
			open: !(this.state.open)
		});		
	},
	getOpenHeight: function () {		
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
					<div className="text-center ingredient-title">Ingredients</div>					
					<div className="ingredient-list">
						{JSON.parse(this.props.ingredients).map(function (ingredient) {
							return <div key={key++} className="single-ingredient">{ingredient}</div>
						})}
					</div>
					<div id={this.props.recipeName}>
						<button type="button" className="btn btn-danger" onClick={this.props.onRecipeDelete}>Delete</button>
						<button type="button" className="btn btn-info" onClick={this.props.onModalCall}>Edit</button>
					</div>
				</div>
			</div>
		)
	}
}); 	

module.exports = Accordion;