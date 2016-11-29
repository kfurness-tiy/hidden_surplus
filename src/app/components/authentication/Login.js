import React from 'react';

import { login } from './auth';

export default class Login extends React.Component {
  handleSubmit (e) {
      e.preventDefault();
      login(this.email.value, this.pw.value);
    }

    render () {
      return (
        <div>
          <h2> Login </h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email</label>
              <input ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div>
              <label>Password</label>
              <input type="password"
                 placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )
    }
  }
