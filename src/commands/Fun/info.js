const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Returns info based on input!')
        .addSubcommand(subcommand => 
            subcommand
            .setName("user")
            .setDescription("Gets information of a user mentioned")
            .addUserOption(option => option.setName("target").setDescription("The user mentioned.")))
            .addSubcommand(subcommand =>
                subcommand
                .setName("server")
                .setDescription("Gets information of the server")),
	async execute(interaction, client) {
		if (interaction.options.getSubcommand() === "user") {
            const user = interaction.options.getUser("target");
            if (user){
                const file = new MessageAttachment("./src/images/Lidl.png")
                const userEmbed = new MessageEmbed()
                .setTitle(`${user.username}'s Information`)
                .setDescription(`Command was ran by ${interaction.user.username} (${interaction.user.id})`)
                .addFields(
                    { name: `Username:`, value: `Username is: ${user.username}`, inline: true},
                    { name: `\u200B`, value: `\u200B`, inline: true},
                    { name: `Tag:`, value: `Tag is: #${user.discriminator}`, inline: true},
                    { name: `\u200B`, value: `\u200B`, inline: true},
                    { name: `ID:`, value: `ID is: ${user.id}`, inline: true}
                )
                .setThumbnail("attachment://Lidl.png")
                .setTimestamp()
                await interaction.reply({ embeds: [userEmbed], files: [file]})
            } else {
                const file1 = new MessageAttachment("./src/images/Lidl.png")
                const selfEmbed = new MessageEmbed()
                .setTitle(`${interaction.user.username}'s Information`)
                .setDescription(`Command was ran by you!`)
                .addFields(
                    { name: `Your Username:`, value: `Your Username is: ${interaction.user.username}`, inline: true},
                    { name: `\u200B`, value: `\u200B`, inline: true},
                    { name: `Your Tag:`, value: `Your Tag is: #${interaction.user.discriminator}`, inline: true},
                    { name: `\u200B`, value: `\u200B`, inline: true},
                    { name: `Your ID:`, value: `Your ID is: ${interaction.user.id}`, inline: true},
                )
                .setThumbnail("attachment://Lidl.png")
                .setTimestamp()
                await interaction.reply({ embeds: [selfEmbed], files: [file1]})
            }
        } else if (interaction.options.getSubcommand() === "server") {
            const file2 = new MessageAttachment("./src/images/Lidl.png")
                const serverEmbed = new MessageEmbed()
                .setTitle(`${interaction.guild.name} Server Information`)
                .setDescription(`Command was ran by ${interaction.user.username} (${interaction.user.id})`)
                .addFields(
                    { name: `Server Name:`, value: `The Server Name is: ${interaction.guild.name}`, inline: true},
                    { name: `\u200B`, value: `\u200B`, inline: true},
                    { name: `Total Members:`, value: `The total member count is: ${interaction.guild.memberCount}`, inline: true},
                )
                .setThumbnail("attachment://Lidl.png")
                .setTimestamp()
            await interaction.reply({ embeds: [serverEmbed], files: [file2]});
        }
	},
};