import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Modal, Button, TextField } from '@mui/material';

function Cards({ name }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function modalInput(e) {
    e.preventDefault()
    const body = {
      sum: e.target.input.value,
      name: name.nameCategory
    }
    handleClose()
    fetch('http://localhost:4000/Expenses', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then((data) => data)

  }

  return (
    <>
      <Card sx={{ minWidth: 275 }} className='card'>
        <CardContent>
          <Typography variant="h7" component="div" onClick={handleOpen}>
            {name.nameCategory}
          </Typography>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className='mod'>
          <Typography id="modal-modal-title" variant="h5" component="h2"className="modal-title">
            {name.nameCategory} </Typography>
          <Box component="form" onSubmit={modalInput}>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              name='input'
              className="input"
            />
            <Button type="submit" >&nbsp; сохранить &nbsp;</Button>
          </Box>


        </Box>
      </Modal>
    </>
  );
}

export default Cards;
