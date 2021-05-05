import React from 'react';
import "./Attendance.css"

const Attendance = () => {
        return(
            <div className="gridbox">
                <div className="grid-item form-box">
                    Attendance 
                    <form className="input">
                        <div className="text"><input type='username' name='username' placeholder="username" required /></div>
                        <div className="text"><input type='passcode' name='passcode' placeholder="passcode" required /></div>
                        <button className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
export default Attendance;