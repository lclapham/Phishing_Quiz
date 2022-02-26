window.onload = (event) => {
    console.log('Registration page is fully loaded');

    // User Signup FORM Listner
    $('#mySignUpForm').submit(function (event) {
        fnSignUp(event);
    });



    // Need to add a validation so the user must fill in all fields    
    function fnSignUp(event) {
        event.preventDefault(event);

        // set local Storage with user signup details
        localStorage.setItem('firstName', JSON.stringify($('#fName').val()));
        localStorage.setItem('lastName', JSON.stringify($('#lName').val()));
        localStorage.setItem('userEmail', JSON.stringify($('#uEmail').val()));


        window.location.replace("../pages/instructions.html");
        // $(":mobile-pagecontainer").pagecontainer("change", "#pgInstructions");

    };

};

// Simple return to last page -->
function goBack() {
    window.history.back();
}
