// window.onbeforeunload = function() { return "Your work will be lost."; };


window.onload = (event) => {
    console.log('page is fully loaded');
  

// document.addEventListener("deviceready", onDeviceReady(),false);
// function onDeviceReady() {
   
//     console.log("Device Ready");

    ////////////////// Setup Variables
    const $elBtnLogIn = $("#loginBtn");
    console.log($elBtnLogIn);

    // Save form DB
    // let myDB = new PouchDB("myComics");

    //This is an array for checking the answers.
    // const answerArr = [['A'], ['B']];
    // var correctAnswers = 0;
    // Save form Variables
    // const $elmSaveComic = $('#cbSaveFrm');

    /////////////////// Setup Listing Events
    // User Login Form Event
    $('#myLoginForm').submit(function () {
        mainLogin();
    });

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        console.log("Picked up the click")
        fnSignUp(event);
    });

    // User Logout Listner
    $('#uLogoutBtn').click(function () {
        uLogout();
    })

    $('#startBTN').click(function () {
        window.location.replace("../Phishing_Quiz/question1.html")
    })

    $('.resultsBTN').click(function () {
        console.log("Hitting the results button")
        window.location.replace("../Phishing_Quiz/index.html#pgResults")
    })

    // User Button Listner
    $('.answer-btn').click(function () {
        questionNumber = parseInt(this.id);

        calcAnswer(questionNumber);

    })

    // Save Page Reset Button To clear form
    // $('#cbResetFrmBtn').click(function () {
    //     // reset all field in save form
    //     $('#cbSaveFrm')[0].reset();

    // });

    //Listen for view page to be selected and refresh list
    // $('.navView').click(function () {
    //     console.log('naveView is working');
    //     fnViewComics();
    // })
    //Put it back here
    // CB Save Form Listner


    // Options Page Event Listeners
    // $('#dataBaseDeleteBtn').click(function () {
    //     console.log('dataBaseDeleteBtn is working');
    //     deleteDB();
    // });

    //////////////////////// Functions mainLogin, Signup, Calculate, Results
    function mainLogin(event) {
        console.log("In mainLogain function " +event);
        event.preventDefault(event);
        console.log("mainLogin(event) is running");

        let $elUserEmail = $("#inLoginEmail"),
            $elUserLoginPw = $("#inUserPwLogin"),
            $tmpValUserLoginEmail = $elUserEmail.val().toUpperCase(),
            $tmpValUserLoginPW = $elUserLoginPw.val();

        // Check to see if user has signed up
        if (localStorage.getItem('dataKey') == null) {
            window.alert("Please Sign Up");

        } else {
            let retrievedData = localStorage.getItem('dataKey');
            let normalizedData = JSON.parse(retrievedData);

            if ($tmpValUserLoginEmail === normalizedData['uEmail'] & ($tmpValUserLoginPW === normalizedData['uPassword'])) {
                console.log("you should be at the home screen")
                $(":mobile-pagecontainer").pagecontainer("change", "#pgHome");
            } else {
                window.alert('Login is incorrect');
            }
        }
    };

    // Need to add a validation so the user must fill in all fields    
    function fnSignUp(event) {
        console.log("You are in fnsignup")
        event.preventDefault(event);
        let dataStore = {
            fName: $('#fName').val(),
            lName: $('#lName').val(),
            uEmail: $('#uEmail').val().toUpperCase(),
            // uName: $('#uName').val(),
            // uPassword: $('#uPassword').val()  // need to create a hash function and a check to make sure both pw's are the same.

        }
        // set local Storage with user signup details
        localStorage.setItem('dataKey', JSON.stringify(dataStore));
        console.log("You made it to the redirect point")

        window.location.replace("./instructions.html");
        // $(":mobile-pagecontainer").pagecontainer("change", "#pgInstructions");
    };

    // Super Simple Logout---I think we should make this the submit score.
    function uLogout() {
        let result = window.confirm("Are you sure you want to logout?");
        if (result = true) {
            $(":mobile-pagecontainer").pagecontainer("change", "#pgWelcome");

            // Reset the forms
            $('#myLoginForm')[0].reset();
            $('#mySignUpForm')[0].reset();
        }
    }
};

const correctAnswerArr = ['A','A','A','A','A','A','A','A','A','A',]
var answerArr = []
var correctAnswers = 0;
var numQuestions = 10;

// This function will calculate the results of each question
function calcAnswer(e) {
    if (document.getElementById(e + '1').checked) {
        answerArr[e] = "A"
        console.log(answerArr)
    } else if (document.getElementById(e + '2').checked) {
        console.log("b")
        answerArr[e] = "B"
        console.log(answerArr)
    }

    if (answerArr[e] === correctAnswerArr[e]) {
        alert("You got it right")
        correctAnswers += 1
        console.log("correct answers "+correctAnswers)
    } else {
        console.log("You got it wrong")
    }

    // document.getElementById('yourScore').innerHTML = correctAnswers;
    
}

// function recordAnswers(e, correctAnswers) {
//     indexes = parseint(numQuestions - 1);
//     if (correctAnswerArr[e] === null) {
//         correctAnswerArr[e] = e
//     }

// }





// Simple return to last page -->
function goBack() {
    window.history.back();
}
