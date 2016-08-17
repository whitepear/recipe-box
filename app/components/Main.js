var React = require('react');
var PropTypes = React.PropTypes;

function Main (props) {
	console.log(props.recipes);
	var key = 0;
	return (
		<div className="accordion-group">
		  {Object.keys(props.recipes).map(function (recipeName) {
				return <div className="accordion-unit" key={key++}>
			    <div className="accordion-header" id={key}>{recipeName}</div>
			    <div className="accordion-body">
				    {JSON.parse(props.recipes[recipeName]).map(function(ingredient) {
				    	return <div key={key++}>{ingredient}</div>
				    })} 	
			    </div>	
			  </div>	
			})}
		</div>
	)
}

Main.propTypes = {
	recipes: PropTypes.object.isRequired,
};

module.exports = Main;