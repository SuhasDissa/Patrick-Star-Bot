const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = '787ff81611b84c9ab2a55aa45e3c1d3e824e3ff583b0cb75c20b8947a4130d16';
const iv = key.substr(0, 16);

module.exports.run = async (bot, message, args) => {   

    if (args.length < 1) {
        return msg.channel.send(
            "Gimme a text you nigge"
        );
    }
    var term= args.join(" ");

function decrypt(text) {
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key.substr(0, 32)), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
}

try {
var hw = decrypt(String(term));
console.log(term+","+hw);
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