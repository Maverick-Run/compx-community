/**
 * Initializes and configures the Discord bot client.
 * 
 * - Imports required modules and configuration.
 * - Sets up the Discord client with necessary intents.
 * - Handles the 'ready' event to confirm the bot is online.
 * - Deploys slash commands when the bot joins a new guild.
 * - Listens for interaction events and executes corresponding commands.
 * - Authenticates the client using the provided Discord token.
 *
 * @module
 */
import { Client } from "discord.js"
import { config } from "./config"
import { commands } from "./commands"
import { deployCommands } from "./deploy-commands"

export const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
})

/**
 * Initializes the Discord bot client and sets up event listeners.
 */
client.once("ready", () => {
    console.log("Discord bot is ready! 🤖")
})

/**
 * Deploys application commands when the bot joins a new guild.
 * @param {Guild} guild - The guild object representing the new guild the bot has joined.
 */
client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id })
})

/**
 * Handles interaction events and executes the corresponding command.
 *
 * @param {Interaction} interaction - The interaction object representing the command invocation.
 */
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }
    const { commandName } = interaction
    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction)
    }
})

client.login(config.DISCORD_TOKEN)