const Discord = require("discord.js");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return;
  
 var text = args.join(" ").split(",");
  
  if(!text[0] && !text[1]) return;
  
  const canvas = Canvas.createCanvas(150, 150);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/ffc5db37-cce9-42ff-bcaf-3034ecbc37fb%2Fgood%20and%20bad.jpg?v=1598520492351');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


	// Select the font size and type from one of the natively available fonts
	ctx.font = '15px iskoola-pota';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(text[0], 81, 26);
  
  ctx.fillText(text[1], 81, 105);
  
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'hate.png');

	message.channel.send(attachment);
}

module.exports.help = {
    name: "worse",
    aliases: ["bad", "hate"]
} 