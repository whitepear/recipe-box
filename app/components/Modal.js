var React = require('react');
var PropTypes = React.PropTypes;

function Modal (props) {
	if (props.modalOpen) {
		return (
			<div className="modal-container active">
				<div className="modal-group">
					<div className="modal-header">						
						<div>{props.modalType} Recipe</div>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label htmlFor="recipe-title" className="control-label">Recipe</label>
								<input type="text" id="recipe-title" className="form-control" onChange={props.onTextInput} placeholder="Enter a recipe name"/>
							</div>
							<div className="form-group">
								<label htmlFor="ingredient-input" className="control-label">Ingredients</label>
								<input type="text" id="ingredient-input" className="form-control" onChange={props.onTextInput} placeholder="Enter ingredients separated by commas. E.g. 'Tomatoes,Peppers,Beans'"/>
							</div>
						</form>
					</div>
					<div className="modal-footer">						
						<button type="button" className="btn btn-success" onClick={props.onFormSubmit}>{props.modalType} Recipe</button>						
						<button type="button" className="btn btn-warning" onClick={props.onModalClose}>Close</button>
					</div>
				</div>
			</div>
		) 
	} else {
		return <div className="modal-container">Inactive.</div>		
	}
}

Modal.propTypes = {	
	modalOpen: PropTypes.bool.isRequired,
	modalType: PropTypes.string.isRequired,
	recipeOrigin: PropTypes.string.isRequired,
	onTextInput: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onModalClose: PropTypes.func.isRequired
};

module.exports = Modal;













// return (
		// 	<div className="inactive-modal-container">
		// 		<div className="inactive-modal">
		// 			<div className="modal-header"></div>
		// 			<div className="modal-body"></div>
		// 			<div className="modal-footer"></div>
		// 		</div>
		// 	</div>
		// )