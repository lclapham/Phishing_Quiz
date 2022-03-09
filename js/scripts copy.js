// window.onbeforeunload = function() { return "Your work will be lost."; };
//This is a test.

window.onload = (event) => {

    //////////// Disable next button on load
    let nextQuestion = document.querySelector('.next-btn')

    if (nextQuestion != null) {
        let nextQSpan = nextQuestion.querySelector('span')
        nextQSpan.style.display = "none"
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

    // Set the answers key below to automate grading
    answerArr = []

    /////////////////// Setup Listing Events/////////////////////////////////////////////


  

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        fnSignUp(event);
    });

    // Start quiz button listner
    $('#startQuizBtn').click(function () {

        // Set the number of pages in quiz here.
        // let totalNumQuestions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // localStorage.setItem('numQ', JSON.stringify(totalNumQuestions));
        // Set up question bank
        generateQbank(10, 11)

        // Call for the next page
        // newPageFunc()

    });

    // User Button Listner
    $('.next-btn').click(function () {

        test = document.getElementsByTagName('iframe')

        if (test.length == 0) {
            console.log("In the iframe check")
            answerBtn = document.querySelectorAll('[value=selected]')
            answerValue = "A"

        } else {
            answerBtn = document.querySelectorAll('[value=selected]')
            answerValue = document.getElementsByTagName('iframe')[0].name

        }
        // answerBtns = document.querySelectorAll('.answerButtons')
        // bodyName = document.querySelector('.ui-body').title


        console.log("Before the if's")

        if (answerBtn[0].name == answerValue) {
            answer = "C"
            updateLocalStore(answer)
        } else {
            answer = "X"
            updateLocalStore(answer)
        }

        // if ((answerBtns[0].value == 'selected') && (answerBtns[0].name === iFrameName)) {
        //     console.log("IN the first "+answerBtns[0].value+answerBtns[0].name+iFrameName)
        //     answer = "C"
        //     updateLocalStore(answer)

        // } else if ((answerBtns[1].value = 'selected') && (answerBtns[1].name === iFrameName[0].name)) {
        //    console.log("In the second if "+answerBtns[1].value+answerBtns[1].name+iFrameName)
        //     answer = "C"
        //     updateLocalStore(answer)
        // } else {
        //     console.log("In the else")
        //     answer = "X"
        //     updateLocalStore(answer)
        // }

        // Get the current page and add 1 to it. 
        pgNumber = parseInt(document.body.id)
        newPgNumber = pgNumber + 1;

        // Check if last page or increment page.

        setScore();
        newPageFunc()

    })

    // Answer Button Listner
    $('.answerButtons').click(function (e) {


        buttons = document.getElementsByClassName('answerButtons')
        // Toggle inner html value state
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].value = null
        }

        this.value = "selected"

        if (e.target.name == 'A') {
            this.style.backgroundColor = "#c82255"
            this.style.color = 'white'
            buttons[1].style.backgroundColor = "#cfd3d7"
            buttons[1].style.color = '#4f606c'
        } else if (e.target.name == 'B') {
            this.style.backgroundColor = "#008181"
            this.style.color = 'white'
            buttons[0].style.backgroundColor = "#cfd3d7"
            buttons[0].style.color = '#4f606c'

        }

        // Enable the next button
        nextQuestion = document.querySelector('.next-btn')
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

            console.log(imgCheck);

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

        // Get the random number
        ranNum = randomNumberGen(10)

        if (ranNum === 11) {

            window.location.replace("../pages/results.html")

        } else {

            window.location.replace("../pages/question" + ranNum + ".html")
        }

    }

    // Generator for question bank. Creates a random list of numbers in LS for questions
    function generateQbank(numUserQuestions, numQuizBank) {
        numQ = localStorage.getItem('numQ');
        if (numQ == null) {
            console.log("No Question bank")
            // localStorage.setItem('numQ');
            numQArr = []
            for(let i = 0; i <= 10; i++){
                rNum =  randomNumberGen();
                retryNum = numQArr.includes(rNum)
                if(retryNum == true){
                    console.log("It was true")
                } else {
                    console.log("It was false")

                }

            }
           


        } else { //populate test question bank

            console.log("There is something there")
        }


    }

    //  Create a random number


    function randomNumberGen() {

        // Get the current local storage
        // numQ = localStorage.getItem('numQ');
        // numQArr = JSON.parse(numQ);
        // numQArr = [];
        // numQArrLength = numQArr.length
        console.log("in random")

        let min = 1;
        ranNum = Math.floor(Math.random() * (10 - min + 1) + min);

        // ranIndex = numQArr.includes(ranNum)

        // numQArr.push(ranNum)



        // let min = 1;
        // ranNum = Math.floor(Math.random() * (10 - min + 1) + min);
        // console.log("The random number is "+ ranNum)
        // numQArr.push(ranNum)
        // ranIndex = numQArr.indexOf(ranNum)

        // console.log("This idex is "+ranIndex)
        // console.log("The array is " + numQArr)

        // localStorage.setItem('numQ', JSON.stringify(numQArr))

        //   (ranIndex === -1);





        // do {
        //     let min = 1;
        //     ranNum = Math.floor(Math.random() * (countDown - min + 1) + min);
        //     ranIndex = numQArr.indexOf(ranNum)
        //     if (numQArr.length == 0) {
        //         ranNum = 11;
        //         return ranNum;
        //     }
        // } while (ranIndex === -1);

        // numQArr.splice(ranIndex, 1)
        // localStorage.setItem('numQ', JSON.stringify(numQArr))

        // return ranNum;
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
