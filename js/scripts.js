// window.onbeforeunload = function() { return "Your work will be lost."; };
//This is a test.

window.onload = (event) => {

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
        answerBtns = document.querySelectorAll('.answerButtons')
        if (answerBtns[0].value == 'selected') {
            answer = "A"
            updateLocalStore(answer)
        } else {
            answer = "B"
            updateLocalStore(answer)
        }

        // Get the current page and add 1 to it. 
        pgNumber = parseInt(document.body.id)
        newPgNumber = pgNumber + 1;

        // Check if last page or increment page.
        if (pgNumber == 10) {
            setScore();
        } else {
            window.location.replace("../pages/question" + newPgNumber + ".html")
        }
    })

    // Answer Button Listner
    $('.answerButtons').click(function () {
        buttons = document.getElementsByClassName('answerButtons')
        // Toggle inner html value state
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].value = null
        }
        this.value = "selected"

        // Enable the next button
        nextQuestion = document.querySelector('.next-btn')
        nextQuestion.disabled = false;

    })

    //////////////////////// Project Functions

    // Sign up Function; needs some validation.    

    function setScore() {
        let userScore = localStorage.getItem('userRepo');
        let userScoreArr = JSON.parse(userScore);
        let score = 0
        let testLength = parseInt(correctAnswerArr.length)

        for (let i = 0; i < testLength; i++) {
            if (userScoreArr[i] == correctAnswerArr[i]) {
                score += 1
            }
        }
        // Set the user score
        var userScoreFin = (score / testLength) * 100;

        // Clear the decimel places
        finalScore = Math.trunc(userScoreFin)

        // Put the score in localstorage
        localStorage.setItem('userFin', JSON.stringify(finalScore))

        // Switch the page to the results page
        window.location.replace("../pages/results.html")

    }

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

        if (old == null) {
            localStorage.setItem('userRepo', JSON.stringify(answer))
        } else {

            strOld = JSON.parse(old);

            localStorage.setItem('userRepo', JSON.stringify(strOld + answer));

        }

    }
};

