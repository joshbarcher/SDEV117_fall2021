var colorValue = 0;

//on load register a timer to change the color every 50 millis
window.onload = function() {
    window.setInterval(function() {
        var page = document.querySelector("html");

        //get the RGB values based on colorValue
        var color1 = "rgb(0, " + (255 - colorValue) + ", " + colorValue + ")";
        var color2 = "rgb(" + (255 - colorValue) + ", 0, 0)";
        var color3 = "rgb(" + colorValue + ", " + colorValue + ", " + colorValue + ")";

        //update the background gradient
        page.style.backgroundImage = "linear-gradient(" + color1 + ", " +
            color2 + ", " + color3 + ")";

        //increment and cycle if necessary
        colorValue++;
        if (colorValue > 255) {
            colorValue = 0;
        }

    }, 50);
};