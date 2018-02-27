const Discord = require('discord.js')
const bot = new Discord.Client();
const p = "oct!";
const c = "0xFF0000";

bot.on('ready', () => {
	console.log("Ready!");
	bot.user.setPresence({ status: 'online', game: { name: 'oct!help' } });
});
bot.on('guildDelete', guild => {
	console.log('I have left ${guild.name} at ${new Date()}');
}); 
bot.on('guildMemberAdd', member => {
	let guild = member.guild;
	const embed = new Discord.RichEmbed()
		.setColor(c)
		.setTitle("Welcome!")
		.setDescription('**Welcome <@${member.user.id}>, please enjoy your stay!**');
	guild.mainChannel.send(embed);
}); 
bot.on('guildMemberRemove', member => {
	let guild = member.guild;
	const embed = new Discord.RichEmbed()
		.setColor(c)
		.setTitle("Bye...")
		.setDescription('**Bye <@${member.user.id}>, please come again...**');
	guild.mainChannel.send(embed);
}); 
bot.on('guildCreate', guild => {
	console.log('I have joined ${guild.name} at ${new Date()}');
});

bot.on('message', (msg) => {
	if (msg.content === (p + "help")) {
		const embed1 = new Discord.RichEmbed()
			.setColor(c)
			.setTitle("Help")
			.setDescription(`**Starve.io:**\nStarve Leaderboard - Starve top 5 best people on the server\n\n**Miscellaneous:**\nHelp - Shows you commands`);
		const embed2 = new Discord.RichEmbed()
			.setColor(c)
			.setTitle("Help")
			.setDescription("**" + msg.author + ", Please check your DMs!**");
		msg.author.send(embed1);
		msg.channel.send(embed2);
	} else if (msg.content === (p + "starve leaderboard")) {
		const embed = new Discord.RichEmbed()
			.setColor(c)
			.setTitle("Starve Leaderboard")
			.setDescription(`:crown:**1st**, **Dirty South** with **1209k**:crown:\n**2nd**, **TrickZ** with **321k**\n**3rd**, **null** with **null**\n**4th**, **null** with **null**\n**5th**, **null** with **null**`);
		msg.channel.send(embed);
	}
});

bot.login(process.env.BOT_TOKEN);
