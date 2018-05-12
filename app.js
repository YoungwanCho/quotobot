var Bot = require('slackbots');

var setting = {
    token:'',
    name:'quotebot'
};

var bot = new Bot(setting);

bot.on('start', function() {
// bot.postMessageToChannel('general', 'Hi Channel.');
bot.postMessageToUser('developer119', 'Hi User.');
// bot.postMessageToGroup('tisdoksend', 'Hi private grop.');
});