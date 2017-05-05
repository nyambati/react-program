import { get, all } from 'axios';

const apiURL = 'https://api.github.com';

function getProfile(username) {
  return get(`${apiURL}/users/${username}`)
    .then(response => response.data)
    .catch(error => error.data);
}

function getRepos(username) {
  return get(`${apiURL}/users/${username}/repos?per_page=100`)
}

function getStarCount({ data }) {
  return data.reduce((count, repo) => count + repo.stargazers_count, 0)
}

function erroHandler(error) {
  return console.warn(error);
}

function getUserData(player) {
  return all([getProfile(player), getRepos(player)])
    .then(data => {
      let [profile, repos] = data;
      return {
        profile,
        score: calculateScore(profile, repos)
      }
    })
}

function calculateScore(profile, repos) {
  return (profile.followers * 3) + getStarCount(repos)
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function fetchPopularRepos(language) {
  const url = window.encodeURI(`${apiURL}/search/repositories?q=stars:>45+language:${language}&sort=stars&order=desc&type=Repositories`);
  return get(url)
    .then(response => response.data.items)
    .catch(error => error.data);
}

export function battle(players) {
  return all(players.map(getUserData))
    .then(sortPlayers)
    .catch(erroHandler);
}
