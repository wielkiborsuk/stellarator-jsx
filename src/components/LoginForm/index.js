import React from 'react';
import './style.css';
import Input from '../Input';
import Button from '../Button';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
      edited: {},
    };
  }

  validateForm() {
    let pass = this.state.password;
    let mail = this.state.email;
    let errors = {};

    if (this.state.edited['password']) {
      if (!pass) {
        errors['password'] = 'Password cannot be empty';
      } else if (pass.length < 8) {
        errors['password'] = 'Password is too short';
      }
    }

    if (this.state.edited['email']) {
      if (!mail) {
        errors['email'] = 'Email cannot be empty';
      } else if (!mail.match(/.+@.+/)) {
        errors['email'] = 'Invalid email format';
      }
    }

    this.setState({
      errors: errors
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.currentTarget.value,
      edited: Object.assign({email: true}, this.state.edited)
    }, this.validateForm);
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.currentTarget.value,
      edited: Object.assign({password: true}, this.state.edited)
    }, this.validateForm);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="login">
        <form>
          <Input name="email" type="email" value={this.state.email} placeholder="email address"
                 label="email address" error={this.state.errors['email']} onInputChange={this.handleEmailChange}  />
          <Input name="password" type="password" value={this.state.password} placeholder="password"
                 label="password" error={this.state.errors['password']} onInputChange={this.handlePasswordChange}  />
          <Button disabled={!!Object.keys(this.state.errors).length} loading={this.state.pending} onButtonClick={this.handleSubmit}>Login</Button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
