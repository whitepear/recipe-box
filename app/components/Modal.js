var React = require('react');
var PropTypes = React.PropTypes;

function Modal (props) {
	if (props.modalOpen) {
		return (
			<div className="active-modal-container">
				<div className="active-modal">
					<div className="modal-header">
						{if (props.modalType === 'Edit') {
							<div>Edit Recipe</div>
						} else if (props.modalType === 'Create') {
							<div>Add a Recipe</div>
						}}
					</div>
					<div className="modal-body"></div>
					<div className="modal-footer">
						{if (props.modalType === 'Edit') {
							<button>Edit Recipe</button>
						} else if (props.modalType === 'Create') {
							<button>Add Recipe</button>
						}}
						<button>Close</button>
					</div>
				</div>
			</div>
		) 
	} else {
		return <div className="inactive-modal-container">Inactive.</div>
		// return (
		// 	<div className="inactive-modal-container">
		// 		<div className="inactive-modal">
		// 			<div className="modal-header"></div>
		// 			<div className="modal-body"></div>
		// 			<div className="modal-footer"></div>
		// 		</div>
		// 	</div>
		// )
	}
}

Modal.propTypes = {	
	modalOpen: PropTypes.bool.isRequired,
	modalType: PropTypes.string
};

module.exports = Modal;