import { BaseCommandInteraction, Client, CommandInteraction } from "discord.js";
import { Command } from "../types/Command";
import { getPlayersOnline, getMaxPlayers} from "../FiveMApi/Status";


export const Status: Command = {
    name: "status",
    description: "Returns a status",
    type: "CHAT_INPUT",
    // options: [
    //     {
    //         name: "content",
    //         description: "type ur content",
    //         type: "STRING",
    //         required: true,
    //         choices: [
    //             {
    //                 name: "Vinzenz",
    //                 value: "Vinzenz"
    //             },
    //             {
    //                 name: "Konstantin",
    //                 value: "Konstantin"
    //             }
    //         ]
    //     }
    // ],
    run: async (client: Client, interaction: BaseCommandInteraction) => {
		await interaction.followUp({
            ephemeral: true,
            content: `Serverstatus: ${await getPlayersOnline()}/${await getMaxPlayers()}`,
        });
    }
};
