import React, { Component } from 'react'
import {Button, Form, Input, TextArea} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
        this.props.history.push('/')
        this.props.editNote(note)
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
    const { value } = this.state
    
    return (
      <Form  className="editpage" onSubmit={this.editNote}>
      <Navbar />
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Task'
            value={this.state.title}
            name='title'
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

        <Form.Button>Update</Form.Button>
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
  editNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
