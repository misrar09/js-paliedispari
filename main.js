
//User Input
const userInput = prompt("Please write a Word");

//Funtion to reverse the string by using split, reverse and join properties of the array
function reverseWord(word) {

    const splitWord = word.split(""); // this property actually split the word into array of letters by adding ,

    const reverseSplittedWord = splitWord.reverse(); // this poperty reverse the letters array

    const joinReversedSplittedWord = reverseSplittedWord.join(""); //this prpoerty join the letters array into a word

    return joinReversedSplittedWord; //so we need this one as the output
}
 

//Checking if the the user inserted word is a Palindorem or not
if(userInput == "" || userInput == null){

    alert("Please insert a Word")
}

else if(userInput == reverseWord(userInput)){
    
    document.getElementById("palindrome").innerHTML = `${userInput}, "This is a Palindrome Word"` 
}
else{
    document.getElementById("palindrome").innerHTML = `${userInput}, "This is not a Palindrome Word, Pleae try again"`
}

