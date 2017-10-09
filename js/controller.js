$(document).ready(function () {

        var questionNumber =0;
        var questionBank =new Array(); 
        var stage ="#game1";
        var stage2 = new Object;
        var questionLock = false;
        var numberOfQuestions; 
        var score = 0
});

$.getJSON('activity.json', function(data) {
    for(i=0; i<data.quizlist.length; i++) {
        questionBank[i] = new Array; 
        questionBank[i][0] = data.quizlist[i].question; 
        questionBank[i][1] = data.quizlist[i].option1; 
        questionBank[i][2] = data.quizlist[i].option2; 
        questionBank[i][3] = data.quizlist[i].option3; 
    }
    numberOfQuestions = questionBank.length; 
    alert(questionBank); 
}); 