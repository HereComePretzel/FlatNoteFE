import React, { Component } from 'react'
import {Form, Input, TextArea} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { newNote } from './actions/notes'
import Navbar from './Navbar'


class New extends Component {
  state = {
    title: '',
    body: '',
    user_id: '5'
  }


  addNote = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/notes', reqObj)
    .then(resp => resp.json())
    .then(note => {
      this.props.history.push('/')
      this.props.newNote(note)
      
    })
    }
  

    // componentDidMount(){
    //   this.setState({
    //     title: '',
    //     body: '',
    //     id: ''
    //   })
    // }
  

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
        <div>
          <Navbar />
        <form className='newcontainer' onSubmit={this.addNote}>
        <h1 className='titletext'>Task</h1>
          <input name='title' className='titlebox' onChange={this.handleChange} value={this.state.title}/>
          <h2 className='titletext'>Description</h2>
          <textarea name='body' onChange={this.handleChange} value={this.state.body}/>
          <br></br>
          <input className='addbutton' type='submit' value='Add Task' />
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  notes: state.notes
  }
}


const mapDispatchToProps = {
  newNote
}


export default connect(mapStateToProps, mapDispatchToProps)(New)
