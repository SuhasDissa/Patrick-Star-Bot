const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || bot.users.get(args[0]);
    
    if(!user) return message.reply("Tell me a user you dumb!");

    if(!args[1]) return message.reply("Are you trying to pay nothing?");
    if(!money[message.author.id]) return message.reply("Oh poor friend. you dont have money!");

    if(parseInt(args[1]) > money[message.author.id].money) return message.reply("You dont have that much money");
    if(parseInt(args[1]) < 1) return message.reply("You suck at math! LOL!");

if(!money[user.id]){
	money[user.id] ={
		name: bot.users.get(user.id).tag,
		money: parseInt(args[1])
    }
    
    money[message.author.id].money -= parseInt(args[1]);

    fs.writeFile("../money.json", JSON.stringify(money), (error) =>{
        if(error) console.log(error);
        });
}else{
    money[user.id].money += parseInt(args[1]);

    money[message.author.id].money -= parseInt(args[1]);

    fs.writeFile("../money.json", JSON.stringify(money), (error) =>{
        if(error) console.log(error);
        });
}

return message.channel.send(`${message.author.username} payed ${args[1]} coins to ${bot.users.get(user.id).username}.`);
	
}

module.exports.help = {
	name: "gift",
	aliases: ["pay", "donate", "give"]
} 