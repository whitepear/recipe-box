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
			inputRecipeTitle: '',
			inputIngredientList: ''			
		}
	},	
	handleRecipeDelete: function (e) {
		// delete Recipe from localStorage
		console.log(e.target.parentNode.id);
	},
	handleModalCall: function (e) {
		// activate modal 
		var buttonText = e.target.innerText;
		var parentId = e.target.parentNode.id;
		if(buttonText === 'Edit') {
			this.setState({
				modalOpen: true,
				modalType: buttonText,				
				inputRecipeTitle: parentId,
				inputIngredientList: localStorage[parentId]
			});
		} else if (buttonText === 'Add Recipe') {
			this.setState({
				modalOpen: true,
				modalType: buttonText				
			});		
		}		
	},	
	handleTextInput: function (e) {
		console.log();
		if (e.target.id === 'recipeTitle') {
			this.setState({
				inputRecipeTitle: e.target.value
			}, function () {
				console.log(this.state);
			});
		} else if (e.target.id === 'ingredientInput') {
			this.setState({
				inputIngredientList: e.target.value
			}, function () {
				console.log(this.state);
			});
		}
	},
	handleFormSubmit: function (e) {
		console.log(e.target);
    // check button value (edit or add)
    // and modify localStorage accordingly		
	},
	handleModalClose: function (e) {
		console.log(e.target);
	// modal will likely be passed a function that updates state on close, reset body header field states too
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
				</div>
				<Modal 
					modalOpen={this.state.modalOpen} 
					modalType={this.state.modalType} 
					onTextInput={this.handleTextInput}					
					inputRecipeTitle={this.state.inputRecipeTitle}
					inputIngredientList={this.state.inputIngredientList}
					onFormSubmit={this.handleFormSubmit}
					onModalClose={this.handleModalClose}
					/>				
			</div>			
		)
	}
});

module.exports = MainContainer;