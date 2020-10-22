import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutSuccess } from './actions/auth'


class Navbar extends React.Component {
        render() {
        return(
            <div className="ui menu" id='navbar' style={{background: '#413620'}}>
              <div className="left menu">
              <Link  id="RouterNavLink" to="/"><Button size='big'>FlatNote</Button></Link>
                
                </div>
              <div className="right menu">
                <Link id="RouterNavLink" to="/new"><Button size='big'>New Note</Button></Link>
                <Link id="RouterNavLink" to="/login" onClick={this.props.logoutSuccess}><Button size='big'>Sign Out</Button></Link>
                </div>
          </div>
        )
    }}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)