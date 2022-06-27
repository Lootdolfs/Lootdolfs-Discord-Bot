const fivem = require("discord-fivem-api");
const server = new fivem.DiscordFivemApi("185.94.29.134:30120");

export function getPlayersOnline()
{
	return server.getPlayersOnline()
	.then((res = "keine Spieler Online") => {
		return res;
	})
};

export function getMaxPlayers()
{
	return server.getMaxPlayers()
	.then((res) => {
		return res;
	});
};
