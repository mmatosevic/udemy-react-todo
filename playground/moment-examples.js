var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1509270302;
console.log('Current moment', moment.unix(timestamp).format('DD.MM.YYYY HH:mm:ss'));