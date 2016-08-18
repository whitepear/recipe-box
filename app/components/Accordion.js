var React = require('react');
var PropTypes = React.PropTypes;

var Accordion = React.createClass({		
	render: function () {
		var key = 0;
		return (
			<div>
				<div className="accordion-header">{this.props.recipeName}</div>
				<div className="accordion-body">
					{JSON.parse(this.props.ingredients).map(function (ingredient) {
						return <div key={key++}>{ingredient}</div>
					})}
				</div>
			</div>
		)

		// return (
		// 	<div className="accordion-group">
		// 	  {Object.keys(props.recipes).map(function (recipeName) {
		// 			return <div className="accordion-unit" key={key++}>
		// 		    <div className="accordion-header" id={key}>{recipeName}</div>
		// 		    <div className="accordion-body">
		// 			    {JSON.parse(props.recipes[recipeName]).map(function(ingredient) {
		// 			    	return <div key={key++}>{ingredient}</div>
		// 			    })} 	
		// 		    </div>	
		// 		  </div>	
		// 		})}
		// 	</div>
		// )
	}
}); 	

module.exports = Accordion;