// window.onbeforeunload = function() { return "Your work will be lost."; };
//This is a test.

window.onload = (event) => {

    //////////// Disable next button on load
    let nextQuestion = document.querySelector('.submitBtn')

    if (nextQuestion != null) {
        let nextQSpan = nextQuestion.querySelector('span')
        // nextQSpan.style.display = "none"
    }


    // Progress Bar checks and calls
    checkLocalStor = localStorage.getItem('userRepo');

    if (checkLocalStor != null) {
        progressBar()
    }

    // Make sure the page presented has next buttons
    if (nextQuestion == null) {

    } else {
        nextQuestion.disabled = true;
        nextQuestion.style.opacity = ".5"
    }

    ////////////////// Setup Variables
    const $elBtnLogIn = $("#loginBtn");
    console.log($elBtnLogIn);

    
    var correct = document.getElementById("correct");
    var incorrect = document.getElementById("incorrect");

    console.log("Setup the modal vearibles " +correct +" "+incorrect)
    // Set the answers key below to automate grading
    answerArr = []
    //Store this answer from answer 11
    var q11Answer

    /////////////////// Setup Listing Events/////////////////////////////////////////////

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        fnSignUp(event);
    });

    // Start quiz button listner
    $('#startQuizBtn').click(function () {

        let questionBank = 11 // this is how many total questions are available to randomly select. Not number of questions presented to user.
        // Set up question bank
        generateQbank(questionBank)

        // Call for the next page
        newPageFunc()

    });

    // User Button Listner
    $('.submitBtn').click(function () {

     
        test = document.getElementsByTagName('iframe')
        test2 = document.getElementsByTagName('img')
        console.log("This is the length of test "+test)

        if (test.length == 0) {

            answerBtn = document.querySelectorAll('[data-selected=selected]')
            ansValue = document.querySelector('[data-answer]')
            answerValue = ansValue.dataset.answer
            console.log("test length section " + answerValue)

            console.log("This is the answerbutton value before the if's "+answerBtn[0].dataset.value)
            // answerValue = "A"
            answerBtn = answerBtn[0].dataset.value

        } else {

            answerBtn = document.querySelectorAll('[data-selected=selected]')
            answerBtn = answerBtn[0].value
           
            ansValue = document.querySelector('[data-answer]')
            answerValue = ansValue.dataset.answer
        }

        if (answerBtn == answerValue) {
            console.log("This is the answerbutton value " + answerBtn[0].value)
            console.log("This is the answer Value " + answerValue)
            answer = "C"
            console.log("THis is the correct if")
            correct.style.display = "block";

            updateLocalStore(answer)
        } else {
            answer = "X"
            console.log("this is the incorrect")
            incorrect.style.display = "block";
            updateLocalStore(answer)
        }

        // Get the current page and add 1 to it. 
        pgNumber = parseInt(document.body.id)
        newPgNumber = pgNumber + 1;

        // Check if last page or increment page.

        setScore();
        // newPageFunc()

    })

    $('.next-btn').click(function () {
        newPageFunc()

    })
    // Answer Button Listner
    $('.answerButtons').click(function (e) {
        console.log("In the answerButtons Listner")
        // Get the buttons.
        buttons = document.getElementsByClassName('answerButtons')


        console.log("This is the button " + buttons)

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].dataset.selected = null
        }

        this.dataset.selected = "selected"

        answerBtn = document.querySelectorAll('[data-selected=selected]')
        answerFinal = answerBtn[0].dataset.value
        console.log("This is the answer Final " + answerFinal)

        console.log("This is the target.value " + e.target.value)

        if (e.target.value == 'A') {
            console.log("In the else if  #1 A")
            this.style.backgroundColor = "#c82255"
            this.style.color = 'white'
            buttons[1].style.backgroundColor = "#cfd3d7"
            buttons[1].style.color = '#4f606c'
        } else if (e.target.value == 'B') {
            console.log("In the else if  #1 b")
            this.style.backgroundColor = "#008181"
            this.style.color = 'white'
            buttons[0].style.backgroundColor = "#cfd3d7"
            buttons[0].style.color = '#4f606c'

        } else if (answerFinal == 'A') {
            console.log("In the else if A")
            this.style.border = "5px solid #c82255"
            this.style.borderRadius = "10px"
            buttons[1].style.border = "none"
        } else if (answerFinal == 'B') {
            console.log("In the else if B")
            this.style.border = "5px solid #c82255"
            this.style.borderRadius = "10px"
            buttons[0].style.border = "none"

        }



        // Enable the next button
        nextQuestion = document.querySelector('.submitBtn')
        nextQuestion.disabled = false;
        nextQuestion.style.opacity = "1"
        let nextQSpan = nextQuestion.querySelector('span')
        nextQSpan.style.display = "inline"

    });

    //////////////////////// Project Functions///////////////////////////////

    // Function to set the color of the progress bar
    function progressBar() {
        let userProgress = localStorage.getItem('userRepo');
        let userProgressArr = JSON.parse(userProgress);

        for (let i = 0; i < userProgressArr.length; i++) {

            spanBox = document.querySelector('#sp0' + i)
            imgCheck = document.querySelector('#ck0' + i)
            imgX = document.querySelector('#x0' + i)
            count = document.querySelector('.count0' + i)

            if (userProgressArr[i] == 'C') {
                spanBox.style.backgroundColor = "#cfd3d7";
                imgCheck.style.display = 'grid';
                count.style.display = 'none';

            } else if (userProgressArr[i] == 'X') {
                spanBox.style.backgroundColor = "#cfd3d7";
                imgX.style.display = 'grid';
                count.style.display = 'none';

            }
        }
    }

    // Function to ranomize and set new page
    function newPageFunc() {
        pgNumbers = localStorage.getItem('numQ')
        pgNumArr = JSON.parse(pgNumbers);

        // Get the random number
        ranNum = randomNumberGen(10)

        if (pgNumArr.length == 0) {
            window.location.replace("../pages/results.html")

        } else {
            window.location.replace("../pages/question" + pgNumArr[0] + ".html")

        }

        // Remove page number from arr and local storage.
        pgNumArr.splice(0, 1)
        localStorage.setItem('numQ', JSON.stringify(pgNumArr));

    }

    // Generator for question bank. Creates a random list of numbers in LS for questions
    function generateQbank(questionBank) {
        numQArr = []
        numQ = localStorage.getItem('numQ');
        let counter = 1
        if (numQ == null) {
            do {
                ranNum = randomNumberGen(questionBank)
                retryNum = numQArr.includes(ranNum)
                if (retryNum == false) {
                    numQArr.push(ranNum)
                }

            } while (numQArr.length < 10)

        } localStorage.setItem('numQ', JSON.stringify(numQArr))


    }

    //  Create a random number
    function randomNumberGen(questionBank) {

        let min = 1;
        ranNum = Math.floor(Math.random() * (questionBank - min + 1) + min);
        return ranNum;

    }

    // Sign up Function; needs some validation.    
    function setScore() {
        let userScore = localStorage.getItem('userRepo');
        let userScoreArr = JSON.parse(userScore);
        let score = 0
        // let testLength = parseInt(correctAnswerArr.length)
        let testLength = 10  // This is the number of questions

        // newPageFunc();

        for (let i = 0; i < testLength; i++) {
            if (userScoreArr[i] == 'C') {
                score += 1
            }
        }
        // Set the user score
        var userScoreFin = (score / testLength) * 100;

        // Clear the decimel places
        finalScore = Math.trunc(userScoreFin)

        // Put the score in localstorage
        localStorage.setItem('userFin', JSON.stringify(finalScore))

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

        };

    };

};
