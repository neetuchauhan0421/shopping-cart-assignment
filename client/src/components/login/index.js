import React from 'react';

import { Link } from 'react-router-dom'; 
import TextField from '@material-ui/core/TextField';
import './index.scss';
function Login() { 
 
    
   
        return (
            <div className={"loginContainer"}>
                <div>
                    <span className="login">
                        Login
                   </span>
                    <span className="login2">
                        Get access to  your Orders,Wishlist and Recommendations
                   </span>
                </div>
                <div>
                   <form className={"form"}>
                        <TextField required id="standard-basic" label="Email" />
                        <TextField required id="standard-basic" label="Password" />
                        <button class="btn" type="submit">Login</button>
                   </form>



                   


                </div>
            </div>

        )
    
}
export default Login;