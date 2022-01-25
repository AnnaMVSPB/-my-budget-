import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Autocomplete,Button } from '@mui/material';
import Mod from '../Mod/Mod'
import TableStatistics from './TableStatistics';


function ExpenseStatistics() {
  const dispatch = useDispatch();
  function formSelected(e) {
    e.preventDefault();
    let monthYear = []
   let month=Mod[0].indexOf(e.target.month.value) + 1 
    if(month < 10 ){ 
      month=`0${month.toString()}` 
    }
    monthYear.push(`${e.target.year.value}-${month}`)
    fetch('/ExpenseStatistics', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'EXPENDITURE_STATISTICS', payload: { data, monthYear } });
      })
  }
  return (
    <>
<Box component="form"  onSubmit={formSelected} className='flex' sx={{
   '& > :not(style)': { m: 1, width: '25ch' },
 }}>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        name='month'
        options={Mod[0]}
        autoHighlight
        getOptionLabel={(option) => option}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} >{option}</Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Выбирите месяц" name='month'
            inputProps={{
               ...params.inputProps,
            }}
          />
        )}
      />
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={Mod[1]}
        autoHighlight
        getOptionLabel={(option) => option}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} >{option}</Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Выбирите год" name='year'
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
      <Button type="submit" variant="contained">&nbsp; посмотреть &nbsp;</Button>
      </Box>
      <TableStatistics/>

    </>
  );
}

export default ExpenseStatistics;
