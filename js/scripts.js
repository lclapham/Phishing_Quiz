document.addEventListener("deviceready", onDeviceReady(), false);
function onDeviceReady() {

    console.log("Device Ready");

    ////////////////// Setup Variables
    const $elBtnLogIn = $("#loginBtn");
    console.log($elBtnLogIn);

    // Save form DB
    // let myDB = new PouchDB("myComics");

    //This is an array for checking the answers.
    // const answerArr = [['A'], ['B']];
    // var correctAnswers = 0;
    // Save form Variables
    const $elmSaveComic = $('#cbSaveFrm');

    /////////////////// Setup Listing Events
    // User Login Form Event
    $('#myLoginForm').submit(function () {
        mainLogin();
    });

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        fnSignUp(event);
    });

    // User Logout Listner
    $('#uLogoutBtn').click(function () {
        uLogout();
    })

    // User Button Listner
    $('.answer-btn').click(function () {
        questionNumber = this.id;
        console.log("This is the element id " + this.id);
        calcAnswer(questionNumber);
    })

    // Save Page Reset Button To clear form
    $('#cbResetFrmBtn').click(function () {
        // reset all field in save form
        $('#cbSaveFrm')[0].reset();

    });

    //Listen for view page to be selected and refresh list
    // $('.navView').click(function () {
    //     console.log('naveView is working');
    //     fnViewComics();
    // })
    //Put it back here
    // CB Save Form Listner


    // Options Page Event Listeners
    $('#dataBaseDeleteBtn').click(function () {
        console.log('dataBaseDeleteBtn is working');
        deleteDB();
    });



    // This function allows the user to completely delete the my.DB
    // function deleteDB() {
    //     if (window.confirm("Proceeding will delete all stored comic book data")) {
    //         console.log("User selected to delete my.DB")
    //         if (window.confirm("Are you sure? This action cannot be undone")) {
    //             console.log("User confirmed delete of my.DB")

    //             // This deletes my.db
    //             myDB.destroy(function (failure, success) {
    //                 if (failure) {
    //                     console.log("Error deleting my.DB " + failure.message);
    //                 } else {
    //                     console.log("Database delete: " + success.ok);
    //                     // Recreate the database
    //                     myDB = new PouchDB("myComics");
    //                     // Call view to update DB screens
    //                     fnViewComics();
    //                 }
    //             });

    //         } else {
    //             console.log("User cancelled my.DB deletion")
    //         }
    //     }
    // }

    // UPDATE DATABASE ENTRIES #pgEditComic
    // let comicWIP = "";

    // function fnEditComic(thisComic) {
    //     console.log("Edit Comic Function Working" + thisComic.context.id);
    //     myDB.get(thisComic.context.id, function (failure, success) {
    //         if (failure) {
    //             console.log("Error getting the comic for update. Error Message: " + failure.message);
    //         } else {
    //             console.log("Success getting the comic: " + success.title);
    //             // $(":mobile-pagecontainer").pagecontainer("change", "#pgEditComic");
    //             $('#cbTitleEdit').val(success.title);
    //             $('#cbVolEdit').val(success.number);
    //             $('#cbYearEdit').val(success.year);
    //             $('#cbPublisherEdit').val(success.publisher);
    //             $("#cbNotesEdit").val(success.notes);

    //             comicWIP = success._id;
    //         }

    //     });
    //     $(":mobile-pagecontainer").pagecontainer("change", "#pgEditComic", { "role": "dialog" });
    // };
    // function fnEditComicCancel() {

    //     console.log("We In cancel")
    //     $("#pgEditComic").dialog("close");
    // }

    // function fnEditComicConfirm(event) {
    //     event.preventDefault();
    //     console.log("fnEditComicConfirm is running with " + comicWIP);

    //     let $valInTitleEdit = $('#cbTitleEdit').val(),
    //         $valInNumberEdit = $("#cbVolEdit").val(),
    //         $valInYearEdit = $('#cbYearEdit').val(),
    //         $valInPublisherEdit = $('#cbPublisherEdit').val(),
    //         $valInNotesEdit = $('#cbNotesEdit').val();

    //     myDB.get(comicWIP, function (failure, success) {
    //         if (failure) {
    //             console.log("Error: " + failure.message);
    //         } else {
    //             console.log("About to update " + success._id)
    //             myDB.put({
    //                 "_id": success._id,
    //                 "_rev": success._rev,
    //                 "title": $valInTitleEdit,
    //                 "number": $valInNumberEdit,
    //                 "year": $valInYearEdit,
    //                 "publisher": $valInPublisherEdit,
    //                 "notes": $valInNotesEdit
    //             }, function (failure, success) {
    //                 if (failure) {
    //                     console.log("Error: " + failure.message);
    //                 } else {
    //                     console.log("Updated comic: " + success.id);
    //                     fnViewComics();
    //                     $('#pgEditComic').dialog("close")
    //                 }
    //             });
    //         };

    //     });
    // };


    // Delete Rows Function

    // function fnEditComicDelete() {
    //     console.log("fnEditComicDelete() is running");
    //     myDB.get(comicWIP, function (failure, success) {
    //         if (failure) {
    //             console.log("Error: " + failure.message);
    //         } else {
    //             console.log("Deleting: " + success._id);
    //             if (window.confirm("Are you sure you want to delete the comic?")) {
    //                 console.log("confirm Delete");
    //                 myDB.remove(success, function (failure, success) {
    //                     if (failure) {
    //                         console.log("Couldn't Delete: " + failure.message);
    //                     } else {
    //                         console.log("Deleted Comic: " + success.ok);
    //                         fnViewComics();
    //                         $('#pgEditComic').dialog("close")
    //                     }
    //                 });
    //             } else {
    //                 console.log("Deletion Cancelled")
    //             }
    //         }
    //     });
    // }

    // $("#btnDeleteComic").on("click", fnEditComicDelete);

    // $('#viewComics').on("click", "tr.btnShowComicInfo", function () { fnEditComic($(this)); });
    // $('#fmEditComicInfo').submit(function (event) { fnEditComicConfirm(event); });
    // $('#cbCancelBtn').on("click", fnEditComicCancel);

    //////////////////////// Functions mainLogin, Signup, Logout, View Comics, Delete Comics
    function mainLogin(event) {
        console.log(event);
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
        event.preventDefault(event);
        let dataStore = {
            fName: $('#fName').val(),
            lName: $('#lName').val(),
            uEmail: $('#uEmail').val().toUpperCase(),
            uName: $('#uName').val(),
            uPassword: $('#uPassword').val()  // need to create a hash function and a check to make sure both pw's are the same.

        }
        // set local Storage with user signup details
        localStorage.setItem('dataKey', JSON.stringify(dataStore));

        $(":mobile-pagecontainer").pagecontainer("change", "#pgInstructions");
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
    // Load data from DB to present on Comic Book View page 
    // function fnViewComics() {
    //     console.log("fnViewComics() is running");
    //     myDB.allDocs({ "ascending": true, "include_docs": true },
    //         function (failure, success) {
    //             if (failure) {
    //                 console.log("Failure retrieving data: " + failure);
    //             } else {
    //                 console.log("Success, there is data : " + success);
    //             }

    //             if (success.rows[0] === undefined) {
    //                 $("#viewComics").html("No comics saved, yet");
    //             } else {
    //                 console.log("Comics to display: " + success.rows.length);
    //             }

    //             // let comicData = "<table id='pgViewTable'><tr><th>Name</th><th>Vol/Issue #</th><th>Year</th><th>Publisher</th><th>Notes</th><th>Select</th></tr>"
    //             let comicData = "<table id='pgViewTable'><tr><th>Name</th><th>Vol #</th><th>Year</th><th>Publisher</th><th>Notes</th></tr>"

    //             for (let i = 0; i < success.rows.length; i++) {
    //                 comicData += "<tr class='btnShowComicInfo' id='" + success.rows[i].doc._id + "'> <td>" +
    //                     success.rows[i].doc.title +
    //                     "</td><td>" + success.rows[i].doc.number +
    //                     "</td><td>" + success.rows[i].doc.year +
    //                     "</td><td>" + success.rows[i].doc.publisher +
    //                     "</td><td>" + success.rows[i].doc.notes +
    //                     "</td></tr>";
    //                 console.log(success.rows[i].doc._id);
    //             }
    //             comicData += "</table>";
    //             $("#viewComics").html(comicData);
    //         });
    // }

    // fnViewComics();
    // Comic book Save form database prep function
    // function fnPrepComic() {
    //     console.log("fnPrepComic() is running");

    //     let $cbTitleVal = $('#cbTitle').val(),
    //         $cbVolVal = $('#cbVol').val(),
    //         $cbYearVal = $('#cbYear').val(),
    //         $cbPublisherVal = $('#cbPublisher').val(),
    //         $cbNotesVal = $("#cbNotes").val();

    //     let tmpComic = {
    //         "_id": $cbTitleVal.replace(/\W/g, "") + $cbYearVal + $cbVolVal,
    //         "title": $cbTitleVal,
    //         "number": $cbVolVal,
    //         "year": $cbYearVal,
    //         "publisher": $cbPublisherVal,
    //         "notes": $cbNotesVal
    //     };

    //     return tmpComic;
    // }

    // Comic book Save function to store configured data
    // function fnSaveComic(event) {
    //     event.preventDefault(event);
    //     console.log('fnSaveComic(event) is running');
    //     let aComic = fnPrepComic();
    //     console.log(aComic);

    // Function to put the comic book configured data into PouchDB
    // myDB.put(aComic, function (failure, success) {
    //     if (failure) {
    //         console.log("Error: " + failure.message);
    //         window.alert("Comic book already Saved");
    //     } else {
    //         window.alert("One Comic Saved!")
    //         console.log("comic Saved!" + success.ok);
    //         $elmSaveComic[0].reset();

    //     }
    // });

    // };

};

const answerArr = ['A', ['B']]
var correctAnswers = 0;


// This function will calculate the results of each question
function calcAnswer(e) {
    console.log("In calc function")
    checkboxes = document.getElementsByClassName('answers');
    for (let i = 0; i <= checkboxes.length; i++) {
        console.log("how many correct answers " + correctAnswers)
        console.log()
        if (checkboxes[i].checked == true && checkboxes[i].value === answerArr[e][0]) {
            console.log("The corect value is " + checkboxes[i].value)
            correctAnswers += 1;
            console.log("total answers correct " + correctAnswers)
            
        }document.getElementById('yourScore').innerHTML = correctAnswers;
    }
    
}
    



var global = "Global Variable"; //Define global variable outside of function

function setGlobal() {
    global = "Hello World!";
};

console.log("This is the global test " + global); //This will print out "Hello World"

// Simple return to last page -->
function goBack() {
    window.history.back();
}
