import React from 'react'
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

render() {
  return (
    <div className='logincontainer'>
        <h3 className='signintext'>FlatNote</h3>
        {this.state.error && <h4 style={{color:'orange'}}>{this.state.error}</h4>}
        <form onSubmit={this.handleSubmit}>
          <input className='loginbox' name={'username'} onChange={this.handleInputChange} value={this.state.username}/>
          <input className='loginbutton' type='submit' value='login' />
        </form>
      </div>
    )
  }


}

const mapDispatchToProps = {
  loginSuccess
}
  export default connect(null, mapDispatchToProps)(Login)