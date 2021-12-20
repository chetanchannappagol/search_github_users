import React,{useState} from "react";

export default function Search(props) {
    const [SearchValue, setSearchValue] = useState('');
    function onChangeHandler(val){
        setSearchValue(val.target.value)
    }
    function onSubmitHandler(e){
        e.preventDefault();
        if(SearchValue.length > 0){
          props.SearchUser(SearchValue)
          setSearchValue('')
          props.setAlert('please enter somthing','light')
        }
        else{
          props.setAlert('please enter somthing','light')
        }
    }
    console.log(SearchValue)
    
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
        props.showClear &&  <button className="btn btn-light btn-block" type='button' onClick={()=>props.onClear()}>Clear</button>
          }
    </div>
  );
}
