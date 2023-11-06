
//PALANIDROME EXCERCISE SECTION

//User Input
const userWord = prompt(" This is Palandrome Game: Please write a Word");

//Funtion to reverse the string by using split, reverse and join properties of the array
function reverseWord(word) {

    const splitWord = word.split(""); // this property actually split the word into array of letters by adding coma,

    const reverseSplittedWord = splitWord.reverse(); // this poperty reverse the letters array

    const joinReversedSplittedWord = reverseSplittedWord.join(""); //this prpoerty join the letters array into a word

    return joinReversedSplittedWord; //so we need this one as the output
}
 

//Checking if the the user inserted word is a Palindorem or not
if(userWord == "" || userWord == null){

    alert("Please insert a Word")
}

else if(userWord == reverseWord(userWord)){
    
    document.getElementById("palindrome").innerHTML = `"${userWord}", You got it!!!` 
}
else{
    document.getElementById("palindrome").innerHTML = `"${userWord}", This is not a Palindrome word, Pleae try again!`
}

//***************************************** */

//ODD EVEN GUESS GAME SECTION

const options = document.getElementById("evenOdd"); 
const userInput = document.getElementById("user_input");
const yourNumber = document.querySelector(".your_number");
const computerNumber = document.querySelector(".computer_number");
const btnEnter = document.getElementById("btn");
const winner = document.getElementById("winner");
winner.style.fontSize = "2rem";
winner.style.color = "Green";

//adding a button to submit the values inserted by the user and making sure these are in numbers

btnEnter.addEventListener("click", function () {
    const evenOdd = options.value;
    const userNumber = parseInt(userInput.value);

    let CarryOn = true; // Boolean flag to control the flow

    //if user do not enter a number, or enters a value less the 1 or more than 5 then stop the excecution and create an alert
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        alert("Please insert values from 1 to 5");
        CarryOn = false; // Set the flag to false to stop the implimentation
    }
    // if the inserted values are valid then carry on and add the inserted values in html
    if (CarryOn) {
        yourNumber.innerHTML = `Your Number: ${userNumber}`;

        // crated a ranodm number with a funtion
        function computerNum(randomNum) {
            return Math.floor(Math.random() * 5) + 1;
        }
        // calling the funtion inside a variable and adding that in html
        const randomNumber = computerNum();
        computerNumber.innerHTML = `Computer's Number: ${randomNumber}`;

        //if the inserted values are valid then carry on and sum up the inserted number and random number
        if (CarryOn) {
            const total = userNumber + randomNumber;
            let result = ""; // creating a result variable to be used inside the condition so that if the total is divisable by 2 then call it Even, otherwise Odd

            if (total % 2 === 0) {
                result = "Even";
            } else {
                result = "Odd";
            }

        // if the total is divisable by 2 AND user selected Even OR total is not divisable by 2 and user selected ODD then User WON, otherwise User LOST
            if ((total % 2 == 0 && evenOdd == "even") || (total % 2 !== 0 && evenOdd == "odd")) {
                winner.innerHTML = `You WON. Total is ${result}`;
            } else {
                winner.innerHTML = `You LOST!!!. Total is ${result}`;
            }
        } else {
            // Clear output elements if the flag is false
            yourNumber.innerHTML = "";
            computerNumber.innerHTML = "";
            winner.innerHTML = "";
        }
    }
});




