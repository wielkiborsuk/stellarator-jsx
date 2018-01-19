import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';

function handleButtonClick() {
  alert('button clicked');
}

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


				{/*
					Component:
						LoginForm

					Contains:
						Two input fields - email and password
						Submit button

					Expected behavior:
						Login and password should be printed in the console on submit button click
				*/}



				{/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}


			</div>
		);
	}
}

export default App;
