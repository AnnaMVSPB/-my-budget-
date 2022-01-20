import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {Box,TextField,Button} from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  function loginUser(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = {
      email: data.get('email'),
      password: data.get('password'),
    };
    fetch('http://localhost:4000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .then(data =>{
      dispatch({type:'SAVE_USER_SESSION',payload:data.user})
      ;
    })
    history.push("/addCosts")
  }
  return (
    <Box
    className='form'
 component="form"
 sx={{
   '& > :not(style)': { m: 1, width: '25ch' },
 }}
 noValidate
 autoComplete="off"
 onSubmit={loginUser}
>
 <TextField id="standard-basic" label="email..." variant="standard"  name="email"/>
 <TextField id="standard-basic" label="пароль..." variant="standard"  name="password"/>
 <Button type="submit" variant="contained">&nbsp; авторизоваться &nbsp;</Button>
</Box>
  );
}

export default Login;
