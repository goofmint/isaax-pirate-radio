const OpenJTalk = require('openjtalk');
const fs = require('fs');

const talk = new OpenJTalk();

talk.talk(process.env.MESSAGE);
