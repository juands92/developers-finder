import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "./Header";
import Github from "./Github";
import Spinner from "../../utils/Spinner";
import isEmpty from "../../utils/is-empty";

import { getRepositories } from "../../actions/profileActions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }
  componentDidMount() {
    const { userName } = this.props.profile;
    this.props.getRepositories(userName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { profile, repos, loading, userName } = this.props.profile;
    const { errors } = this.state;
    let profileContent;

    if (loading) {
      profileContent = <Spinner />;
    } else {
      userName !== ""
        ? (profileContent = (
            <div>
              <Header profile={profile} />
              <Github repos={repos} />
            </div>
          )) //Profile is undefined. Back to search page
        : this.props.history.push("/");
    }
    if (!isEmpty(errors)) {
      this.props.history.push("/");
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getRepositories: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getRepositories }
)(Profile);
