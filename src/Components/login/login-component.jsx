/*jshint esversion:9*/

import React from 'react';
import {Paper,Typography,TextField,Button,Link,IconButton} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import google from '../../Assets/google-logo.png';
import facebook from '../../Assets/facebook.png';
import './login-style.scss';

function Login({handleChange,details}){
  return(
    <div className='background'>
      <Paper className='login-container'>
        <Typography variant='h4' className='login-title'>Login</Typography>
        <div style={{width:'100%'}}>
        <label className='label-text-field' for='username'>Username :</label>
        <input id='username' name='username' value={details.username} onChange={e => handleChange(e)} type='text' className='login-text-field' />
        </div>
        <div style={{width:'100%'}}>
        <label className='label-text-field' for='password'>Password  :</label>
        <input id='password' name='password' value={details.password} style={{marginLeft:'25px'}} onChange={e => handleChange(e)} type='password' className='login-text-field' />
        </div>
        <Button variant='contained' color='primary'>Login</Button>
        <br/>
        <br/>
        <Typography variant='h6'>Or</Typography>
        <Typography variant='subtitle2'>Login using   <IconButton style={{marginLeft:'10px'}}><img src={facebook}/></IconButton> <IconButton color='primary'> <img src={google}/></IconButton></Typography>
        <br/>
        <Typography variant='subtitle2'>Don't have an account? <Link style={{cursor:'pointer'}} color='primary'>Register</Link></Typography>
        <br/>
        <br/>
      </Paper>
    </div>
  )
}

export default Login;

        // <TextField id='username' variant='outlined' placeholder='Username' className='login-text-field' color='primary'/>
