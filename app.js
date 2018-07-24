const OpenJTalk = require('openjtalk');
const fs = require('fs');

const talk = new OpenJTalk();
const filePath = '/sys/class/thermal/thermal_zone0/temp';
setInterval(() => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    const temp = parseInt(data) / 1000;
    talk.talk(`現在の温度は#{temp}です`);
  });
}, 10000);
