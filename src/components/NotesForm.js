import React from 'react';
import firebase from 'firebase';

class NotesForm extends React.Component{
	constructor(){
		super();
		this.state={
			title:"",
			note:""
		}
		this.createNote=this.createNote.bind(this);
	}

	onChangeHandler(e,key){
		this.setState({
			[key]:e.target.value
		})
	}

	createNote(){
		if(this.state.title!==''&& this.state.note!==""){
			firebase.database().ref('notes').push({
				title:this.state.title,
				note:this.state.note
			})
		}
	}

	render(){
		return(
			<section className='noteform'>
				<h3>Create New Note</h3>
				<div className='form-group'>
					<label htmlFor="noteform-title">Title</label>
					<input type="text" id='noteform-title' name='noteform-title' value={this.state.title}
						className='noteform-title' onChange={(e)=>this.onChangeHandler(e,"title")}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor="noteform-note">Note</label>
					<textarea type="text" name='noteform-note' id='noteform-note' value={this.state.note} 
						className='noteform-note' onChange={(e)=>this.onChangeHandler(e,'note')}
					/>
				</div>
				<button onClick={this.createNote}>Create Note</button>
			</section>
		)
	}
}

export default NotesForm;