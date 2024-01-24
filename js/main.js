 /**
 *  Initialize variables
*/ 
 //message array for prompt messages
 const promptMsg = [
"You will be entering 3 words ... one at a time.\nPlease enter your first word and click OK",
"Please enter your second word and click OK",
"Please enter your third word and click OK"];
console.log(promptMsg[0]);
console.log(promptMsg[1]);
console.log(promptMsg[2]);

 
 
 
 let promptInput = prompt(
 /**
 * This function does not execute until the DOM content is loaded (i.e., "DOMContentLoaded" event occurs). This prevents any code that resides within the function block from prematurely interacting with the DOM before it is fully available.
 
document.addEventListener("DOMContentLoaded", function (event) {
  
  document.getElementById("Button1").addEventListener("click", function () {
    // this code would execute, this code could ...
    num1var = document.getElementById("number1");                // read a value from an object
    resultvar = num1var * 2;                                                                 // use that value in a calculation
    document.getElementById("result").value = resultvar;          //  write a value to an object
   });

    // if some other type of event occurred, e.g., Button2 is clicked ...
  document.getElementById("Button2").addEventListener("click", function () {
    // this code would execute, this code could do different stuff
  });  
  
});
*/