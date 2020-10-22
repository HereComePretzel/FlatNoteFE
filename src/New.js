import React, { Component } from 'react'
import {Form, Input, TextArea, Container} from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { newNote } from './actions/notes'
import Navbar from './Navbar'


class New extends Component {
  state = {
    title: '',
    body: '',
    user_id: '4'
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
  

    componentDidMount(){
      this.setState({
        title: '',
        body: '',
        id: ''
      })
    }
  

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }
  render() {
    // const { value } = this.state
    return (
      
      <Form className="newform" onSubmit={this.addNote}>
      <Navbar />
        <Form.Group widths='equal' align='center'>
          <Form.Field 
            control={Input}
            class='newtaskname'
            name= 'title'
            value={this.state.title}
            label='Task'
            placeholder='Task'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Details'
          name='body'
          value={this.state.body}
          onChange={this.handleChange}
        />

        <Form.Button>Add Task</Form.Button>
      </Form>
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
