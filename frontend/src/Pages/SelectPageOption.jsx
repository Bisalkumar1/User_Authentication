import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const SelectPageOption = () => {
 
    const navigate=useNavigate();

    const logoutHandler=()=>{
        localStorage.removeItem("token");
        toast.success("Log Out Successfully");
        navigate('/login');
    }

    const PageHandle=()=>{
        navigate('/changePassword');
    }
 
    return (
<>
<div className="login-page">
<h3>LogOut Or Change Password</h3>
<div className="btn2">
        <button type="button" class="btn btn-outline-danger loginbtn" onClick={logoutHandler} style={{width:'12rem'}}>Logout</button>
        <br />
        <button type="button" class="btn btn-outline-primary loginbtn" onClick={PageHandle} style={{width:'12rem'}}>Reset Password</button>
      </div>
      </div>
</>
  )
}

export default SelectPageOption