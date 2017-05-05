import React, { Component } from 'react';
import { parse } from 'query-string';
import { battle } from '../utils/api';
import Player from './Player';
import Loading from './Loading';

export default class Results extends Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  }

  componentDidMount() {
    let players = parse(this.props.location.search)
    return battle([players.first, players.second])
      .then(results => {
        if (results === null) {
          return this.setState({
            error: 'ERROR: ensure both users exist',
            loading: false
          })
        }

        let [winner, looser] = results;

        this.setState({
          winner,
          looser,
          error: null,
          loading: false
        })
      })

  }
  render() {
    let { winner, looser, error, loading } = this.state;

    if (loading) {
      return (<Loading />)
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link className="button" to='/battle'>Reset</Link>
        </div>
      )
    }

    return (
      <div className="row">
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Winner'
          score={looser.score}
          profile={looser.profile}
        />
      </div>
    );
  }
}