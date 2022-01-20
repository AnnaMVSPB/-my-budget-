import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


function Logout() {
  const dispatch = useDispatch();
  let history = useHistory();
  fetch('http://localhost:4000/logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'SAVE_USER_SESSION', payload: data.isUserAuth});
      history.push("/");
    })
  return (<></>);
}

export default Logout;
