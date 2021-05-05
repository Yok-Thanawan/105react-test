import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#a5aaad'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' name="username" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' name="password" fullWidth required/><br/><br/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography ><br/> Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)}>
                        Register 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login