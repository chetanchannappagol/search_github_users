import React, { useState,useEffect } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

export default function Users(props) {

    if(props.loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={userStyle}>
                  <>
                   {props.users && props.users && props.users.map((user) => {
                    return <UserItem user={user} />;
                  })}
                  </>
            </div>
          );
    }
  
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
