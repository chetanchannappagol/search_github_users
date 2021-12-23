import React from "react";
import {Link} from 'react-router-dom'

export default function UserItem(props) {
  return (
    <div className="card text-center">
      <img src={props.user.avatar_url} 
      className="round-img"
      style={{width:'60px'}}
      alt=""
      />
      <h3>
          {
              props.user.login
          }
      </h3>
      <div>
          <Link to={`user/${props.user.login}`} className="btn btn-dark btn-sm">
              more
          </Link>
      </div>
    </div>
  );
}
