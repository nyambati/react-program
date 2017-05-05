import React, { Component } from 'react'
import { string, func } from 'prop-types';

export default class PlayerInput extends Component {
  state = {
    username: ''
  }

  handleChange = (event) => {
    let { value } = event.target;
    return this.setState({ username: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    return this.props.onSubmit(
      this.props.id, this.state.username
    )
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='header'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='GitHub username'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          type='submit'
          className='button'
          disabled={!this.state.username}
        >
          submit
        </button>
      </form>
    );
  }
}


PlayerInput.propTypes = {
  label: string.isRequired,
  id: string.isRequired,
  onSubmit: func.isRequired,
}