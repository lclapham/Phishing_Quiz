// Get the modal
// var modal = document.getElementById("myModal");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");


// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("submit btn")
//   modal.style.display = "block";
  correct.style.display = "block";
  incorrect.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
//   modal.style.display = "none";
correct.style.display = "block";
incorrect.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     // incorrect.style.display = "none";
//   }
// }

    // Answer Button Listner
    $('.answerButtons').click(function (e) {
        console.log("In the answerButtons Listner")
        // Get the buttons.
        buttons = document.getElementsByClassName('answerButtons')
       
        
        console.log("This is the button "+buttons)

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].dataset.selected = null
        }

        this.dataset.selected = "selected"

        answerBtn = document.querySelectorAll('[data-selected=selected]')
        answerFinal = answerBtn[0].dataset.value
        console.log("This is the answer Final "+ answerFinal)
        
        console.log("This is the target.value "+ e.target.value)

        if (e.target.value == 'A') {
            console.log("In the else if  #1 A")
// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("submit btn")
//   modal.style.display = "block";
  correct.style.display = "block";
  incorrect.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
//   modal.style.display = "none";
correct.style.display = "block";
incorrect.style.display = "none";

}
              

            
        } else if (e.target.value == 'B') {
            console.log("In the else if  #1 b")
// When the user clicks the button, open the modal 
btn.onclick = function() {
    console.log("submit btn")
//   modal.style.display = "block";
  incorrect.style.display = "block";
  correct.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
//   modal.style.display = "none";
incorrect.style.display = "block";
correct.style.display = "none";

}
        }
    });