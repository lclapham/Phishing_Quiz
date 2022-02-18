window.onload = (event) => {
    console.log('Registration page is fully loaded');

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        console.log("Picked up the click")
        fnSignUp(event);
    });



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

};

// Simple return to last page -->
function goBack() {
    window.history.back();
}
