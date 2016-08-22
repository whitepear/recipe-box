var React = require('react');
var PropTypes = React.PropTypes;

//
//
// implement the following in handleModalCall in container
// if modalType === 'edit' {
// 	this.setState({
// 			modalOpen: true,
// 			modalType: buttonText,
// 			modalCallOrigin: parentId,
//      inputRecipeTitle: parentId,
//      inputIngredientList: localStorage[modalCallOrigin].join()
// 		});		
// }
//
//
//

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
								<label htmlFor="recipeTitle" className="control-label">Recipe</label>
								<input type="text" id="recipeTitle" className="form-control" onChange={props.onTextInput} value={props.inputRecipeTitle} placeholder="Enter a recipe name"/>
							</div>
							<div className="form-group">
								<label htmlFor="ingredientInput" className="control-label">Ingredients</label>
								<textarea name="ingredient-list" id="ingredientInput" className="form-control" onChange={props.onTextInput} value={props.inputIngredientList} placeholder="Enter ingredients separated by commas. E.g. 'Tomatoes,Peppers,Beans'">
								</textarea>								
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
	modalCallOrigin: PropTypes.string.isRequired,
	onTextInput: PropTypes.func.isRequired,
	inputRecipeTitle: PropTypes.string.isRequired,
	inputIngredientList: PropTypes.string.isRequired,
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