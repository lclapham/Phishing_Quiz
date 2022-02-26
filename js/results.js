// This script calculates the users score using the results in localstorage.
window.onload = (event) => {
    //  Setup localstorage for score
    let results = localStorage.getItem('userFin')


    // Get the users info and post it into the results page
    let userFirst = localStorage.getItem('firstName')
    let userLast = localStorage.getItem('lastName')
    let userEmail = localStorage.getItem('userEmail')


    let userName = userFirst + " " + userLast
    NewUser = userName.replace(/"/g, '');
    NewEmail = userEmail.replace(/"/g, '');
    userName.replace("",)

    // document.getElementById('userResults').innerText = resultPercent 
    document.getElementById('userName').value = NewUser
    document.getElementById('userEmailAddr').value = NewEmail
    document.getElementById('userResults').value = results + "%."

    document.getElementById('uName').innerText = NewUser
    document.getElementById('uEmail').innerText = NewEmail
    document.getElementById('uResults').innerText = results
};

