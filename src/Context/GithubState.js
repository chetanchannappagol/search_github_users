import React,{useReducer} from "react";
import githubContext from "./githubContext";
import {GithubReducer} from './GithubReducer'
import axios from "axios";
import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    SET_ALERT,
    REMOVE_ALERT,
    SET_LOADING,
    CLEAR_USERS
 } from './type'

 const GithubState = props =>{
     const initialState = {
         users:[],
         user:{},
         repos:[],
         loading:false,
         alert:null
     }
const [state, dispatch] = useReducer(GithubReducer, initialState)

//search user
const SearchUser = async (params) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${params}`
    );
    // setUsers(res.data.items)
    dispatch({type:SEARCH_USERS,payload:res.data.items})
  };

//get user
const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const repores = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    dispatch({type:GET_USER,payload:res.data})
    dispatch({type:GET_REPOS,payload:repores.data})
  };

//set alert
const setAlert = (msg,type) => dispatch({type:SET_ALERT,payload:{msg,type}})

//remove alert
const removeAlert = () => dispatch({type:REMOVE_ALERT})

//set loading

const setLoading = () => dispatch({type:SET_LOADING})

//clear users  
const clearUser  = ()=> dispatch({type:CLEAR_USERS})
return <githubContext.Provider
value={
{
    users:state.users,
    user:state.user,
    loading:state.loading,
    alert:state.alert,
    repos:state.repos,
    SearchUser,
    setAlert,
    getUser,
    removeAlert,
    clearUser 
}
}
>
    {props.children}
</githubContext.Provider>
 }

 export default GithubState;