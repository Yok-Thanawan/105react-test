import "./Profile.css";

const Profile = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img />
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
              Full Name
            </div>
            <div className="text_profile">
              Birth Date
            </div>
            <div className="text_profile">
              Tel
            </div>
            <div className="text_profile">
              E-mail
            </div>
            <div className="text_profile">
              Address
            </div>  
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
                <h1>State Reports</h1>  
            </div>
            <div className="text_profile">
              Role
            </div>
            <div className="text_profile">
              Employ Date
            </div>
            <div className="text_profile">
              Salary
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