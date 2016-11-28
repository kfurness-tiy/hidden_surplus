import React from 'react'

import { auth } from './auth'

export default class Register extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
  }
  render () {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}
