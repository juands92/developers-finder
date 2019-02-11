import React, { Component } from 'react'

class Github extends Component {

    render() {

        const { repos } = this.props;
        console.log(repos);
        const listOfRepos = repos.map(repo => (
            <div className="col-sm-6 mb-2" key={repo.id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-info">
                            {repo.name}
                        </h5>
                        <p className="card-text">{repo.description}</p>
                        <span className="badge badge-info mr-1">
                            Stars: {repo.stargazers_count}
                        </span>
                        <span className="badge badge-danger mr-1">
                            Issues: {repo.open_issues_count}
                        </span>
                    </div>
                </div>
            </div>
        ))

        return (
            <div>
                <hr />
                <h3 className="mb-4">Github Repos</h3>
                <di className="row">
                    {listOfRepos}
                </di>


            </div>
        )
    }
}

export default Github;