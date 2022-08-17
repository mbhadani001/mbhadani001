let mongoose = require('mongoose');


let Survey = mongoose.Schema({
    survey_topic: String,
    description: String,
    question1: String,
    answer1: String,
    question2: String,
    answer2: String,
    question3: String,
    answer3: String 
   
    
    
},
{
    collection: "surveys"
});





module.exports = mongoose.model('Survey', Survey); 

