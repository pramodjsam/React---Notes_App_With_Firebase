import React from 'react';
import firebase from 'firebase';
import Header from './components/Header';
import NotesForm from './components/NotesForm';
import Notes from './components/Notes';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      notes:[]
    }
  }
  componentDidMount(){
    this.db=firebase.database();
    this.listenChange();
  }
  listenChange(){
    this.db.ref("notes").on("child_added",snapshot=>{
      let note={
        id:snapshot.key,
        title:snapshot.val().title,
        note:snapshot.val().note
      }
      let notes=this.state.notes;
      notes.push(note);
      this.setState({
        notes:notes
      })
    })

    this.db.ref("notes").on("child_removed",snapshot=>{
      let notes=this.state.notes;
      notes=notes.filter(note=>note.id!==snapshot.key)
      this.setState({
        notes:notes
      })
    })

  }
  render(){
    return(
      <div className='App'>
        <Header/>
        <main>
          <NotesForm/>
          <Notes notes={this.state.notes} />
        </main>
      </div>
    )
  }
}

export default App;