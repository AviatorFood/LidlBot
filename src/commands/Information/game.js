const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Replies with an link to the game!'),
	async execute(interaction) {
		await interaction.reply('Game link: https://www.roblox.com/games/8316883520/LIDL');
	},
};