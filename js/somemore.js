//function to check if the word entered in input field is same as the reverse of that word
function Palindrome() {
   var revStr = ""; //creating a string
   var str = document.getElementById("str").value;// getting input value from html
   var i = str.length; //measuring the length of  the str and assigning it to the variable i
   
   for(var j=i; j>=0; j--) {//condition to reverse the entered word
      
      revStr = revStr + str.charAt(j); //selects the character at j.
   
   }

   if (str === "") {

      alert("Please, input some strings....");

   } else if(str === revStr) {//checks if the input value is equal to the created reverse string.
   
      alert('"'+ str + '"' + " " + " is a Palindrome.");
   
   } else {
   
      alert('"'+ str + '"' + " " + " is not a Palindrome.");
   
   }

}
