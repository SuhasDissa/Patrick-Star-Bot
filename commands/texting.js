const Discord = require("discord.js");
const Canvas = require('canvas');

module.exports.run = async (bot, msg, args) => {

  if(!args[0]) return;
  
 var text = args.join(" ").split(",");
  
  if(!text[0] && !text[1]) return;
  
  const canvas = Canvas.createCanvas(640, 653);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/ffc5db37-cce9-42ff-bcaf-3034ecbc37fb%2Ftexting.jpg?v=1598520493670');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


	// Select the font size and type from one of the natively available fonts
	ctx.font = '30px iskoola-pota';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(text[0], 62, 85);
  
  ctx.fillText(text[1], 383, 382);
  
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Love.png');

	msg.channel.send(attachment);
}

module.exports.help = {
    name: "text",
    aliases: ["chatting", "chat", "sms"]
} 