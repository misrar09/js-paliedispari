
//PALANIDROME EXCERCISE SECTION

//User Input
const userWord = prompt(" This is Palandrome Game: Please write a Word");

//Funtion to reverse the string by using split, reverse and join properties of the array
function reverseWord(word) {

    const splitWord = word.split(""); // this property actually split the word into array of letters by adding ,

    const reverseSplittedWord = splitWord.reverse(); // this poperty reverse the letters array

    const joinReversedSplittedWord = reverseSplittedWord.join(""); //this prpoerty join the letters array into a word

    return joinReversedSplittedWord; //so we need this one as the output
}
 

//Checking if the the user inserted word is a Palindorem or not
if(userWord == "" || userWord == null){

    alert("Please insert a Word")
}

else if(userWord == reverseWord(userWord)){
    
    document.getElementById("palindrome").innerHTML = `"${userWord}", This is a Palindrome Word` 
}
else{
    document.getElementById("palindrome").innerHTML = `"${userWord}", This is not a Palindrome word, Pleae try again!`
}

//***************************************** */



const options = document.getElementById("evenOdd"); // Correct the ID for the select element
const userInput = document.getElementById("user_input");
const yourNumber = document.querySelector(".your_number");
const computerNumber = document.querySelector(".computer_number");
const btnEnter = document.getElementById("btn");
const winner = document.getElementById("winner");
winner.style.fontSize = "2rem";
winner.style.color = "Green";

btnEnter.addEventListener("click", function () {
    const evenOdd = options.value;
    const userNumber = parseInt(userInput.value);
    let canContinue = true; // Boolean flag to control the flow

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("Please insert values from 1 to 5");
        canContinue = false; // Set the flag to false to stop execution
    }

    if (canContinue) {
        yourNumber.innerHTML = `Your Number: ${userNumber}`;

        function computerNum(randomNum) {
            return Math.floor(Math.random() * 5) + 1;
        }

        const randomNumber = computerNum();
        computerNumber.innerHTML = `Computer's Number: ${randomNumber}`;

        if (canContinue) {
            const total = userNumber + randomNumber;
            let result = "";

            if (total % 2 === 0) {
                result = "Even";
            } else {
                result = "Odd";
            }

            if ((total % 2 === 0 && evenOdd === "even") || (total % 2 !== 0 && evenOdd === "odd")) {
                winner.innerHTML = `You Won. Total is ${result}`;
            } else {
                winner.innerHTML = `You Lost!!!. Total is ${result}`;
            }
        } else {
            // Clear output elements if the flag is false
            yourNumber.innerHTML = "";
            computerNumber.innerHTML = "";
            winner.innerHTML = "";
        }
    }
});




