const OpenJTalk = require('openjtalk');
const fs = require('fs');

const talk = new OpenJTalk();

let old_message = '';
const filePath = './isaax-project.env';
setInterval(() => {
  try {
    fs.statSync(filePath);
  } catch (e) {
    console.log('File not found.')
    console.log(process.env);
    return;
  }
  fs.readFile(filePath, 'utf-8', (err, data) => {
    const match = data.match(/^MESSAGE="(.*)"/);
    const message = match[1];
    if (message !== old_message) {
      talk.talk(message);
      old_message = message;
    }
  });
}, 5000);
