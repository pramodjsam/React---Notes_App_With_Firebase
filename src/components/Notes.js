import React from 'react';
import firebase from 'firebase';

class Notes extends React.Component{
	constructor(props){
		super(props);
	}

	removeNote(id){
		firebase.database().ref("notes").child(id).remove();
	}

	render(){
		return(
			<section className='notes-wrapper'>
				<h3>Notes</h3>
				<div className='notes'>
					{this.props.notes.map((note)=>(
						<div className='note'>
							<div className='note-title'>
								<h3>{note.title}</h3>
								<div onClick={()=>this.removeNote(note.id)} className='remove'>x</div>
							</div>
							<div className='note-content'>
								<p>{note.note}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}

export default Notes;