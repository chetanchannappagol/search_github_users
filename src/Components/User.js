import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "./Spinner";

export default function User(props) {
  useEffect(() => {
    props.getUser(props.match.params.login);
  }, []);

  //   componentDidMount() {
  //     this.props.getUser(this.props.match.params.login);
  //     // this.props.getUserRepos(this.props.match.params.login);
  //   }
  //   render() {
  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = props.user;
  const { loading, repos } = props;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-dark">
          Back to search
        </Link>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h2>{name}</h2>
            <p>Location : {location}</p>
          </div>
          <div>
            {bio && (
              <React.Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </React.Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile{" "}
            </a>
            <ul>
              <li>
                {login && (
                  <React.Fragment>
                    <strong>UserName: </strong> {login}
                  </React.Fragment>
                )}
              </li>
              <li>
                {company && (
                  <React.Fragment>
                    <strong>Company: </strong> {company}
                  </React.Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <React.Fragment>
                    <strong>Website: </strong> {blog}
                  </React.Fragment>
                )}
              </li>
              <li>
                <React.Fragment>
                  <strong>hireable: </strong>{" "}
                  {hireable ? (
                    <i className="fas fa-check text-success" />
                  ) : (
                    <i className="fas fa-times-circle text-danger" />
                  )}
                </React.Fragment>
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Publick Repos: {public_repos}</div>
          <div className="badge badge-dark">Publick Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} loading={loading} />
      </React.Fragment>
    );
  }
  //   }
}
