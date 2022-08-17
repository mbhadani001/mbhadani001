// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let createButtons = document.querySelectorAll('.btn-primary')

        button.addEventListener('click',(event)=>{
           
            
               event.preventDefault();
               window.location.assign('/survey-list');
        
           });

    
    }

    window.addEventListener("load", Start);
})();