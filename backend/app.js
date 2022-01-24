const express = require('express')
const path = require('path')
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const FileStore = require("session-file-store")(session);
const registerRouter=require('./routes/registerRouter')
const loginRouter = require('./routes/loginRouter')
const logoutRouter = require('./routes/logoutRouter')
const listOfCategories = require('./routes/listOfCategoriesRouter')
const expensesRouter = require('./routes/expensesRouter')
const incomeRouter = require('./routes/incomeRouter')
const sessions = require('./routes/sessionRouter')
const expenseStatisticsRouter = require('./routes/ExpenseStatisticsRouter')
const PORT = 4000

const app = express()
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src', 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());
app.use(session({
  store: new FileStore(),
  key: "user_sid",
  secret: "ne skazu",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 9000000,
    httpOnly: true,
  },
  store: new FileStore(),
}))

app.use('/sessionRouter',sessions)
app.use('/signup', registerRouter);
app.use('/login',loginRouter);
app.use('/logout',logoutRouter);
app.use('/listOfCategories',listOfCategories)
app.use('/Expenses',expensesRouter)
app.use('/income',incomeRouter)
app.use('/ExpenseStatistics',expenseStatisticsRouter)
app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`)
})
