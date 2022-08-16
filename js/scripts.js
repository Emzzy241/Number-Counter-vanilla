// we have already initialized the 2 buttons in our index because we used 
// same class name for both of them, now let us initialize it also
// with javascript function

// note: querySelectors can also pick classes, just be sure
// to include a . for a class and a # for an id

(function () {
    const buttons = document.querySelectorAll(".counterBtn")
    
    // making our values to be always = 0
    
    let count = 0;

    // running a forEach loop for targeting each of our buttons

    buttons.forEach( function(button){
        button.addEventListener('click', function(counting){
            // finding the button user is pressing so we can know what to do
            // What we want to do here is add a conditional, a conditional that is user
            // is pressing the lower button, it should decrease and 
            // if user is pressing the add button it should increase

            if(button.classList.contains('prevBtn')){
                count--
            }
            else if(button.classList.contains('nextBtn')){
                count++
            }

            const counter = document.querySelector("#counter");
            counter.textContent = count;

            if(count < 0){
                counter.style.color = "red";
            }
            else if(count > 0){
                counter.style.color = "green";
            }
            else{
                counter.style.color = "black";
            }

        })
    });

}) () /* this is to run this function continually, so we
use () */