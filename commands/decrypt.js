module.exports.run = async (bot, message, args) => {   

    if (args.length < 1) {
        return message.channel.send(
            "Gimme a text you nigge"
        );
    }
    var term= args.join(" ");
try {
var hw = Buffer.from(term, 'base64').toString()
return message.channel.send(hw);
}catch(error){
    console.log(error);
    return message.channel.send("Somethin Went wrong");
}
}

module.exports.help = {
    name: "decrypt",
    aliases: ["decode"]
} 