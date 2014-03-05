var fs = require('fs');

var answersFile = fs.readFileSync('answers/answers.json', 'utf8'),
    procAnswers = JSON.parse(answersFile);

console.log("Magic Eightball loaded");

function magicEight( ziggy ) {
  ziggy.on( 'message', function( user,channel,message ) {
    var command = message.split( " " ),
        randomSeed = Math.floor(Math.random() * procAnswers.answers.length);

  if (command[0].split( '' )[0] !== '!') {
        return;
      }

      if (command[1] !== undefined 
        && (command[0] === "!magiceightball" || command[0] === "!meb")
      ) {
        ziggy.say( channel,"Magic 8-ball says: " + procAnswers.answers[randomSeed] );
      }
  })
}


module.exports = magicEight;
