import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../../utils/Spinner';

import { getOrganizations } from '../../actions/profileActions';

class Organizations extends Component {

    componentDidMount() {
        const { userName } = this.props.profile;
        this.props.getOrganizations(userName);
    }

    render() {
        const { userName, orgs, loading } = this.props.profile;
        console.log(orgs);
        let listOfOrgs;
        if (loading) {
            listOfOrgs = <Spinner />
        } else {
            listOfOrgs = orgs.map(org => (
                <div className="col-sm-6 mb-2" key={org.id}>
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <img
                                    width="200"
                                    height="200"
                                    src={org.avatar_url}
                                    alt="" />
                            </div>
                            <h5 className="card-title text-info text-center">
                                {org.login}
                            </h5>
                            <p className="text-center card-text">{org.description}</p>
                        </div>
                    </div>
                </div>
            ))
        }

        return (

            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mb-4 mt-4">{userName} 's Organizations</h2>
                            <Link to="/profile" className="navbar-brand" style={{ color: '#17a2b8' }}>
                                <i class="far fa-hand-point-left fa-2x"></i>
                            </Link>
                            <div className="row">
                                {listOfOrgs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

Organizations.propTypes = {
    getOrganizations: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getOrganizations })(Organizations);