const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Replies with an invite to the server!'),
	async execute(interaction) {
		await interaction.reply('An invite to the server is: discord.gg/HqbvrAx9Pf');
	},
};