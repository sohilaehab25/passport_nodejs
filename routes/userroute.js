const express = require('express');
const passport = require('passport');
const router = express.Router();

const errors=[];

//url for routes 
//login page
router.get('/login', (req, res)=> res.render('login'));

//register page
router.get('/register', (req, res)=> res.render('register'));


//register handling
router.post('/register', (req, res)=>{
    console.log(req.body)
    res.send("send")
});


//check required fields
// if(!name || !email || !password || !password2 || date){
//     errors.push({msg:"please fill all fields"})
// }



module.exports = router;
