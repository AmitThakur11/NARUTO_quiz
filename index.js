var read = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var naruto = 'NARUTO';
option = 0;

console.log(chalk.white.bgRed.bold(' _-_-_-_-_-_-_-_-_-_-_-_-_-_-_- Welcome to the NARUTO QUIZ_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n'));

var username = read.question(chalk.white.bgYellow.bold("What's your name buddy:  "));
console.log(chalk.white.bgGreen.bold('\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-'));

console.log(chalk.black.bgGreen.bold('\nHappy to see you ' + chalk.bold(username)));
console.log(
  chalk.black.bgYellow.bold(
    '\nlets see how big fan of ' + chalk.black.bold(naruto) + ' you are***\n'
  )
);
console.log(chalk.bold.bold.black.bgGreen("\nFor right answer : +10 marks"));
console.log(chalk.bold.bold.white.bgRed("For wrong answer : -5 marks\n"));
//------------------------------------------------FUNCTION-------------------------------------------------------------

//----------------------------------------------FUNCTION FOR CHECKING USER ANSWER--------------------------------------
function play(questions, answers) {
  var userAnswer = read.question(chalk.bold(questions));


  if (answers === userAnswer) {
    console.log(chalk.black.bgGreen.bold('\nRight answer'));
    score = score + 10;
  } else {
    console.log(chalk.black.bgRed.bold('\nwrong answer'));
    console.log(
      chalk.black.bgGreen.bold('Right answer is ' + chalk.yellow.bold(answers) + ' )'
      ));
    score = score - 5;


  }
  console.log(chalk.white.bgBlue.bold('\nCurrent score is : ' + chalk.bold(score)));
  console.log(chalk.yellow.bold('\n____________________________________________\n'));
}

//---------------------------------------------------------------------------------------------------------------------


//--------------------------------------CALCULATING STATUS OF PARTICIPANT----------------------------------------------


function compare(score) {
  if (score === 100) {
    stat = "S-Class Ninja";
    status(stat);

  }
  if (score < 100 && score >= 80) {
    stat = "Jounin";
    status(stat);

  }
  if (score < 80 && score >= 50) {
    stat = "Chunin";
    status(stat);

  }
  if (score <= 40 && score > 0) {
    stat = "Genin";
    status(stat);

  }
  if (score <= 0) {
    stat = "Noob";
    status(stat);
  }
}


function status(stat) {
  console.log(chalk.white.bgMagenta.bold("STATUS : You are a " + stat + "\n\n"));
}
//---------------------------------------------------------------------------------------------------------------------



//--------------------------------------FUNCTION FOR CHECKING THE HIGH SCORE------------------------------------------

/*function compareHigh(score,n,h){
  if(h < score){
    console.log(chalk.cyan.bold("\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n"));
    console.log(chalk.black.bgGreen.bold("CONGRATULATION BUDDY!\n\nYou beat "+n+" and now you are the New Champion with "+score+" score "));
    console.log(chalk.cyan.bold("\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-"));
  }
  else{
    console.log(chalk.cyan.bold("\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-"));
    console.log(chalk.white.bgRed.bold("High scorer is " +n+" with "+ h +" score.Best of luck for next time. "));
    console.log(chalk.cyan.bold("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-"));
  }
}*/
//---------------------------------------------------------------------------------------------------------------------  

//----------------------------------------------QUESTION BANK----------------------------------------------------------
var questions = [
  { question: 'Q1).First sensai of Naruto ?\n\n(a) iruka            (b) kakashi\n(c) tsunade          (d) jiraya\n\nYour Answer :', answer: 'a' },
  { question: 'Q2).Who is the 4th hokage ?\n\n(a) Tsunade            (b) Minato \n(c) jiraya             (d) hashirama senju\n\nYour Answer :', answer: 'b' },
  { question: 'Q3).Who is wife of Naruto ?\n\n(a) Sakura           (b) Hinata \n(c) Ino              (d) Tamaari\n\nYour Answer :', answer: 'b' },
  {
    question: 'Q4).How many tails kurama have?\n\n(a) 6                (b) 4      \n(c) 3                (d) 9     \nYour Answer :', answer: 'd'
  },
  { question: 'Q5).who is 7th hokage ?\n\n(a) Hashirama        (b) Orichimaru\n(c) Tsunade          (d) Naruto\n\nYour Answer :', answer: 'd' },
  {
    question: 'Q6).how many childrens naruto have ?\n\n(a) 1            (b) None\n(c) 2            (d) 3\n\nYour Answer :', answer: 'c'
  },
  { question: 'Q7).First friend of gara ?\n\n(a) naruto           (b) Kakashi\n(c) Shikimaru        (d) Sasuke\n\nYour Answer :', answer: 'a' },
  {
    question: 'Q8).In which team no naruto was assigned ?\n\n(a) Team 11            (b) Team 3\n(c) Team 7             (d) Team 5\n\nYour Answer :', answer: 'c'
  },
  { question: 'Q9).Who is the mother of sage of 6 path ?\n\n(a) Hinata            (b) Kaguya\n(c) Tsunade           (d) Karunai\n\nYour Answer :', answer: 'b' },
  { question: 'Q10).Sasuke is from which clan ?\n\n(a) Uzumaki            (b) Uchiha\n(c) Hatake             (d) Hyuga\n\nYour Answer :', answer: 'b' }
];
//_-------------------------------------------------------------------------------------------------------------------


var highScores = [{ name: "Jai Kapoor", score: '100/100 ' }, { name: "Karan Rawat", score: '100/100' }];

for (var i = 0; i < questions.length; i++) {
  var curQuestion = questions[i];
  play(curQuestion.question, curQuestion.answer);
}
console.log(chalk.black.bgRed("Here's your final score  : " + chalk.bold(score)));

compare(score);
/*compareHigh(score,highScores[0].name ,highScores[0].score);
*/
console.log(chalk.black.bgGreen.bold.bold(" LEADER BOARD "))

for (var x = 0; x < highScores.length; x++) {
  var h = x + 1;
  console.log(chalk.white.bgRed.bold('\n' + h + ". " + highScores[x].name + " === " + highScores[x].score + ""));
}

console.log(chalk.black.bgGreen.bold("\n\nNOTE :  IF YOU HAVE BEAT THE HIGH SCORE PLEASE SEND THE SCREENSHOT.  \nMy email : amithakur081@gmail.com "));