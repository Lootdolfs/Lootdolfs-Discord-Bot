import { BaseCommandInteraction, Client, CommandInteraction, MessageAttachment , TextChannel } from "discord.js";
import { Command } from "../types/Command";
import canvas from "canvas"
import { request } from 'undici';
import { readFile } from "fs/promises";

export const Canvas: Command = {
    name: "canvas",
    description: "Returns a canvas",
    type: "CHAT_INPUT",

    run: async (client: Client, interaction: BaseCommandInteraction) => 
	{
		const channel = client.channels.cache.get(interaction.channelId) as TextChannel;

 		// Create a 700x250 pixel canvas and get its context
		// The context will be used to modify the canvas
		const newCanvas = canvas.createCanvas(850, 250);
		const context = newCanvas.getContext('2d');

		const backgroundFile = await readFile('./src/background.png');
		//const backgroundFile = await canvas.loadImage(path.join(__dirname, '../background.jpg'));

		const background = new canvas.Image();
		background.src = backgroundFile;

		// This uses the canvas dimensions to stretch the image onto the entire canvas
		context.drawImage(background, 0, 0, newCanvas.width, newCanvas.height);

		//contect config
		context.strokeRect(0, 0, newCanvas.width, newCanvas.height);
		
		// Select the font size and type from one of the natively available fonts
		context.font = '60px sans-serif';

		// Select the style that will be used to fill the text in
		context.fillStyle = '#ffffff';

		// Actually fill the text with a solid color
		context.fillText(interaction.member.user.username, newCanvas.width / 2.5, newCanvas.height / 1.8);

		
		context.beginPath();
		context.arc(125, 125, 100, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();
		const { body } = await request(interaction.user.displayAvatarURL({ format: 'jpg' }));
		const avatar = new canvas.Image();
		avatar.src = Buffer.from(await body.arrayBuffer());
		context.drawImage(avatar,25, 25, 200, 200);



		// Use the helpful Attachment class structure to process the file for you
		const attachment = new MessageAttachment(newCanvas.toBuffer('image/png'), 'profile-image.png');

		await interaction.followUp({content: `sim`})
		await channel.send({
			content: `<@${interaction.user.id}>`,
			files: [attachment],
		})
		
	}
};

