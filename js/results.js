// This script calculates the users score using the results in localstorage.
window.onload = (event) => {
    let results = localStorage.getItem('userRepo')
    let resultPercent = 0
    for (let i = 0; i <= results.length; i++) {
        if (results[i] === 'c') {
            resultPercent += 10;
        }
    }

    // Get the users info and post it into the results page
    let userFirst = localStorage.getItem('firstname')
    let userLast = localStorage.getItem('lastName')
    let userEmail = localStorage.getItem('email')

    // document.getElementById('userResults').value = "You Scored a " + resultPercent + "%"
    document.getElementById('userResults').value = resultPercent 
};
// test 123
