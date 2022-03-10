module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'Lidl™ Roblox', type: 'LISTENING'}], status: 'dnd' });
	},
};