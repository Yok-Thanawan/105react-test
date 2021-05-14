import React, { useState } from  'react'
import axios from "../axios/axios"
import FormData from "form-data"
import "./AbsentForm.css"

const Absents = () => {
    const [date,setDate] = useState("");
    const [content,setContent] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("date",date);
        formData.append("content",content);
        axios
        .post("/AbsentServlet",formData)
        .then((res) => {
            window.location.href="/Home"
        })
        .catch((error)=> alert("fail"))
    }
    return(
        <main>
        <div className="main__container">
            <div className="main__title">
                <div className="main__greeting">
                    <h1>Apply for leave</h1>
                    <p>* is required</p>
                </div>
            </div>
            <div className="chart">
                <div className="chart__form">
                    <div className="chart__form__cards">
                        
                        <div className="card">
                            <label>Date of leave request *</label>
                            <input  
                            placeholder="YYYY-MM-DD"
                            value={date}
                            onChange={(e) => setDate(e.target.value)} required />
                        </div>
                        <div className="card">
                            <label>Content *</label>
                            <textarea className="content" 
                            value={content}
                            onChange={(e) => setContent(e.target.value)} required />
                        </div>
                        <button className="submit" onClick={handleFormSubmit} >Send</button>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
export default Absents;