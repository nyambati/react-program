import React from 'react';
import { string, func } from 'prop-types';
import Avatar from './Avatar';

export default function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <Avatar
          img={props.avatar}
          alt={`Avatar for ${props.username}`}
        />
        <h2 className="username">@{props.username}</h2>
        {props.children}
      </div>
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: string.isRequired,
  username: string.isRequired
}