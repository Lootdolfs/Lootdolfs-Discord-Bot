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

export function getPlayers()
{
	return server.getPlayers().then((data) => {
		let result  = [];
		let index = 1;
		for (let player of data) {
		  result.push(`${index++}. ${player.name} | ID ${player.id}\n`);
		}
		return result;
	});
};



