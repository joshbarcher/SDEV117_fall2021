window.onload = function() {
    //set a timer for every 100 milliseconds
    window.setInterval(function() {
        //select our element and get the current date
        let span = document.querySelector("span.time");
        let now = new Date();

        //get the time
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        //update the page
        span.innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 100);
};

