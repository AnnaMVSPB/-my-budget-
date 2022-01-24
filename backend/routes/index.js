const router = require('express').Router();
const registerRouter=require('./registerRouter')
const loginRouter = require('./loginRouter')
const logoutRouter = require('./logoutRouter')
const listOfCategories = require('./listOfCategoriesRouter')
const expensesRouter = require('./expensesRouter')
const incomeRouter = require('.incomeRouter')
const sessions = require('./sessionRouter')
const expenseStatisticsRouter = require('./ExpenseStatisticsRouter')

app.use('/sessionRouter',sessions)
app.use('/signup', registerRouter);
app.use('/login',loginRouter);
app.use('/logout',logoutRouter);
app.use('/listOfCategories',listOfCategories)
app.use('/Expenses',expensesRouter)
app.use('/income',incomeRouter)
app.use('/ExpenseStatistics',expenseStatisticsRouter)

module.exports = router;
