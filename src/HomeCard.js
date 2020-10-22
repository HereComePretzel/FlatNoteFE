import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const HomeCard = props => {
  const showLink = `/show/${props.noteObj.id}`
  
    return(
  <Item.Group className='center'>
    <Item>
      <Icon name='thumbtack' size='large' corner='bottom right' color='brown'/>

      <Item.Content>
        <Item.Header as='a'>{props.noteObj.title}</Item.Header>
        <Item.Description>{props.noteObj.body}</Item.Description>
        <Item.Extra>
        <Link to={showLink}><Button>
            View
            <Icon name='right chevron' />
          </Button></Link>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>


    )
  }



export default connect(null, null)(HomeCard)

