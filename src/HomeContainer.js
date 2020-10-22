import React from 'react'
import HomeCard from './HomeCard'
import {connect} from 'react-redux'
import Navbar from './Navbar'
import { fetchNotesSuccess } from './actions/notes'


class HomeContainer extends React.Component {
 
    componentDidMount(){
        if(!this.props.auth.id)
            this.props.history.push('/login')
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notes => {
            this.props.fetchNotesSuccess(notes)
        })
    }


    renderNotes = () => {
        return this.props.notes.map(noteObj => {
           return <HomeCard noteObj={noteObj} key={noteObj.id} />
        })
    }



    
    render(){
        return(
            <div>
            <Navbar />
            {this.renderNotes()}
            </div>
            )
        }
        
        
    }
// returns object. Key/Val becomes props in connected component
// one argument, store state
const mapStateToProps = (state) => {
    return {
    notes: state.notes,
    auth: state.auth
    }
}

const mapDispatchToProps = {
    fetchNotesSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)