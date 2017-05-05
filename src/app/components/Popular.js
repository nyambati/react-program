import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';
import SelectLanguage from './SelecteLanguage'
import RepoGrid from './RepoGrid';
import Loading from './Loading';

export default class Popular extends Component {

  state = {
    selectedLanguage: 'All',
    repos: null,
    languages: ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
  }

  updateLanguage = (lang) => {
    this.setState({ selectedLanguage: lang, repos: null })
    return fetchPopularRepos(lang)
      .then(repos => this.setState({ repos }))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  render() {
    let { selectedLanguage, repos, languages } = this.state;

    return (
      <div>
        <SelectLanguage
          languages={languages}
          selectedLanguage={selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <Loading /> : <RepoGrid repos={repos} />}
      </div>
    );
  }
}