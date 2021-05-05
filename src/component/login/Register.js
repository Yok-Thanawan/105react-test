import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const Signup = () => {
    const paperStyle = { padding: 20,height:'73vh', width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#a5aaad' }

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
                    <TextField fullWidth label='Full name' placeholder="Enter your full name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Address' placeholder="Enter your address"/>
                    <TextField fullWidth label='Birthdate' placeholder="Enter your birthdate (DD/MM/YY)"/>
                    <TextField fullWidth label='Username' placeholder="Enter your username"/>
                    <TextField fullWidth label='Password' placeholder="Enter your password"/><br/><br/>
                    <Button type='submit' variant='contained' color='primary' fullWidth>Register</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;