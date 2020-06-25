import React, { Component } from 'react'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action=''>
          <input type='email' name='email' value={this.state.email} required />
          <label htmlFor='email'>Email</label>
          <input type='password' name='password' value={this.state.password} />
          <label htmlFor='password'>Password</label>
        </form>
      </div>
    )
  }
}
