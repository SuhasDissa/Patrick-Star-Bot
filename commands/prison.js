const Discord = require("discord.js");
const Canvas = require('canvas');

module.exports.run = async (bot, msg, args) => {

  if(!args[0]) return;
  
 var text = args.join(" ");

  
  const canvas = Canvas.createCanvas(670, 347);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/ffc5db37-cce9-42ff-bcaf-3034ecbc37fb%2Fi%20killed%20a%20man.png?v=1598520498159');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Select the font size and type from one of the natively available fonts
	ctx.font = '15px iskoola-pota';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(text, 269, 286);
  
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Jail.png');

	msg.channel.send(attachment);
  
}

module.exports.help = {
    name: "jail",
    aliases: ["prison"]
} 