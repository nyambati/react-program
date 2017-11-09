import React from 'react';
import PlayerPreview from './PlayerPreview';
import { object } from 'prop-types';
export default function Profile(props) {
  let { info } = props;
  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url} >
      <ul className='space-list-items' >
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: object.isRequired
}