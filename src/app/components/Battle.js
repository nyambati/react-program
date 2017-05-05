import React, { Component } from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { Link } from 'react-router-dom';

export default class Battle extends Component {

  state = {
    one: { avatar: null, name: '' },
    two: { avatar: null, name: '' }
  }

  handleSubmit = (id, name) => {
    console.log(id, name)
    let state = {
      [id]: {
        name,
        avatar: `https://github.com/${name}.png?size=200`
      }
    }
    this.setState(state);
  }

  handleReset = (id) => {
    let state = {
      [id]: {
        name: '',
        avatar: null
      }
    }
    this.setState(state);
  }

  render() {
    let { one, two } = this.state;

    let battle = {
      pathname: `${this.props.match.url}/results`,
      search: `?first=${one.name}&second=${two.name}`
    }

    return (
      <div>
        <div className="row">

          {!one.name && <PlayerInput id='one' label='Player One' onSubmit={this.handleSubmit} />}

          {one.avatar !== null &&
            <PlayerPreview avatar={one.avatar} username={one.name}>
              <button className="reset" onClick={this.handleReset.bind(null, 'one')}>
                Reset
            </button>
            </PlayerPreview>
          }
          {!two.name && <PlayerInput id='two' label='Player Two' onSubmit={this.handleSubmit} />}

          {two.avatar !== null &&
            <PlayerPreview
              avatar={two.avatar}
              username={two.name}
            >
              <button className="reset"
                onClick={this.handleReset.bind(null, 'two')}
              >
                Reset
              </button>
            </PlayerPreview>
          }
        </div>
        {one.avatar && two.avatar &&
          <Link className="button" to={battle}>
            Battle
          </Link>
        }
      </div>
    );
  }
}
