import React,{useState,useContext} from "react";
import githubContext from "../Context/githubContext";

export default function Search() {
  const context = useContext(githubContext)
    const [SearchValue, setSearchValue] = useState('');
    function onChangeHandler(val){
        setSearchValue(val.target.value)
    }
    function onSubmitHandler(e){
        e.preventDefault();
        if(SearchValue.length > 0){
          context.SearchUser(SearchValue)
          setSearchValue('')
        }
        else{
          context.setAlert('please enter somthing','light')
        }
    }
    
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input value={SearchValue} onChange={(e)=>onChangeHandler(e)} name="text" type="text" placeholder="Search users...." />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {
        context.users.length > 0 &&  <button className="btn btn-light btn-block" type='button' onClick={()=>context.clearUser()}>Clear</button>
          }
    </div>
  );
}
