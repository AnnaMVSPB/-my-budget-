import React from 'react';
import { useHistory } from "react-router-dom";
import {Box,TextField,Button} from '@mui/material';


function Income() {
  let history = useHistory();
  function addIncome(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = {
      sum: data.get('sum'),
      comments : data.get('comments')
    };
    fetch('http://localhost:4000/income', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res=>res.json())
    // history.push("/")
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
onSubmit={addIncome}
>
<TextField id="standard-basic" label="сумма доходов..." variant="standard"  name="sum"/>
<TextField id="standard-basic" label="коментарии ..." variant="standard"  name="comments"/>
<Button type="submit" variant="contained">&nbsp; сохранить &nbsp;</Button>
</Box>
  );
}

export default Income;
