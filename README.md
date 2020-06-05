# diceRoller
A dice roller using javascript and jQuery

There is an explanation to the code below and I reference the lines of code in this readme to try an make it easier to follow.

I use Jquery, you do not have to be familiar with jQuery but do know that $('#dice').click(function() on line 11, and $( "#result" )...
on line 28, is the same thing as saying document.getElementById('idName') with regular js.

This is certainly not the most efficient way to acheive the desired outcome, however it uses a lot of different skills and serves as a decent demo, at least i think so, of a lot of different things you can do with javascript.

// scripts.js start
$( "#dice" ).click(function() {


  let die1 = Math.floor((Math.random() * 6) + 1)
  let die2 = Math.floor((Math.random() * 6) + 1)
  let die3 = Math.floor((Math.random() * 6) + 1)
  let die4 = Math.floor((Math.random() * 6) + 1)

  let total = [die1, die2, die3, die4 ]

  // console.log(total)
  postCheck(total);

});

function postCheck(total) {
  let result = $( "#result" );
  console.log(result)
  if ($(result).is(':empty')) {

    $.each(total, function(index, value) {

      $(result).append( '<li>' + value + '</li>' + '<br>');

      console.log("if was true")
      console.log(total);
    });
  } else {

    $(result).empty()

    let die1 = Math.floor((Math.random() * 6) + 1)
    let die2 = Math.floor((Math.random() * 6) + 1)
    let die3 = Math.floor((Math.random() * 6) + 1)
    let die4 = Math.floor((Math.random() * 6) + 1)

    let total = [die1, die2, die3, die4 ]

    total.sort(function(a, b){return b-a});
    console.log(total)
    console.log("recursion")
    postCheck(total);

  }
};

// scripts.js end

We have two elements on the html page. One is a <button> with an id="#dice", the other is an originally empty <div> with in id="result" of which we populate with this js function above

line 11: Initilizes the script by listening for a click on the html <button> with an id of #dice. it is when and only when a user clicks
    on the button that the function runs. 
    
line 15,16,17,18: declares variables and sets them to equal the result of a random number 1 through 6. links below to MDN on Math.floor() and Math.random()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    
line 20: declare an array which we call total. total[] accepts the values of the random numbers from die1, die2, die3, die4.
    un-comment the console.log(total) to see what values are being passed to total[] in the console if you would like.
    

    

    

