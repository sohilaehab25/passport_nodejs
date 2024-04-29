const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

//files require
const index = require('./routes/indexroute')
const user = require('./routes/userroute');



//port number
const PORT = process.env.PORT || 9000;
// app.listen(PORT, console.log(`i am listinig on port number: ${PORT}...`));


//connection with database
mongoose
.connect("mongodb://127.0.0.1:27017/passport")
.then(() => {
  console.log("DB Connected....");
  app.listen(PORT, () => {
    console.log("I am listening..........", PORT);
  });
})


//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');


//body barser
app.use(express.json());
//routers 
app.use('/', index);
app.use('/users', user);

