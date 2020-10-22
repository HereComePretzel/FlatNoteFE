import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginSuccess } from './actions/auth'

class Login extends React.Component {
  state = {
      username: '',
      error: null
    
  }

  handleInputChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.loginSuccess(data)
        this.props.history.push('/')
      }
    })

  }

  // render(){
  //   return(
  // <Form onSubmit={this.handleSubmit}>
  //   <Form.Field onSubmit={this.handleSubmit} className='logform'>
  //     <label>Username</label>
  //     <input name={'username'} placeholder='username' onChange={this.handleInputChange} value={this.state.username}/>
  //   </Form.Field>
  //   <Link to="/"><Button className='subbutton' type='submit'>Submit</Button></Link>
  // </Form>
  //   )
  // }


render() {
  return (
    <div>
        <h3>Sign In</h3>
        {this.state.error && <h4 style={{color:'red'}}>{this.state.error}</h4>}
        <form onSubmit={this.handleSubmit}>
          <input class='loginbox' name={'username'} onChange={this.handleInputChange} value={this.state.username}/>
          <input type='submit' value='login' />
        </form>
      </div>
    )
  }


}

const mapDispatchToProps = {
  loginSuccess
}
  export default connect(null, mapDispatchToProps)(Login)