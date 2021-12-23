import React, {useContext} from "react";
import githubContext from "../Context/githubContext";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

export default function Users() {
const context = useContext(githubContext);
    if(context.loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={userStyle}>
                  <>
                   {context.users && context.users.map((user) => {
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
