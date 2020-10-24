import React, { Component } from 'react'
import {Form, Input, TextArea} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { editNote } from './actions/notes'
import Navbar from './Navbar'


class Edit extends Component {
  state = {
    title: '',
    body: '',
    id: ''
  }


  editNote = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state)
    }
      fetch(`http://localhost:3000/notes/${this.props.notes[0].id}`, reqObj)
      .then(resp => resp.json())
      .then(note => {
        this.props.editNote(note)
        this.props.history.push('/')
      })
    }

    componentDidMount(){
      const { title, body, id } = this.props.notes[0]
      this.setState({
        title,
        body,
        id

      })
  
    }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

 
  render() {
    return (
        <div>
          <Navbar />
        <form className='newcontainer' onSubmit={this.editNote}>
        <h1 className='titletext'>Task</h1>
          <input className='titlebox' name='title' onChange={this.handleChange} value={this.state.title}/>
          <h2 className='titletext'>Description</h2>
          <textarea name='body' onChange={this.handleChange} value={this.state.body}/>
          <br></br>
          <input className='editbutton' type='submit' value='Update Task' />
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
  editNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
