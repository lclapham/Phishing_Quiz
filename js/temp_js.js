// This function will calculate the results of each question
function calcAnswer(e) {
    let qNum = e +1; //This takes the id of the button adds 1 so you can get the class buttons for the question.
    console.log("this is the value of qNum "+qNum)
    className = 'answers'+qNum;
    console.log("This is the value of className "+className)
    checkboxes = document.getElementsByClassName(className);
    console.log("this is the length "+ checkboxes.length)
    console.log("the classname is "+ className)
    for (let i = 0; i <=checkboxes.length; i++) {
        if (checkboxes[i].checked == true && checkboxes[i].value === answerArr[e][0]) {
            
            correctAnswerArr[e] = checkboxes[i].value
            correctAnswers += 1;
            console.log("This is the answer array "+correctAnswerArr)
            console.log("total answers correct " + correctAnswers)
        } else {
           
            console.log("wrong Answer")

        } document.getElementById('yourScore').innerHTML = correctAnswers;
    }
}