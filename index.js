const token = process.env.token;

const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ".";

const future = [
  "An alien of some sort will be appearing to you shortly.",
  "A closed mouth gathers no feet.",
  "A conclusion is simply the place where you got tired of thinking.",
  "A cynic is only a frustrated optimist.",
  "A foolish man listens to his heart. A wise man listens to fortunes.",
  "You will die alone and poorly dressed.",
  "A fanatic is one who can't change his mind, and won't change the subject.",
  "If you look back, you’ll soon be going that way.",
  "Do not mistake temptation for opportunity.",
  "Flattery will go far tonight.",
  "He who laughs at himself never runs out of things to laugh at.",
  "He who laughs last is laughing at you.",
  "He who throws dirt is losing ground.",
  "The greatest danger could be your stupidity.",
  "The world may be your oyster, but it doesn't mean you'll get its pearl.",
  "The road to riches is paved with homework.",
  "You can always find happiness at work on Friday.",
  "Because of your melodic nature, the moonlight never misses an appointment.",
  "Don’t behave with cold manners.",
  " Don’t forget you are always on our minds.",
  "Fortune not found? Abort, Retry, Ignore.",
  "Never forget a friend. Especially if he owes you.",
  "Never wear your best pants when you go to fight for freedom.",
  "It is a good day to have a good day.",
  "All fortunes are wrong except this one.",
  "Someone will invite you to a Karaoke party.",
  "That wasn’t chicken.",
  "There is no mistake so great as that of being always right.",
  " You love Chinese food.",
  "I am worth a fortune.",
  "No snowflake feels responsible in an avalanche.",
  "Don’t let statistics do a number on you.",
  "You are not illiterate.",
  "May you someday be carbon neutral.",
  "You have rice in your teeth.",
  "Avoid taking unnecessary gambles.",
  " Lucky numbers: 12, 15, 23, 28, 37",
  "Ask your mom instead of a cookie",
  "Hard work pays off in the future.",
  "Laziness pays off now.",
  "If a turtle doesn’t have a shell, is it naked or homeless?",
  "Change is inevitable, except for vending machines."
];
const emoji = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂 ",
  "🤣",
  "😊 ",
  "😇 ",
  "🙂 ",
  "🙃 ",
  "😉 ",
  "😌 ",
  "😍 ",
  "🥰 ",
  "😘 ",
  "😗 ",
  "😙 ",
  "😚 ",
  "😋 ",
  "😛 ",
  "😝 ",
  "😜 ",
  "🤪 ",
  "🤨 ",
  "🧐 ",
  "🤓 ",
  "😎 ",
  "🤩 ",
  "🥳 ",
  "😏 ",
  "😒 ",
  "😞 ",
  "😔",
  "😟 ",
  "😕 ",
  "🙁 ",
  "😣 ",
  "😖 ",
  "😫 ",
  "😩 ",
  "🥺 ",
  "😢 ",
  "😭 ",
  "😤 ",
  "😠 ",
  "😡 ",
  "🤬 ",
  "🤯 ",
  "😳",
  "🥶 ",
  "😱 ",
  "😨 ",
  "😰 ",
  "😥 ",
  "😓 ",
  "🤗 ",
  "🤔 ",
  "🤭 ",
  "🤫 ",
  "🤥 ",
  "😶 ",
  "😐 ",
  "😑 ",
  "😬",
  "😯 ",
  "😦 ",
  "😧 ",
  "😮 ",
  "😲 ",
  "😴 ",
  "🤤 ",
  "😪 ",
  "😵 ",
  "🤐 ",
  "🥴 ",
  "🤢 ",
  "🤮 ",
  "🤧 ",
  "😷 ",
  "🤒 ",
  "🤕 ",
  "🤑 ",
  "🤠 ",
  "😈 ",
  "👿 ",
  "👹 ",
  "👺 ",
  "🤡",
  "👻 ",
  "💀",
  "👽 ",
  "👾 ",
  "🤖 ",
  "🎃 ",
  "😺 ",
  "😸 ",
  "😹 ",
  "😻 ",
  "😼 ",
  "😽 ",
  "🙀 ",
  "😿 ",
  "😾"
];

const riddle = [
  "What has to be broken before you can use it?",
  "I’m tall when I’m young, and I’m short when I’m old. What am I?",
  "What month of the year has 28 days?",
  "What is full of holes but still holds water?",
  "What question can you never answer yes to?",
  "What is always in front of you but can’t be seen?",
  "There’s a one-story house in which everything is yellow. Yellow walls,yellow doors, yellow furniture. What color are the stairs?",
  "What can you break, even if you never pick it up or touch it?",
  "What goes up but never comes down?",
  "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?",
  "What gets wet while drying?",
  "What can you keep after giving to someone?",
  "I shave every day, but my beard stays the same. What am I?",
  "You see a boat filled with people, yet there isn’t a single person on board. How is that possible?",
  "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?",
  "A man dies of old age on his 25 birthday. How is this possible?",
  "I have branches, but no fruit, trunk or leaves. What am I?",
  "What can’t talk but will reply when spoken to?",
  "The more of this there is, the less you see. What is it?",
  "I am the beginning of everything, the end of everywhere. I’m the beginning of eternity, the end of time and space. What am I?",
  "What 4-letter word can be written forward, backward or upside down, and can still be read from left to right?",
  "What is 3/7 chicken, 2/3 cat and 2/4 goat?",
  "What is so fragile that saying its name breaks it?",
  "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
  "Speaking of rivers, a man calls his dog from the opposite side of the river. The dog crosses the river without getting wet, and without using a bridge or boat. How?",
  "What can fill a room but takes up no space?",
  "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?",
  "A word I know, six letters it contains, remove one letter and 12 remains. What is it?",
  "If there are three apples and you take away two, how many apples do you have?"
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

bot.on("ready", () => {
  console.log("this bot is online!");
});

bot.on("message", msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  var args = msg.content.slice(prefix.length).split(/ +/);

  var command = args.shift().toLowerCase();

  switch (command) {
    case "hi":
      msg.reply("Hi Bro");
      break;
    case "future":
      var i = getRndInteger(0, future.length);
      msg.channel.send(future[i]);
      break;
    case "emoji":
      var x = getRndInteger(0, emoji.length);
      msg.channel.send(emoji[x]);
      break;
    case "riddle":
      var y = getRndInteger(0, riddle.length);
      msg.channel.send(riddle[y]);
      break;
    case "do":
      msg.channel.send("What should I do");
      break;
    case "help":
      msg.channel.send(
        "```hi, future, fuck, yousuck, shit, do, emoji, geeth, sithum, riddle```"
      );
      break;
    case "geeth":
      msg.channel.send("https://s7.gifyu.com/images/geeth.jpg");
      break;
    case "sithum":
      msg.channel.send("https://s7.gifyu.com/images/sithum.jpg");
      break;
    case "shit":
      msg.channel.send("Shit what?");
      break;
    case "yousuck":
      msg.channel.send("🖕");
      break;
    case "fuck":
      msg.channel.send("Go fuck yourself!");
      break;
    default:
  }
});

bot.login(token);
