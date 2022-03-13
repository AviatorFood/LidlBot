const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Replies with all the commands!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [commandEmbed]});
	},
};

                const commandEmbed = new MessageEmbed()
                .setTitle(`Commands`)
                .setDescription(`Please see all of the commands below.`)
                .addFields(
                    { name: `\u200b`, value: `info`},
                    { name: `\u200b`, value: `ping`},
                    { name: `\u200b`, value: `commands`},
                    { name: `\u200b`, value: `invite`},
                    { name: `\u200b`, value: `group`},
                    { name: `\u200b`, value: `game`},
                )
                .setTimestamp()