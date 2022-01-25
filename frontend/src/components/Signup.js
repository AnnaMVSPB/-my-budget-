import React from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import {Box,TextField,Button} from '@mui/material';

function Signup() {
  const dispatch = useDispatch();
  let history = useHistory();
  function handlerUser(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = {
      username: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    fetch('/signup', {
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
      history.push("/addCosts");
    })
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
      onSubmit={handlerUser}
    >
      <TextField id="standard-basic" label="name..." variant="standard"  name="name"/>
      <TextField id="standard-basic" label="email..." variant="standard"  name="email"/>
      <TextField id="standard-basic" label="password..." variant="standard"  name="password"/>
      <Button type="submit" variant="contained">Contained</Button>
    </Box>
  );
}

export default Signup;
