const Discord = require("discord.js");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return;
  
 var text = args.join(" ").split(",");
  
  if(!text[0] && !text[1]) return;
  
  const canvas = Canvas.createCanvas(2007, 1515);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/ffc5db37-cce9-42ff-bcaf-3034ecbc37fb%2FDSCN7589.JPG?v=1598516085249');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


	// Select the font size and type from one of the natively available fonts
	ctx.font = '100px iskoola-pota';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(text[0], 997, 309);
  
  ctx.fillText(text[1], 397, 1209);
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Fucking-poster.png');

	message.channel.send(attachment);
}

module.exports.help = {
    name: "fuck",
    aliases: ["fuk", "fk"]
} 