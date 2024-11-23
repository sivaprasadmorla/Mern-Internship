import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = ()=>{
        if (username==="S" && password === "S"){
            navigate(`/home`)
        }
        else{
          alert("Please enter valid Credentials ")
        }
  }

  return (
    <div className="LoginContainer">
      <div className="loginForm">
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <a href="#">Forgot Password?</a>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
