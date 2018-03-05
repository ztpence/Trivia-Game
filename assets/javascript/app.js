
// Need a few Variables 



// Need an array to house trivia questions
// Need to have sub array for possible answers and write question and correct answer

var counter = 0;
var triviaQuestions = [

    {
        question1: "1) What is the water way that connects the Great Lakes and the Atlantic Ocean?",
        answers: ["St Lawrence River", "Mississippi River", "Connectucut River", "Snake River","Potomic River"],
        correctAnswer: "St Lawrence River"
    },

    {
        question2: "2) What mountain range seperates Europe and Russia?",
        answers: ["The Apls", "Scandinavian Mountains" , "Ural Mountains", "Pyrenees Mountains","Jara Mountains"],
        correctAnswer: "Ural Mountains"
    },

    {
        question3: "3) Besides the Great Lakes what lake holds 1/5 of the worlds freshwater?",
        answers: ["Slave Lake ","Lake Victoria", "Lake Baikal ", "Lake Malawi","Lake Tanganyika"],
        correctAnswer: "Lake Baikal"
    },

    {
        question4: "4) What is the water way that connects the Great Lakes and the Atlantic Ocean",
        answers: ["St Lawrence River", "answer, answer 3", "answer 4","answer 5"],
        correctAnswer: "St Lawrence River"
    },
      
    {
        question5: "5) What is the tallest mountain in the U.S.",
        answers: ["Mt. Denali", "Mt. Whitney", "Mt. Rainier", "Mt. Bear","Mt. Hubbard"],
        correctAnswer: "Mt. Denali"
    },

    {
        question6: "6) What is the most populated city in the world? ",
        answers: ["Delhi", "New York City", "Tokyo", "Mexico City","Chonqing"],
        correctAnswer: "Chonqing"
     },
     
]

console.log(triviaQuestions)
//Need a way to select questions from array and diplay on page. Maybe a for loop with function 
//or a method with array postion to pull


// Game function by pressig button on first screen
// Then questions will apper with counter
// could use for loop maybe with html manipulation

//need to create a way of keeping track of correct answers an incorrect answers
//maybe if else statements to keep track of ansowers and an empty array to push them into 
//need to display this text and that will be end of the game
//Maybe have a resart function if time allows 

