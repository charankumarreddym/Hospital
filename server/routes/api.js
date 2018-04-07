const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = require('../models/users');

const db = 'mongodb://ram:ram123@ds163418.mlab.com:63418/appointment';
mongoose.Promise = global.Promise;
mongoose.connect(db, (err) =>{
    if(err){
        console.log('error! '+ error);
        
    }
});
router.get('/users', (req,res) => {
    console.log(res);
    users.find({}).
    exec((err, users)=>{
        if(err){
            console.log("error");
            
        }else {
            res.json(users);
        }
    })
});
router.get('/user/:id', (req,res) => {
    console.log(res);
    users.findById(req.params.id).
    exec((err, users)=>{
        if(err){
            console.log("error");
            
        }else {
            res.json(users);
        }
    })
});

router.delete('/user/:id', (req,res) => {
    console.log(res);
    users.findByIdAndRemove(req.params.id, (err, deletuser) => {
        if(err){
            console.log("error");
            
        }else {
            res.json(deletuser);
        }
    });
});

router.put('/user/:id', (req,res) => {
    console.log(res);
    users.findByIdAndUpdate(req.params.id,
        {
        $set: {
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role,
            npi:req.body.npi,
            location:req.body.location,
            add1:req.body.add1,
            add2:req.body.add2,
            city:req.body.city,
            pincode:req.body.pincode,
            state:req.body.state,
            country:req.body.country
        }
    },
    {
        new:true
    },
    (err, updateusers) => {
        if(err) {
            console.log(err);
        }else {
            res.json(updateusers);
        }
    }
);

});
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new users(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    })
  })
  
  router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
  })

router.post('/users', (req,res) => {
    console.log(res);
    let newusers = new users();
    newusers.firstname= req.body.firstname,
    newusers.lastname=req.body.lastname,
    newusers.email=req.body.email,
    newusers.password=req.body.password,
    newusers.role=req.body.role,
    newusers.npi=req.body.npi,
    newusers.location=req.body.location,
    newusers.add1=req.body.add1,
    newusers.add2=req.body.add2,
    newusers.city=req.body.city,
    newusers.pincode=req.body.pincode,
    newusers.state=req.body.state,
    country=req.body.country
    newusers.save((err, nsertusers) =>{
        if(err){
            console.log(err);
        }else {
            res.json(nsertusers);
        }
    })
});

module.exports = router;