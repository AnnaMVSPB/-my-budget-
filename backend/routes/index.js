const router = require('express').Router();
const registerRouter=require('./registerRouter')
const loginRouter = require('./loginRouter')
const logoutRouter = require('./logoutRouter')
const listOfCategories = require('./listOfCategoriesRouter')
const expensesRouter = require('./expensesRouter')
const incomeRouter = require('./incomeRouter')
const sessions = require('./sessionRouter')
const expenseStatisticsRouter = require('./ExpenseStatisticsRouter')

router.use('/sessionRouter',sessions)
router.use('/signup', registerRouter);
router.use('/login',loginRouter);
router.use('/logout',logoutRouter);
router.use('/listOfCategories',listOfCategories)
router.use('/Expenses',expensesRouter)
router.use('/income',incomeRouter)
router.use('/ExpenseStatistics',expenseStatisticsRouter)

module.exports = router;
