let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let passport = require('passport');
let surveyController = require('../controllers/survey');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


router.get('/', surveyController.displaySurveyList);

/*Get route for displaying add page - Create Operation*/
// router.get('/create', surveyController.displayCreatePage);

/*Get route for processing add page - Create Operation*/
router.post('/create',passport.authenticate('jwt',{session:false}), surveyController.processCreatePage);

/*Get route for displaying Edit page - UpdateOperation*/
// router.get('/edit/:id', surveyController.displayEditPage);

/*Get route for processing Edit page - Update Operation*/
router.post('/edit/:id',passport.authenticate('jwt',{session:false}),  surveyController.processEditPage);

/*Get route for processing Edit page - Update Operation*/
router.get('/delete/:id',passport.authenticate('jwt',{session:false}), surveyController.performDelete);



module.exports= router;