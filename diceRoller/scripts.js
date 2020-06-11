// We have two elements on the html page. One is a <button> with an id="#dice", the other is an originally empty <div> with in id="result" of which we populate with this js function above


/**
 * Rolls one 'die' by generating a random number between 1 and the given number
 * @param   {number} sides - the number of sides on the die. should be an integer
 * @returns {number} one random number between one and the number given
 */
const dieRoll = sides => Math.floor( (Math.random() * sides) + 1 );

/**
 * Rolls a given number of dice and returns an array containing all the rolls
 * @param  {number} count - how many dice to roll
 * @param  {number} sides - how many sides are on each die
 * @returns {array} an array where each element is one die roll
 */
function multiDiceRoll(count,sides) {
  let cup = [];
  for (let i = 0; i < count; i++) {
    cup.push( dieRoll(sides) );
  }
  return cup;
}



$( "#dice" ).click(function() {
  // Initilizes the script by listening for a click on the html <button> with an id of #dice. it is when and only when a user clicks
  // on the button that the function runs.


  // Declare an array which we call total. total[] accepts the values from a function we're calling that generates a given number of random numbers between 1 and another given number, in this case, 6. links below to MDN on Math.floor() and Math.random()
  //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  //    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  let total = multiDiceRoll(4,6);

  // Sorts the value of total in descending order. Remember, total = an array [die1, die2, die3, die4]. Link below for more info on the sort method
  //    https://www.w3schools.com/jsref/jsref_sort.asp
  total.sort(function(a, b){return b-a});

  // Un-comment the console.log(total) to see what values are being passed to total[] in the console if you would like.
  // console.log(total)

  // Initializes the postCheck() function and passes in the array total as an argument. Yes, we are running a function inside of another function!!
  postCheck(total);

});

function postCheck(total) {
  // Try console logging total right below this line, you will see that total still equals the same array in the same order we console logged from the previous function,
  //    We have simply passed it in as an argument to another function this time.

  // Declares a new variable called result, which we set to equal the document object model (DOM element) with an id of result.
  //    notice how we reference it for the remainder of the postCheck function. instead of typing out document.getElementById() everywhere, we can simply refer to the DOM element
  //    by typing result, and the function will know exactly what we mean.
  let result = $( "#result" );
  console.log(result)

  // (result.is(':empty')) this conditional checks to see if result is empty. If it is empty, we can go ahead and post our new dice rolls to html.
  //    if this conditional returns true we will run all the code inside the if block. This includes the for each loop, which will run once for every value in total[]
  if (result.is(':empty')) {

    // jQuery syntax foreach loop. check MDN for this syntax as well as what it would look like in vanilla JS
    $.each(total, function(index, value) {

      // We append each value of total[] to the end of the result (which equals <div id=result></div>)
      //    we also concatenate opening and closing list tags.
      //    NOTE... we pass in index and value for the items of total in the above line. If we wanted to display the index of each of these elements as well we could concatenate it like such
      //    concat ex. result.append( '<li>' + 'Array item index is:' + index + '<br>' + 'Array item value is:' + value + '</li>' + '<br>')
      //    Once there is nothing left in total[] to append the function returns by itself, there is no need for a return statement in this particular function.
      result.append( '<li>' + value + '</li>' + '<br>');

      console.log("if was true")
      console.log(total);
      // you will see this console log for each item in the array as the for each loop will run until it has nothing left to append.
      // so in this case you will see these two logs above 4 times every time the button is pressed

    });
  } else {
    // The else statement will run when the if statement was returned false, but we need the if statement to return true if we ever want to exit the function,
    //    so lets delete all the content result.

    // Deletes the content of result. So by accessing the DOM we have removed all the list items that we previously posted
    result.empty()

    console.log(result)
    // open up #div result in the console. console.log(result) will return an array. notice how the one that runs on line 18 has a value for the innerHTML and innerText.
    // whereas the console.log on line 50 is completely empty

    // Else block: the rest of the else block repeats the code from the click function. Obviously this is less than ideal repeating ourselves like this.
    //    however for this demonstration I am not worried about it too much.

    let total = multiDiceRoll(4,6);

    total.sort(function(a, b){return b-a});
    console.log(total)
    console.log("recursion")

    // We call the postCheck function within itself and pass in a new value for total. Since we deleted the content of result, the if conditional should now return true
    //    This means that the if block will run and the content we want to be displayed will be visible.
    postCheck(total);
    

  }
};

// Challenge: There are numerous ways to not repeat our code like this for this example maybe have a try at it yourself if you are feeling adventurous.
  // First: why is it when i first click on the button after reloading, the numbers from the dice roll arent in descending order like we want them to be?
  //    This has been addressed. The sort function was missing from the code in the initial click function.

  // Second: It isnt the best thing to repeat our code, see if we can get the code to run properly without having to declare the same four variables and the same array twice in the same function.
  //    Some functionality has been broken out into separate functions. More can still be done.

  // Last: It is ugly as sin, How can we style this differently to make it appear better? Remember, although you dont see them in index.html
  //    ... the values of total[] are displayed within list tags so you may style those as well.
  //    Some of this has been addressed. Some formatting has been added to the list items, and the typo in the title "styles.css" has been corrected.
  // Happy coding everyone, and reach out to me on slack if you have any questions.



