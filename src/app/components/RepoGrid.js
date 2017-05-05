import React from 'react';
import { array } from 'prop-types';
import Avatar from './Avatar';

export default function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map((repo, index) => {
        return (<li className='popular-item' key={repo.name}>
          <div className='popular-rank'>
            #{index + 1}
          </div>
          <ul className='space-list-item'>
            <li>
              <Avatar img={repo.owner.avatar_url} alt={`Image for ${repo.owner.login}`} />
            </li>
            <li>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars </li>
          </ul>
        </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: array.isRequired
}