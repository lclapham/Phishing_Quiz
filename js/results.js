// This script calculates the users score using the results in localstorage.
window.onload = (event) => {
    let results = localStorage.getItem('userRepo')
    let resultPercent = 0
    for (let i = 0; i <= results.length; i++) {
        if (results[i] === 'c') {
            resultPercent += 10;
        }
    }
    document.getElementById('userResults').innertext = "You Scored a " + resultPercent + "%"
};
// test 123
