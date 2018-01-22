import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Input from '../Input';
import Button from '../Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.config = props.config;

    this.state = {
      errors: {},
      edited: {},
    };
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

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      edited: Object.assign({[event.currentTarget.name]: true}, this.state.edited)
    }, this.validateForm);
  }

  handleSubmit = (event) => {
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
          {this.config.map((field, index) => (
            <Input name={field.name} type={field.type} value={this.state.email} placeholder={field.placeholder}
                   label={field.label} error={this.state.errors[field.name]} onInputChange={this.handleChange} key={index} />
          ))}
          <Button disabled={!!Object.keys(this.state.errors).length} loading={this.state.pending} onButtonClick={this.handleSubmit}>Login</Button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Form;
