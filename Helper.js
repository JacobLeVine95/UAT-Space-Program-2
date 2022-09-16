function myAlert(){
    //alert("this code is located in a seperate js file.")

    //for loop will run 5 times
    //for(i =0; i <3; i++){
        // //alert will show the counter value
        // alert("i=" + i);

        //}
}

//This function created a countdown.
function countdownCode(pageElement){
    var countdown = 10;

    pageElement.innerHTML = countdown;
    countdown = countdown -1;
//This shows 'Blastoff!' at the end of the count down.
     setTimeout(function(){
        pageElement.innerHTML = "Blastoff!";
        countdown = countdown -1;
    }, 9000);

    setTimeout (function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 8000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 7000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 6000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 5000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 4000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 3000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 2000);

    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 1000);
//This decreases the countdown by 1.
    setTimeout(function(){
        pageElement.innerHTML = countdown;
        countdown = countdown -1;
    }, 0000);

}