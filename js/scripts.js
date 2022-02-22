// window.onbeforeunload = function() { return "Your work will be lost."; };
//This is a test.

window.onload = (event) => {
    console.log('Index.html and or Question pages are fully loaded');

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
    $('.answer-btn').click(function () {
        questionNumber = parseInt(this.id);
        calcAnswer(questionNumber);
    })

    //////////////////////// Project Functions

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

    // This function will calculate the results of each question
    function calcAnswer(e) {
        event.preventDefault(event);

        if(!document.getElementById(e + '1').checked && (!document.getElementById(e + '2').checked)){
            alert("Please provide an answer to continue")
            return
        }
        //Check which radio button is selected
        if (document.getElementById(e + '1').checked) {
            answerArr[e] = "A";
        } else if (document.getElementById(e + '2').checked) {
            answerArr[e] = "B";
        }

        // Check answer key agains user answer
        if (answerArr[e] === correctAnswerArr[e]) {
            let answerRight = 'c'
            updateLocalStore(answerRight)
        } else {
            let answerWrong = 'x'
            updateLocalStore(answerWrong)
        }
        // Check to see if on the last question.
        if (e == 9) {
            window.location.replace("../pages/results.html")
        } else {
            let newPage = parseInt(e + 2);
            window.location.replace("../pages/question" + newPage + ".html")
        }

    };

    // This function manages the localstorage
    function updateLocalStore(answer) {
        //check localstorage and add new result to old.
        var old = localStorage.getItem('userRepo');
        if (old === null) old = "";
        localStorage.setItem('userRepo', old + answer);
    }

};

