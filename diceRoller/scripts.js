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