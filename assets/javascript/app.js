
// Need a few Variables 

  
  

// Need an array to house trivia questions
// Need to have sub array for possible answers and write question and correct answer
var counter = 0;

var triviaQuestions = [

    {
        question: "1) What is the water way that connects the Great Lakes and the Atlantic Ocean?",
        answers: ["St. Lawrence River", "Mississippi River", "Connecticut River", "Snake River","Potomic River"],
        correctAnswer: "St Lawrence River"
    },

    {
        question: "2) What mountain range seperates Europe and Russia?",
        answers: ["The Apls", "Scandinavian Mountains" , "Ural Mountains", "Pyrenees Mountains","Jara Mountains"],
        correctAnswer: "Ural Mountains"
    },

    {
        question: "3) Besides the Great Lakes what lake holds 1/5 of the worlds freshwater?",
        answers: ["Slave Lake ","Lake Victoria", "Lake Baikal ", "Lake Malawi","Lake Tanganyika"],
        correctAnswer: "Lake Baikal"
    },

    {
        question: "4) What is the water way that connects the Great Lakes and the Atlantic Ocean",
        answers: ["St Lawrence River", "answer, answer 3", "answer 4","answer 5"],
        correctAnswer: "St Lawrence River"
    },
      
    {
        question: "5) What is the tallest mountain in the U.S.",
        answers: ["Mt. Denali", "Mt. Whitney", "Mt. Rainier", "Mt. Bear","Mt. Hubbard"],
        correctAnswer: "Mt. Denali" 
    },

    {
        question: "6) What is the most populated city in the world? ",
        answers: ["Delhi", "New York City", "Tokyo", "Mexico City","Chonqing"],
        correctAnswer: "Chonqing"
     },
     
];

console.log(triviaQuestions[0].correctAnswer)

// Game function by pressig button on first screen
$("#button").on("click", function() {
    gamePlay.startGame();
    console.log("Start has Happended")
});
$(document).on("click", function() {
    gamePlay.gameOver();
  });



//Maybe with function 
//or a method with array postion to pull
var gamePlay = {
    counter:30,
    correct: 0,
    incorrect:0,
    timedown: function(){
        gamePlay.counter--; //counter decrimenter
        $("#counter").text(gamePlay.counter);

        if (gamePlay.counter === 0) {
            console.log("time is up");
            //gamePlay.gameOver() to end trivia and timer
            
           
        }
       
   

    },
//Need a way to select questions from array and diplay on page. Maybe a for loop within a for loop for answers(loop 1 questions then loop one answer set and so on )
// need start game function
startGame: function(){
    clock = setInterval(gamePlay.timedown, 1000);

    
    $('.jumbotron').remove();

// The buttons used in example are radio buttons more html manipulation
// Then questions will appear with counter
// could use for loop maybe with html manipulation to display questions and ansers to select
//Better yet use Saterday's examples of creating html tags out of thin air with jquery 

  for (var i = 0; i < triviaQuestions.length; i++) {
      $("#trivia-question").append("<h3>" + triviaQuestions[i].question + "</h3>");
        for (var x = 0; x < triviaQuestions[i].answers.length; x++) {
            var y = $("#trivia-question");
            console.log(y);
            y.append("<input type=\"radio\" name=\"question\" value=\"\" >" + triviaQuestions[i].answers[x] + "</input>");
            

            }
        }
        $("#trivia-answer").append("<button id='done-button'>Done</button>");
    },
    gameOver: function() {
        // The rest goes something like this   *******could not get it to work
       // $("question").on("click", function(){  *******could not get it to work
               //if $(this).val() === triviaQuestion[0].correctAnswer{
                    //gamePlay.correct++;
               //} else {
                    //gamePlay.incorrect++;
               //}
       //}
    

        
      },  
    resultsPage: function() {
        
        clearInterval(clock);
                //******pretty sure below would have worked if above function was working */
        
        y.html('<h2>All Done!</h2>');
        y.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        y.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        y.append('<h3>Unanswered: ' + (triviaQuestions.length - (this.incorrect + this.correct)) + '</h3>');
      }
            
       
    
};








//need to create a way of keeping track of correct answers an incorrect answers
//maybe if else statements to keep track of ansewers and an empty array to push them into 
//need to display this text and that will be end of the game
//Maybe have a resart function if time allows 

