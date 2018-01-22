import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';
import Input from './components/Input';
import LoginForm from './components/LoginForm';
import Form from './components/Form';

function handleButtonClick() {
  alert('button clicked');
}

function changeHandler(event) {
  var newValue = event.currentTarget.value;
  console.log(`updating field value to ${newValue}`);
}

var formConfig = [
  {
    name: 'email',
    type: 'email',
    placeholder: 'email address',
    label: 'email address',
    validate: function (value) {
      if (!value) {
        return 'email cannot be empty';
      } else if (!value.match(/.+@.+/)) {
        return 'invalid email format';
      }
    }
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'password',
    label: 'password',
    validate: function (value) {
      if (!value) {
        return 'password cannot be empty';
      } else if (value.length < 8) {
        return 'password is too short';
      }
    }
  },
  {
    name: 'name',
    type: 'text',
    placeholder: 'full name',
    label: 'full name',
    validate: function (value) {
      if (!value) {
        return 'you need to provide a full name';
      } else if (!value.match(/[A-Za-z]+\s+[A-Za-z]+/)) {
        return 'please provide both first and last name';
      }
    }
  },
];

class App extends Component {
	render() {
		return (
			<div>
				{/*
					Component:
						Button

					Props:
						type (possible values: primary - default / secondary)
            disabled
            loadking
						onButtonClick (function)
				*/}
        <Button type="primary" onButtonClick={handleButtonClick}>hello</Button>

				{/*
					Component:
						Text

					Props:
						heading (possible values: true / false - default)
						size (possible values: small / medium - default / large)
				*/}
        <Text heading size='large'>find me here</Text>



				{/*
					Component:
						Notification

					Props:
						type (possible values: success / danger / info - default)
				*/}
        <Notification type="danger">
          check out this news
        </Notification>



				{/*
					Component:
						Input

					Props:
						type (email / text - default / phone / textarea / password)
						name (string)
						placeholder (string)
						label (string)
						value (string)
						size (possible values: small / medium - default / large)
						error (string)
						onInputChange (function)
				*/}
        <Input name="row" value="12" placeholder="row" size="medium" label="row value" error="wrong row value" onInputChange={changeHandler} />


				{/*
					Component:
						LoginForm

					Contains:
						Two input fields - email and password
						Submit button

					Expected behavior:
						Login and password should be printed in the console on submit button click
				*/}
        <LoginForm />



				{/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}
        <Form config={formConfig} />


			</div>
		);
	}
}

export default App;
