/*jshint esversion:9*/

import React,{useState} from 'react';
import Login from '../../Components/login/login-component';
import './LoginPage-style.scss';

function LoginPage(){
  const [loginDetails,setLoginDetails] = useState({
    username:'',
    password:''
  });

  const handleChange = e => {
    const {name,value} = e.target;
    setLoginDetails(prevValue => {
      return{
        ...prevValue,
        [name]:value
      };
    });
  };

  return(
    <div className='login-page'>
      <Login handleChange={handleChange} details={loginDetails}/>
    </div>
  )
}

export default LoginPage;
