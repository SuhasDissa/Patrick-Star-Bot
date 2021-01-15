const Discord = require("discord.js");
const Canvas = require('canvas');

module.exports.run = async (bot, msg, args) => {

  if(!args[0]) return;
  const canvas = Canvas.createCanvas(778, 736);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/ffc5db37-cce9-42ff-bcaf-3034ecbc37fb%2FQuiz-Kid.jpg?v=1598520498159');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

if(args[0].startsWith('http')){
  try{
    const img = await Canvas.loadImage(args[0]);
    ctx.drawImage(img, 413, 465, 100, 100);
  }catch(e){  
 var text = args.join(" ");
    
    ctx.font = '30px iskoola-pota';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(text, 398, 538);
  }
  
}else{
	var text = args.join(" ");
    
    ctx.font = '30px iskoola-pota';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#000000';
	// Actually fill the text with a solid color
	ctx.fillText(text, 398, 538);
}
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Exam.png');

	msg.channel.send(attachment);
  
}

module.exports.help = {
    name: "exam",
    aliases: ["copy", "chit"]
} 