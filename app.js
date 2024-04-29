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
.connect("mongodb://localhost:27017/passport")
.then(() => {
  console.log("DB Connected....");
  app.listen(PORT, () => {
    console.log("I am listening..........", PORT);
  });
})
.catch((error) => {
  console.log("DB Problem ..." + error);
});


/***********************stracture */

//body barser
app.use(express.json());


//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');


//routers 
app.use('/', index);

//login and register meddileware
app.use('/users', user);

//not found mw
app.use((req, res)=>{
  res.status(404).json({data:"not found"})
})

//error mw take four parameters
app.use((error,req,res,next)=>{
  res.status(500).json({data:`from error mw ${error}`})

})

