document.getElementById("form1").onsubmit=function() {
    variable = parseInt(document.querySelector('input[name = "football"]:checked').value);
    sub = parseInt(document.querySelector('input[name = "city"]:checked').value);
    con = parseInt(document.querySelector('input[name = "music"]:checked').value);
    ifstate = parseInt(document.querySelector('input[name = "history"]:checked').value);
    
    
    result = variable + sub + con + ifstate;
    
 document.getElementById("grade").innerHTML = result;

 if (result == 0) {result2 = "I dont think you belong here :D"};
 if (result == 25) {result2 = "You need to spend more time with the locals"};
 if (result == 50) {result2 = "I think you could do better, spend more time in local pubs"};
 if (result == 75) {result2 = "So close. Try again"};
 if (result == 100) {result2 = "Excellent! You're an honorary manc"};
 document.getElementById("grade2").innerHTML = result2;
 
     return false;
         }