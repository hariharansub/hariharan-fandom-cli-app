import chalk from 'chalk';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var readLineSync = require('readline-sync');
var userName = readLineSync.question("Enter your name : ");
console.log("\n");
console.log(chalk.blue('Welcome '+userName+' to the Lord of the Rings Quiz'));

console.log("-----------------------");

var score=0;

var highScore = {
    name: "Pavan",
    score: "3"
  }

function play(questions){
  for(var i=0;i<questions.length;i++){
    var userAnswer = readLineSync.question(questions[i].question);
    if (userAnswer == questions[i].answer){
      console.log(chalk.greenBright("You are right :)"));
      score++;
      console.log("Your current score is "+score);
    }
    else{
      console.log(chalk.redBright("You are wrong :("));
      console.log("Your current score is "+score);
    }
    console.log("-----------------------");
  }
  return score;
}

var questions = [
  {
    question: "1. How many members make up the fellowship of the ring?\n",
    answer: "9"
  },
  {
    question: "2. Who possesses the ring of power at the start of the trilogy?\n",
    answer: "bilbo"
  },
  {
    question: "3. Who is the king of Rohan ?\n",
    answer: "theoden"
  },{
    question: "4. Where is Saruman’s tower, Orthanc, located?\n",
    answer: "isengard"
  },{
    question: "5. Who finally kills the witch-king?\n",
    answer: "eowyn"
  }
]

console.log("Please enter your answers in small letters !");
console.log("\n");
var finalScore = play(questions);
console.log("\n");
console.log("Your final score is "+finalScore);
if (finalScore >= highScore.score){
  console.log(chalk.yellowBright("Congratulations !!"));
  console.log(chalk.yellowBright("You are the current high scorer in the game"));
  highScore.name=userName;
  highScore.score=finalScore;
  console.log("-----------------------");
}

console.log("Current high score is");
console.log("Name : "+highScore.name);
console.log("Score : "+highScore.score);
console.log("\n");
console.log("Please refresh the screen to restart the quiz !!");