const express = require('express')
const path = require('path')
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const FileStore = require("session-file-store")(session);
const indexRouter = require('./routes/index');

const PORT = process.env.PORT || 4000

const app = express()
app.use(cors({
  origin: 'https://my-budget-calculation.herokuapp.com',
  credentials: true,
}));


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.resolve('../frontend/build')));
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


app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../frontend/build/index.html'));
})
app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}`)
})
