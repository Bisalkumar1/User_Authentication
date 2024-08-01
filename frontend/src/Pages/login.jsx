import React, { useState } from "react";
import loginService from "../services/login.service";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginPage = () => {

  
const navigate=useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false); 
  const [eyeOpen,setEyeOpen]=useState(false);

  const EyeHandle=()=>{
  setEyeOpen(!eyeOpen);
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const loginUserHandler = async () => {
    setLoading(true);
    const response = await loginService(email, password);
    setLoading(false);
    if (response?.status) {
      const res = await response.json();
      toast.error(res.message);
    } else {
      localStorage.setItem("token", response.data.AccessToken);
      toast.success(response.message);
      navigate("/option");
    }
  };



  return loading ? (
  <Loading/>
  ) : (
   
    <div className="login-page">

      <h2>Login Page</h2>
      <div>
        <label htmlFor="">Enter Your Email</label>
        <input
          type="email"
          required
          placeholder="Enter Your Existing Email"
          onChange={inputEmail}
          value={email}
        />
      </div>

      <div className="password-container">
        <label htmlFor="Password">Password</label>
        <input
          type={eyeOpen? 'text' : 'password'}
          placeholder="Enter Your Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
           <span className="eye-icon" onClick={EyeHandle}>{eyeOpen? <VisibilityIcon/>:<VisibilityOffIcon/>} </span>
      </div>
      <div className="btn2">
        <button type="button" class="btn btn-outline-success loginbtn" onClick={loginUserHandler} style={{width:'12rem'}}>Login</button>
        <br />
      <div><span style={{fontSize:'12px',fontWeight:'700'}}>Don't Have An Account ? </span><NavLink to={'/register'} style={{fontWeight:'700'}}>Register</NavLink></div>
      </div>
      
      </div>
 
  );
};

export default LoginPage;
