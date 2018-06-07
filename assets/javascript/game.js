var randomNum = 18 + Math.floor(Math.random() * 120);

$("#numToGuess").html(randomNum);
console.log(randomNum);
var blue = 1 + Math.floor(Math.random() * 12);
var pink = 1 + Math.floor(Math.random() * 12);
var yellow = 1 + Math.floor(Math.random() * 12);
var purple = 1 + Math.floor(Math.random() * 12);

var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);

var reset = function() {
    userTotal = 0;
    randomNum = 18 + Math.floor(Math.random() * 120);
    blue = 1 + Math.floor(Math.random() * 12);
    pink = 1 + Math.floor(Math.random() * 12);
    yellow = 1 + Math.floor(Math.random() * 12);
    purple = 1 + Math.floor(Math.random() * 12);
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}


var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("You won!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("Try Again!");
        $("#losses").html(losses);
        reset();
    }
};



$("#purple").on("click", function() {
    userTotal = userTotal + purple;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#yellow").on("click", function() {
    userTotal = userTotal + yellow;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#pink").on("click", function() {
    userTotal = userTotal + pink;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#blue").on("click", function() {
    userTotal = userTotal + blue;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})