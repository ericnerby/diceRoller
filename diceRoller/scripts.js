// We have two elements on the html page. One is a <button> with an id="#dice", the other is an originally empty <div> with in id="result" that we populate using the below code

let rollButton = document.getElementById("dice");

/**
 * Checks a given HTML element to see if it's empty
 * @param   {element}  element - the element we're checking
 * @returns {boolean} true if the element is empty, false if the element contains content
 */
const isEmpty = element => element.innerHTML === "";

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

/**
 * Places content in a given HTML element
 * @param {string} content     - content to be placed
 * @param {element} destination - element where the content should be placed
 */
function print(content,destination) {
  let outputDiv = document.getElementById(destination);
  outputDiv.innerHTML = content;
}

/**
 * Clears the contents of a given HTML element
 * @param {element} element - HTML element to be cleared
 */
function clearContents(element) {
  element.innerHTML = "";
}

rollButton.onclick = function rollTheDice() {
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

};

function postCheck(total) {
  // Try console logging total right below this line, you will see that total still equals the same array in the same order we console logged from the previous function,
  //    We have simply passed it in as an argument to another function this time.

  // Declares a new variable called result, which we set to equal the document object model (DOM element) with an id of result.
  //    notice how we reference it for the remainder of the postCheck function. instead of typing out document.getElementById() everywhere, we can simply refer to the DOM element
  //    by typing result, and the function will know exactly what we mean.
  let result = document.getElementById( "result" );
  console.log(result)

  // ( isEmpty( result ) this conditional checks to see if result is empty. If it is empty, we can go ahead and post our new dice rolls to html.
  //    if this conditional returns true we will run all the code inside the if block. This includes the for each loop, which will run once for every value in total[]
  // The process of converting to vanilla javascript means it was more practical to create a function to check for an empty HTML element.
  console.log( isEmpty( result ))
  if ( isEmpty( result ) ) {

    // Converted to vanilla js for loop, and added opening and closing ul tags before printing to the webpage
    let contentString = "<ul>";
    for ( i=0; i<total.length; i++) {

      // We append each value of total[] to the end of the result (which equals <div id=result></div>)
      //    we also concatenate opening and closing list tags.
      //    NOTE... we pass in index and value for the items of total in the above line. If we wanted to display the index of each of these elements as well we could concatenate it like such
      //    concat ex. result.append( '<li>' + 'Array item index is:' + index + '<br>' + 'Array item value is:' + value + '</li>' + '<br>')
      //    Once there is nothing left in total[] to append the function returns by itself, there is no need for a return statement in this particular function.
      contentString += '<li>' + total[i] + '</li>';

      console.log("if was true")
      console.log(total);
      // you will see this console log for each item in the array as the for each loop will run until it has nothing left to append.
      // so in this case you will see these two logs above 4 times every time the button is pressed

    }

    // Add the closing ul tag and then call the function to "print" the content to the webpage.
    contentString += '</ul>';
    print(contentString, 'result');
    
  } else {
    // The else statement will run when the if statement was returned false, but we need the if statement to return true if we ever want to exit the function,
    //    so lets delete all the content result.

    // Deletes the content of result. So by accessing the DOM we have removed all the list items that we previously posted
    clearContents( result );

    console.log(result)
    // open up #div result in the console. console.log(result) will return an array. notice how the one that runs earlier has a value for the innerHTML and innerText.
    // whereas the console.log here is completely empty

    // Else block: the rest of the else block repeats the code from the click function. Obviously this is less than ideal repeating ourselves like this.
    //    however for this demonstration I am not worried about it too much.
    
    // The below code (commented out) is not necessary since result is being emptied and total is not. total was passed into this function, and the same total can be
    //    passed through the function again.
    // let total = multiDiceRoll(4,6);
    // total.sort(function(a, b){return b-a});

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
  //    Solution:
  //        Created new functions for rolling dice and printing to page to cut down on repeated code
  //        Removed repeated code in the else section. This wasn't necessary since random numbers had already been generated from the click event and passed into the function    

  // Last: It is ugly as sin, How can we style this differently to make it appear better? Remember, although you dont see them in index.html
  //    ... the values of total[] are displayed within list tags so you may style those as well.
  //    Some of this has been addressed. Some formatting has been added to the list items, and the typo in the title "styles.css" has been corrected.
   
  // Happy coding everyone, and reach out to me on slack if you have any questions.



