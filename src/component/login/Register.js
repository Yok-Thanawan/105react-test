import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import axios from "../axios/axios"
import FormData from "form-data"
const Signup = () => {
    const paperStyle = { padding: 20,height:'auto', width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#a5aaad' }
    
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("fullname", fullname);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("address", address);
        formData.append("birthdate", birthdate);
        formData.append("username", username);
        formData.append("password", password);
        
        axios
        .post("/RegisterServlet",formData)
        .then((res)=>{
            window.location.href="/Home"
        })
        .catch((error)=> alert("fail"))
    }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Register</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Full name' 
                        placeholder="Enter your full name" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)} required />
                    <TextField fullWidth label='Email' 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <TextField fullWidth label='Phone Number' 
                        placeholder="Enter your phone number" 
                        value={tel}
                        onChange={(e) => setTel(e.target.value)} required />
                    <TextField fullWidth label='Address' 
                        placeholder="Enter your address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} required />
                    <TextField fullWidth label='Birthdate' 
                        placeholder="Enter your birthdate (YYYY-MM-DD)" 
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)} required />
                    <TextField fullWidth label='Username' 
                        placeholder="Enter your username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                    <TextField fullWidth label='Password' 
                        placeholder="Enter your password"
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
                    <Button type='submit' 
                        onClick={handleFormSubmit} 
                        variant='contained' 
                        color='primary' fullWidth >
                            Register
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;