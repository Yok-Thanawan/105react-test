import React, {useState} from 'react';
import axios from "../axios/axios"
import FormData from "form-data"
import "./Attendance.css"

const Attendance = () => {
    const [username, setUsername] = useState("");
    const [passcode, setPasscode] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("username",username);
        formData.append("passcode",passcode);
        axios
        .post("/AttendanceServlet", formData)
        .then((res) => {
            window.location.href="/Home"
        })
        .catch((error)=> alert("fail"))
    }

        return(
            <div className="gridbox">
                <div className="grid-item form-box">
                    Attendance 
                    <form className="input">
                        <div className="text">
                            <input 
                            label ="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} required /></div>
                        <div className="text">
                            <input   
                            lable ="passcode"
                            placeholder="passcode"
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)} required /></div>
                        <button className="submit-btn" onClick={handleFormSubmit} >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
export default Attendance;