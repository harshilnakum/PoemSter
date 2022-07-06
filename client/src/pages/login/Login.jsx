import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }

  }
  
  

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="lInput1">Username</label>
        <input
        id = "lInput1"
        required
          type="text"
          className="loginInput"
          placeholder="Enter your username... "
          ref = {userRef}
        />
        <label htmlFor="lInput2">Password</label>
        <input
        required
        id = "lInput2"
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref = {passwordRef}
        />

        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
      </form>
    </div>
  );
}
