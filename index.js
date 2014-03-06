var fs = require('fs'),
    procAnswers = require('./answers/answers.json');

function magicEight( ziggy ) {
  ziggy.on( 'message', function( user,channel,message ) {
    var command = message.split( " " );
    if (command[0].split( '' )[0] !== '!') {
        return;
    }
    var randomSeed = Math.floor(Math.random() * procAnswers.answers.length)

    if (command[1] && (command[0] === "!magiceightball" || command[0] === "!8ball")) {
      ziggy.say( channel,"Magic 8-ball says: " + procAnswers.answers[randomSeed] );
    }
  })
}

module.exports = magicEight;
