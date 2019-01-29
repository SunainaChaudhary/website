const express= require('express')
const router= express.Router();
const passport= require('passport');

const csrf= require('csurf');
 const csrfProtection= csrf();
router.use(csrfProtection)

 router.get('/', (req, res)=>
 {
     res.send("its working")
 })

router.get('/signup' , function(req, res, next){
    var messages= req.flash('error');
    res.render('D:/mongo_start/shopping_cart/views/signup' , {csrfToken: req.csrfToken(), messages: messages , hasErrors : messages.length>0 });
})

router.post('/signup', passport.authenticate('local.signup', {
   successRedirect :'/',
   failureRedirect: '/signup',
    failureFlash: true
}));


module.exports= router;