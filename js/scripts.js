// window.onbeforeunload = function() { return "Your work will be lost."; };
//This is a test.

window.onload = (event) => {
    console.log('Index.html and or Question pages are fully loaded');

    //////////// Disable next button on load
    nextQuestion = document.querySelector('.next-btn')
    nextQuestion.disabled = true;

    ////////////////// Setup Variables
    const $elBtnLogIn = $("#loginBtn");
    console.log($elBtnLogIn);

    const correctAnswerArr = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',]
    answerArr = []

    /////////////////// Setup Listing Events

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        fnSignUp(event);
    });

    // Start quiz button listner
    $('#startBTN').click(function () {
        window.location.replace("../Phishing_Quiz/question1.html")
    })

    // User Button Listner
    $('.next-btn').click(function () {
        pgNumber = document.body.id
        if (pgNumber == 9) {
            window.location.replace("../pages/results.html")
        } else {
            let newPage = parseInt(pgNumber + 2);
            window.location.replace("../pages/question" + newPage + ".html")
        }
    })

    // Answer Button Listner
    $('.answerButtons').click(function () {

        pgNumber = document.body.id;
        answerValue = this.value;

        console.log("Yep listner is working " + pgNumber + answerValue)

        validateChoice(pgNumber, answerValue)
        // questionNumber = parseInt(this.id);
        // calcAnswer(questionNumber);
    })

    //////////////////////// Project Functions

    function validateChoice(pgNumber, answerValue) {
        console.log("In validate chocie")
        currentStorage = localStorage.getItem('userRepo')
        currentPG = document.body.id;

        if (currentStorage == null) {
            recordAnswer(pgNumber, answerValue)
        } else {
            newPgNumber = pgNumber + 1
            if (newPgNumber = currentStorage.length) {
                console.log("Yes thats right")
                userAnswerLocal = localStorage.getItem('userRepo')
                console.log(userAnswerLocal[pgNumber])

                recordAnswer(pgNumber, answerValue)
            } else {
                console.log("the two don't match, pucntion--Revisionsed to 2 and updated data)
                console.log("the two don't match, pucntion--Revisionsed to 2 and updated dataema)
            }
        }

    }



function recordAnswer(pgNumber, answerValue) {
    console.log("Yep it is working " + pgNumber + answerValue)

    // Check answer key agains user answer
    console.log("This is the val of answer value in the fucntion " + answerValue)
    
    if (correctAnswerArr[pgNumber] == answerValue) {
        let answerRight = 'c'
        updateLocalStore(answerRight)
    } else {
        let answerWrong = 'x'
        updateLocalStore(answerWrong)
    }
    // Enable the next button
    nextQuestion = document.querySelector('.next-btn')
    nextQuestion.disabled = false;
}

// Sign up Function; needs some validation.    
function fnSignUp(event) {
    event.preventDefault(event);
    let dataStore = {
        fName: $('#fName').val(),
        lName: $('#lName').val(),
        uEmail: $('#uEmail').val().toUpperCase(),

    }

    // set local Storage with user signup details
    localStorage.setItem('dataKey', JSON.stringify(dataStore));
    window.location.replace("./instructions.html");

};


// This function manages the localstorage
function updateLocalStore(answer) {
    //check localstorage and add new result to old.
    var old = localStorage.getItem('userRepo');
    if (old === null) old = "";
    localStorage.setItem('userRepo', old + answer);
}

};

