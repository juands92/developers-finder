const axios = require("axios");

const functions = {
  fetchUserName: username =>
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => res.data)
      .catch(err => err.response),

  fetchOrgs: username =>
    axios
      .get(`https://api.github.com/users/${username}/orgs`)
      .then(res => res.data)
      .catch(err => err.response),

  fetchRepos: username =>
    axios
      .get(`https://api.github.com/users/${username}/repos?per_page=250`)
      .then(res => res.data)
      .catch(err => err.response)
};

module.exports = functions;
