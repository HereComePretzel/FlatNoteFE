import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showNote, deleteNote } from './actions/notes'
import Navbar from './Navbar'


class Show extends React.Component {

  componentDidMount(){
    this.props.showNote(this.props.match.params.id)
  }

  handleDelete = () => {
    fetch(`http://localhost:3000/notes/${this.props.notes[0].id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(note => {
      this.props.history.push('/')
      this.props.deleteNote(note.id)
    })
    
  }
  
  render(){
    const link = `/edit/${this.props.notes[0].id}`
    return(
      <div>
      <Navbar />
      <Item.Group className="showcard" divided>
    <Item>
      <Icon name='thumbtack'/>

      
      <Item.Content >
        <Item.Header as='a'>{this.props.notes[0].title}</Item.Header>
        <Item.Description>{this.props.notes[0].body}</Item.Description>
        <Item.Extra>
          <Link to={link}><Button>
            Edit
            <Icon name='right chevron' />
          </Button></Link>
       <Button style={{background:'red'}} onClick={this.handleDelete}>
            Delete
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
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
    showNote,
    deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)

