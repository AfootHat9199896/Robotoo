module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(client, interaction) {
		if (!interaction.isCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
		await command.execute(interaction);
		} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};