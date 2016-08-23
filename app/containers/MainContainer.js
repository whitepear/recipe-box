var React = require('react');
var Accordion = require('../components/Accordion.js');
var Modal = require('../components/Modal.js');

var MainContainer = React.createClass({	
	getInitialState: function () {		
		// If localStorage is empty, push default recipes into localStorage
		if (Object.keys(localStorage).length === 0) {			
			localStorage.setItem('Pumpkin Pie', JSON.stringify(['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']));
			localStorage.setItem('Spaghetti', JSON.stringify(['Noodles', 'Tomato Sauce', '(Optional) Meatballs']));
			localStorage.setItem('Onion Pie', JSON.stringify(['Onion', 'Pie Crust', 'Sounds Yummy right?']));			
		}		

		return {
			browserStorage: localStorage,
			modalOpen: false,
			modalType: '',
			modalCallOrigin: '',			
			inputRecipeTitle: '',
			inputIngredientList: ''			
		}
	},	
	handleRecipeDelete: function (e) {
		// delete Recipe from localStorage		
		localStorage.removeItem(e.target.parentNode.id);		
		this.setState({
			browserStorage: localStorage
		});		
	},
	handleModalCall: function (e) {
		// activate modal: prepopulate modal fields if an edit
		var buttonText = e.target.innerText;
		var parentId = e.target.parentNode.id;
		if(buttonText === 'Edit') {
			this.setState({
				modalOpen: true,
				modalType: buttonText,
				modalCallOrigin: parentId,				
				inputRecipeTitle: parentId,
				inputIngredientList: JSON.parse(localStorage[parentId]).toString()
			});
		} else if (buttonText === 'Add Recipe') {
			this.setState({
				modalOpen: true,
				modalType: buttonText.slice(0,3)				
			});		
		}		
	},	
	handleTextInput: function (e) {
		// handles text input state for recipe and ingredients within modal
		if (e.target.id === 'recipeTitle') {
			this.setState({
				inputRecipeTitle: e.target.value
			});
		} else if (e.target.id === 'ingredientInput') {
			this.setState({
				inputIngredientList: e.target.value
			});
		}
	},
	handleFormSubmit: function (e) {
		if (this.state.modalType === 'Edit' && this.state.inputRecipeTitle !== this.state.modalCallOrigin) {
			// if editing a recipe and editing its title, a new localStorage property must be created and 
			// the original property must be deleted in order to simulate "overwriting" a property
			localStorage.removeItem(this.state.modalCallOrigin);
		}		
		var ingredientArray = this.state.inputIngredientList.split(',');	
		ingredientArray = ingredientArray.map(function (ingredient) {
			return ingredient.trim();
		});						
		localStorage.setItem(this.state.inputRecipeTitle, JSON.stringify(ingredientArray));
		this.handleModalClose();			    	
	},
	handleModalClose: function (e) {				
	  this.setState({
	  	browserStorage: localStorage,
			modalOpen: false,
			modalType: '',
			modalCallOrigin: '',
			inputRecipeTitle: '',
			inputIngredientList: ''	
	  });
	},	
	render: function () {
		var key = 0;
		return (
			<div className="container">
				<div className="accordion-container">
					{Object.keys(this.state.browserStorage).map(function (recipeName) {
						return <Accordion 
											key={key++}																					
											recipeName={recipeName} 
											ingredients={this.state.browserStorage[recipeName]}
											onModalCall={this.handleModalCall}	
											onRecipeDelete={this.handleRecipeDelete} />
					}.bind(this))}
					<button type="button" className="btn btn-success" onClick={this.handleModalCall}>Add Recipe</button>	
				</div>
				<Modal 
					modalOpen={this.state.modalOpen} 
					modalType={this.state.modalType} 
					modalCallOrigin={this.state.modalCallOrigin}
					onTextInput={this.handleTextInput}					
					inputRecipeTitle={this.state.inputRecipeTitle}
					inputIngredientList={this.state.inputIngredientList}
					onFormSubmit={this.handleFormSubmit}
					onModalClose={this.handleModalClose} />								
			</div>			
		)
	}
});

module.exports = MainContainer;