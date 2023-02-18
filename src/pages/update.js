import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../todoContext";

const Update = () => {
  const {state} = useNavigate();
  const {dispatch} = useContext(MyContext);
  const [ip, setIp] = useState(state.todo);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch({type:'update', data:{...state, todo:ip}})
    navigate('/')
  };

  return (
    <div className="todo">
      <h2>update</h2>
      <div>
        <form onSubmit={submit}>
          <input type="text" value={ip} name="write" onChange={(e)=>setIp(e.target.value)}/>
          <input type="submit" value="등록" onChange={(e)=>setIp(e.target.value)}/>
        </form>
      </div>
    </div>
  );
};

export default Update