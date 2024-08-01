import React, { useState } from "react";
import { toast } from "sonner";
import changePasswordService from "../services/changePassword.service";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false); 

  const [eyeOpen,setEyeOpen]=useState(false);
  const [eyeOpen1,setEyeOpen1]=useState(false);

  const EyeHandle=()=>{
  setEyeOpen(!eyeOpen);
  };
  const EyeHandle1=()=>{
    setEyeOpen1(!eyeOpen1);
    };

  const navigate=useNavigate();

  const changePasswordHandler = async () => {
    setLoading(true);
    const response = await changePasswordService(oldPassword, newPassword);
    setLoading(false);
    if (response?.status) {
      const res = await response.json();
         toast.error(res.message);
    } else {
      toast.success(response.message);
      navigate("/login");
    }
  };

  return loading ? (
    <Loading/>
  ) : (
    <div className="login-page">
      <h2>Reset Password</h2>
      <div className="password-container">
        <label htmlFor="Enter Your Old Password">Enter Your Old Password</label>
        <input
          type={eyeOpen? 'text' : 'password'}
          required
          placeholder="Enter Your Old Password"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
          value={oldPassword}
        />
        <span className="eye-icon" onClick={EyeHandle}>{eyeOpen? <VisibilityIcon/>:<VisibilityOffIcon/>} </span>
      </div>

      <div>
        <label htmlFor="New PassWord">New Password</label>
        <input
          type={eyeOpen1? 'text' : 'password'}
          placeholder="Enter Your New Password"
          required
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
        />
        <span className="eye-icon1" onClick={EyeHandle1}>{eyeOpen1? <VisibilityIcon/>:<VisibilityOffIcon/>} </span>
      </div>
      <div>
        <button type="button" class="btn btn-outline-success loginbtn" onClick={changePasswordHandler}>Change Password</button>   
      </div>
    </div>
  );
};

export default ChangePasswordPage;
