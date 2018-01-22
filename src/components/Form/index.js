import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Input from '../Input';
import Button from '../Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.config = props.config;
    this.config.forEach((e, i) => {
      e.index = i;
    });

    this.state = {
      errors: {},
      edited: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    let errors = {};

    this.config.forEach((f) => {
      if (f.validate && this.state.edited[f.name]) {
        let error = f.validate(this.state[f.name]);
        if (error) {
          errors[f.name] = error;
        }
      }
    });

    this.setState({
      errors: errors
    });

    return !Object.keys(errors).length;
  }

  handleChange(event) {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;

    this.setState((previousState) => ({
      [name]: value,
      edited: Object.assign({[name]: true}, previousState.edited)
    }), this.validateForm);
  }

  handleSubmit(event) {
    event.preventDefault();

    let edited = this.config.reduce((map, obj) => {
      map[obj.name] = true;
      return map;
    }, {});

    this.setState({
      edited: edited
    }, () => {
      if (this.validateForm()) {
        console.log(this.state);
      }
    });
  }

  render() {
    return (
      <div className="form">
        <form>
          {this.config.map((field) => (
          <Input
            name={field.name}
            type={field.type}
            value={this.state.email}
            placeholder={field.placeholder}
            label={field.label}
            error={this.state.errors[field.name]}
            onInputChange={this.handleChange}
            key={field.index}
          />
          ))}
          <Button
            disabled={!!Object.keys(this.state.errors).length}
            loading={this.state.pending}
            onButtonClick={this.handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Form;
