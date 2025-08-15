import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
// import axios from 'axios'
import { loginUser } from "../../api/apindex";

export const Login = () => {
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const [isSubmitting, setIsSubmitting] = useState(false);
    //Password Setter for Login
    const PasswordSetter = (e) =>{
        const password = e.target.id;
        if(password === "Pass"){
            setuserName('emilys');
            setPassword('emilyspass');
        }
        else{
            setuserName("");
            setPassword("");
        }
    }
    const handleLogic = async() => {
        if (!username && !password) return
        if (isSubmitting) return
        setIsSubmitting(true);
        const credentials = {username : username, password : password}
        try {
            const response = await loginUser(username, password);
            // console.log(response.data.accessToken);
            const data = response.data;
            if(data.accessToken){
                // sessionStorage.setItem("token", data.token);
                localStorage.setItem("token", data.accessToken);
                navigate(from, { replace: true });

            }
            else{
                alert("Login Failed, Please check your credentials");
            }
        } catch (error) {
            console.error('Login Error : ',error);
            alert("something went wrong while logging in");
        } finally {
            setIsSubmitting(false);
        }
    }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100">
        <div className="d-flex flex-column gap-4 p-4 border rounded-2">
            <div className="d-flex flex-column gap-2">
                <h3>LogIn</h3>
            </div>
            <div className="d-flex flex-column gap-2">
                <label htmlFor="userId">UserId:</label>
                <input type="text" placeholder="Email or Mobile Number" id="userId" onChange={(e)=>setuserName(e.target.value)}/>
            </div>
            <div className="d-flex flex-column gap-2">
                <label htmlFor="Password">Password:</label>
                <input type="password" placeholder="Password" id="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="d-flex gap-2">
                <input type="radio" name="Pswd" id="Pass" onChange={PasswordSetter}/>
                <label htmlFor="Pass">Pass</label>
                <input type="radio" name="Pswd" id="NotPass" onChange={PasswordSetter}/>
                <label htmlFor="NotPass">Not</label>
            </div>
            <div className="justify-content-end">
                <button type="button" className="border rounded-2 p-1 px-2" onClick={handleLogic}>LogIn</button>
            </div>
        </div>
    </div>
  )
}