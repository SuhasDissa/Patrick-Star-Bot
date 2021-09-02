const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = '787ff81611b84c9ab2a55aa45e3c1d3e824e3ff583b0cb75c20b8947a4130d16';
const iv = crypto.randomBytes(16);

module.exports.run = async (bot, message, args) => {   

    if (args.length < 1) {
        return msg.channel.send(
            "Gimme a text you nigge"
        );
    }
    var term= args.join(" ");

function encrypt(text) {
 let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key.substr(0, 32)), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

try {
var hw = encrypt(term);
return message.channel.send(hw);
}catch(error){
    console.log(error);
    return message.channel.send("Somethin Went wrong");
}
}

module.exports.help = {
    name: "encrypt",
    aliases: ["encode"]
} 