var Bot = require('slackbots');
const fs = require('fs');

var setting = {
    token: '토큰을 입력하세요',
    name: 'quotebot'
};

var bot = new Bot(setting);

isChatMsg = function (msg) {
    return msg.type === 'message';
};

isFromQuoteBot = function (msg) {
    return msg.username === 'quotebot';
};

isMentioningQuote = function (msg) {
    return msg.text.toLowerCase().indexOf('오늘의 명언') > -1;
};

replyWithRandomQuote = function (bot, oMsg) {
    fs.readFile(__dirname + "/data/" + "wisesaying.json", 'utf8', function (err, data) {
        var wisesayingtable = JSON.parse(data);
        var count = Object.keys(wisesayingtable).length;
        var randomIndex = Math.floor(Math.random() * count);
        var message = wisesayingtable[randomIndex].message + '\n'
            + '- ' + wisesayingtable[randomIndex].name + " -";
        bot.postMessageToUser('developer119', message);
    });
};

bot.on('message', function (msg) {
    console.log(msg);
    if (isChatMsg(msg) &&
        !isFromQuoteBot(msg) &&
        isMentioningQuote(msg)) {
        replyWithRandomQuote(bot, msg);
    }
});