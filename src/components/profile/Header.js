import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {

        const { profile } = this.props;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-light text-white mb-3">
                        <div className="col-12 col-md-12 text-center">
                            <img
                                width="200" height="200"
                                className="rounded-circle" src={profile.avatar_url} alt="" />
                        </div>
                        <div className="text-center text-dark">
                            <h1 className="display-4 text-center">
                                {profile.name}
                            </h1>
                            <p className="lead text-center">{profile.company}</p>
                            <p>{profile.location}</p>
                        </div>
                    </div>
                    <Link className="navbar-brand" to="/profile/orgs" style={{ color: '#17a2b8' }}>
                        Check for orgs
                    </Link>
                </div>

            </div>

        )
    }
}

export default Header;


