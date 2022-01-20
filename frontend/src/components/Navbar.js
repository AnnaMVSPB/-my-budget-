import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumbs, } from '@mui/material';


function Navbar() {
  const user = useSelector((state) => state.user);
  
  return (
    <>
      <div role='presentation'>
        <Breadcrumbs aria-label="breadcrumb" >
          {user ?
            <div className='nav'>
              <Link underline="hover" color="inherit" to="/addCosts">
                <h2>Добавить расходы</h2>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                to="/ExpenseStatistics"
              >
                <h2>Статистика расходов</h2>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                to="/income"
              >
                <h2>Добавить доход</h2>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                to="/logout"
              >
                <h2>Выйти</h2>
              </Link></div>
            :
            <div className='nav'>
              <Link underline="hover" color="inherit" to="/signup">
                <h2>Зарегистрироваться</h2>
              </Link>
              <Link
                underline="hover"
                color="inherit"
                to="/login"
              ><h2>Войти</h2>
              </Link>
            </div>
          }
        </Breadcrumbs>
      </div>
    </>
  )
}

export default Navbar;
