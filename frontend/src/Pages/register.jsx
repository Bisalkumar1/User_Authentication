import React, { useState } from "react";
import registerService from "../services/register.service";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Loading from "./Loading";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [eyeOpen,setEyeOpen]=useState(false);

  const EyeHandle=()=>{
  setEyeOpen(!eyeOpen);
  };

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputUserName = (e) => {
    setUserName(e.target.value);
  };

  const registerUserHandler = async () => {
    console.log("inside register")
    setLoading(true);
    const response = await registerService(email, fullName, password, username);
    setLoading(false);
    if (response?.status) {
      const res = await response.json();
      toast.error(res.message);
    } else {
      toast.success(response.message);
      navigate("/login");
    }
  };

  return (
    <>
    {loading? <Loading/>:(
      <div className="login-page" style={{ margin: "30px" }}>
        <h2>SignUp Page</h2>
        <div>
          <label htmlFor="">Enter Your Email</label>
          <input
            type="email"
            required
            placeholder="Enter Your Email"
            onChange={inputEmail}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="Enter Your UserName">Enter Your UserName</label>
          <input
            type="text"
            required
            placeholder="Enter Your  UserName"
            onChange={inputUserName}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="Enter Your Full Name">Enter Your Full Name</label>
          <input
            type="text"
            required
            placeholder="Enter Your Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        <div className="password-container">
          <label htmlFor="PassWord">Password</label>
          <input
            type={eyeOpen?'text':'password'}
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
           <span className="eye-icon" onClick={EyeHandle}>{eyeOpen? <VisibilityIcon/>:<VisibilityOffIcon/>} </span>
        </div>
        <div>
          <button type="button" class="btn btn-outline-info loginbtn" onClick={registerUserHandler} style={{width:'12rem'}}>Register</button>
        </div>
      </div>
    )
    }
    </>
  );
};

export default RegisterPage;
