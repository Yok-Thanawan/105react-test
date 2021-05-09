import React, { useState } from  'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "../axios/axios"
import FormData from "form-data"

const Login=()=>{

    const paperStyle={padding :20,height:'auto',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#a5aaad'}
    const btnstyle={margin:'8px 0'}

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append("username",username);
        formData.append("password",password);
        axios.post("/SignIn", formData).then((res) => {
            window.location.href="/Home"
        }).catch((error)=> alert("fail"))
    }

    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField label='Username' 
                    placeholder='Enter username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} fullWidth required/>
                <TextField label='Password' 
                    placeholder='Enter password' 
                    type='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} fullWidth required/><br/><br/>
                <Button 
                    onClick={handleFormSubmit} 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} fullWidth>
                        Sign in
                    </Button>
                
            </Paper>
        </Grid>
    )
}

export default Login