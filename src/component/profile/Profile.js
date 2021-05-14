import axios from 'axios';
import React , { useState, useEffect } from 'react'
import "./Profile.css";

const Profile = () =>  {

  const [profile, setprofile] = useState("")
   
  useEffect(() => {
		fetchProfile()
	})
  
  const fetchProfile = () => {
    axios
    .get('http://localhost:8080/fortest_war_exploded/ProfileServlet')
    .then((res) =>{
      setprofile(res.data)
    })
    .catch((error)=>{
      alert("fail")
    })
  }
  

  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          
          <div className="main__greeting">
            <h1>Hello!</h1>
            <p>Welcome to your profile dashboard</p>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
                <h1>Profile</h1>  
            </div>
            <div className="text_profile">
              Full Name <div className="info"> <input value={profile.fullname} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              Birth Date <div className="info"> <input value={profile.birthdate} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              Tel <div className="info"> <input value={profile.tel} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              E-mail <div className="info"> <input value={profile.email} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              Address <div className="info"> <input value={profile.address} disabled="disabled"/></div>
            </div>
              
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
                <h1>State Reports</h1>  
            </div>
            <div className="text_profile">
              Role <div className="info"> <input value={profile.role} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              Employ Date <div className="info"> <input value={profile.empdate} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              Salary <div className="info"> <input value={profile.salary} disabled="disabled"/></div>
            </div>
            
            <div className="text_profile">
              Project 
            </div> 
          </div>
        </div>
        
      </div>
    </main>
  );
};


export default Profile;