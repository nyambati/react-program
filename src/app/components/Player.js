import React from 'react';
import { string, object, number } from 'prop-types';
import Profile from './Profile';

export default function Player(props) {
  let { label, profile, score } = props;
  let style = { textAlign: 'center' }
  return (
    <div>
      <h1 className="header">{label}</h1>
      <h3 style={style}>Score: {score}</h3>
      <Profile info={profile} />
    </div>
  )
}

Player.propTypes = {
  label: string.isRequired,
  score: number.isRequired,
  profile: object.isRequired
}