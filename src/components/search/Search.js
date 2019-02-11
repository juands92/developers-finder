import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUserName, getProfile } from "../../actions/profileActions";
import isEmpty from "../../utils/is-empty";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(nextProps.errors)) {
      this.props.history.push("/profile");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userName = this.state.username;
    this.props.getProfile(userName);
    this.props.updateUserName(userName);
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="landing mt-5">
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-4 mb-4">Developer's Finder</h1>
                <p className="lead">
                  Search developer's profile and repositories by user name
                </p>
                <hr />
                <form onSubmit={this.onSubmit} className="form-inline d-block">
                  <input
                    name="username"
                    className={classnames("form-control mr-sm-2", {
                      "is-invalid": errors.message
                    })}
                    type="search"
                    placeholder="@username"
                    aria-label="Search"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <button
                    className={classnames("btn btn-outline-info my-2 my-sm-0", {
                      "btn-outline-danger": errors.message
                    })}
                    type="submit"
                  >
                    <i className="fas fa-search" aria-hidden="true" />
                  </button>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.PropTypes = {
  updateUserName: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateUserName, getProfile }
)(Search);
