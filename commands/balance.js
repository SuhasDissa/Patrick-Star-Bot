const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, args) => {

if (args[0]){
	var user = message.author;
} else {
	var user = message.mentions.users.first() || bot.users.get(args[0]);
}

if(!money[user.id]){
	money[user.id] ={
		name: bot.users.get(user.id).tag,
		money: 0
	}
	fs.writeFile("../money.json", JSON.stringify(money), (error) =>{
	if(error) console.log(error);
	});
}

	return message.channel.send(`${bot.users.get(user.id).username} has ${money[user.id].money} coins.`);
	
}

module.exports.help = {
	name: "balance",
	aliases: ["bal", "money"]
} 