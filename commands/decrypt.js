const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'okboomer';
const iv = crypto.randomBytes(16);

module.exports.run = async (bot, message, args) => {   

    if (args.length < 1) {
        return msg.channel.send(
            "Gimme a text you nigge"
        );
    }
    var term= args.join(" ");

function decrypt(text) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}

try {
var hw = decrypt(term);
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