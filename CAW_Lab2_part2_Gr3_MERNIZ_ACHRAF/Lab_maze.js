var alerted = false; // used to remove multiple alerts
var stclick = false; // stores value to check if player clicked start or not
var stime; // stores value when S is clicked
var mousecur = false; // stores value of cursor traversing from inside or outside

// Start function invoked when S is clicked
function start() {
    mousecur = true;
    stclick = true;
    stime = Date.now();
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#eeeeee";
    }
    if (alerted === true) {
        window.alerted = false;
    }
}

// End function invoked when E is clicked
function end() {
    if (stclick && mousecur) {
        var etime = Date.now();
        var tgap = etime - stime;
        var tgaps = tgap / 1000;
        alert("Yeah!!, You completed in: " + tgaps + " seconds");
        alert("You win!"); // Display win message as an alert
    } else if (stclick) {
        alert("No cheating! You moved the cursor from outside the maze.");
    } else {
        alert("Please, don't cheat!");
    }
}

// Change color when boundary is touched
function changecolor() {
    stclick = false;
    var x = document.getElementsByClassName("boundary");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
    if (!window.alerted) {
        alert("Sorry!! You lost :(");
        window.alerted = true;
    }
}

function outofdiv() {
    mousecur = false;
}
