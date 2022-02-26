// window.onbeforeunload = function() { return "Your work will be lost."; };
//This is a test.

window.onload = (event) => {

    //////////// Disable next button on load
    nextQuestion = document.querySelector('.next-btn')

    // Make sure the page presented has next buttons
    if (nextQuestion == null) {
        
    } else {
        nextQuestion.disabled = true;
    }

    ////////////////// Setup Variables
    const $elBtnLogIn = $("#loginBtn");
    console.log($elBtnLogIn);

    // Set the answers key below to automate grading
    const correctAnswerArr = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',]
    answerArr = []

    /////////////////// Setup Listing Events/////////////////////////////////////////////

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        fnSignUp(event);
    });

    // Start quiz button listner
    $('#startQuizBtn').click(function () {
               
        // Set the number of pages in quiz here.
        let totalNumQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        localStorage.setItem('numQ', JSON.stringify(totalNumQuestions));

        // Call for the next page
        newPageFunc()

    });

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
        setScore();
        newPageFunc()

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

    });

     //////////////////////// Project Functions///////////////////////////////

    // Function to ranomize and set new page
    function newPageFunc() {
       
        // Get the random number
        ranNum = randomNumberGen(10)

        if (ranNum === 11) {

            window.location.replace("../pages/results.html")

        } else {

            window.location.replace("../pages/question" + ranNum + ".html")
        }

    }

    //  Create a random number
    function randomNumberGen(countDown) {
       
        // Get the current local storage
        numQ = localStorage.getItem('numQ');
        numQArr = JSON.parse(numQ);
        numQArrLength = numQArr.length

        do {
            let min = 1;
            ranNum = Math.floor(Math.random() * (countDown - min + 1) + min);
            ranIndex = numQArr.indexOf(ranNum)
            if(numQArr.length == 0){
                ranNum = 11;
                return ranNum;
            }
        } while (ranIndex === -1);

        numQArr.splice(ranIndex, 1)
        localStorage.setItem('numQ', JSON.stringify(numQArr))

        return ranNum;

    }
   
    // Sign up Function; needs some validation.    
    function setScore() {
        let userScore = localStorage.getItem('userRepo');
        let userScoreArr = JSON.parse(userScore);
        let score = 0
        let testLength = parseInt(correctAnswerArr.length)

        // newPageFunc();

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

    }

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

    };

}
