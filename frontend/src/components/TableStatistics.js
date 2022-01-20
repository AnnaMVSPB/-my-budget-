/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';

function createData(name, sum) {
  return { name, sum};
}

function TableStatistics() {
  const { statistics, totalExecution, totalIncom } = useSelector((state) => state)
  let rows = []
    statistics.length >0 && statistics.map((el)=>{rows.push(createData(el.nameCategory,el.sum))})
  return (
    <>
    <div className="table">
      {statistics.length > 0 && 
         <TableContainer component={Paper}className='statistics' >
         <Table sx={{ minWidth: 200}} aria-label="simple table" >
           <TableHead>
             <TableRow >
               <TableCell>Статья расходов</TableCell>
               <TableCell align="right">Сумма расходов</TableCell>
             </TableRow>
           </TableHead>
           <TableBody >
             {rows.map((row) => (
               <TableRow
                 key={row.name}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell component="th" scope="row">
                   {row.name}
                 </TableCell>
                 <TableCell align="right">{row.sum}</TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
      }
    </div>
     <div className="table">
     {statistics.length > 0 && 
        <TableContainer component={Paper}className='statistics' >
        <Table sx={{ minWidth: 200}} aria-label="simple table" >
          <TableBody >
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Общая сумма расходов
                </TableCell>
                <TableCell align="right">{totalExecution}</TableCell>
              </TableRow>     
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Общая сумма доходов
                </TableCell>
                <TableCell align="right">{totalIncom}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
     }
   </div>
   </>
  );
}

export default TableStatistics;
