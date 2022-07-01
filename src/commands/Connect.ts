import { BaseCommandInteraction, Client, CommandInteraction, TextChannel, MessageEmbed } from "discord.js";
import { url } from "inspector";
import { Command } from "../types/Command";

export const Connect: Command = {
    name: "connect",
    description: "Returns the connect link to Lootdolfs world!",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {

        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


        let embed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Connect Link')
        .setURL('https://discord.js.org/')

        await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
        });
    }
};
