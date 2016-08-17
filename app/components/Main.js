var React = require('react');
var PropTypes = React.PropTypes;

function Main (props) {
	console.log(props.recipes);
	return (
		<div>Main.</div>
	)
}

React.propTypes = {
	recipes: PropTypes.object.isRequired,
};

module.exports = Main;