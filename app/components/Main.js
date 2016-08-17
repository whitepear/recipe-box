var React = require('react');
var PropTypes = React.PropTypes;
var key = 0;

function keyGen () {
	key++;
	return key;
}

function Main (props) {
	console.log(props.recipes);
	
	return (
		<div className="accordion-group">
		  {Object.keys(props.recipes).map(function (recipeName) {
				return <div className="accordion-unit" key={keyGen()}>
			    <div className="accordion-header">{recipeName}</div>
			    <div className="accordion-body">
				    {JSON.parse(props.recipes[recipeName]).map(function(ingredient) {
				    	return <div>{ingredient}</div>
				    })} 	
			    </div>	
			  </div>	
			})}
		</div>
	)
}

React.propTypes = {
	recipes: PropTypes.object.isRequired,
};

module.exports = Main;