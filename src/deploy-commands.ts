import { REST, Routes } from "discord.js"
import { config } from "./config"
import { commands } from "./commands"

const commandsData = Object.values(commands).map((command) => command.data)

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN)

type DeployCommandsProps = {
    guildId: string
}

/**
 * Deploys or refreshes Discord application (slash) commands for a specific guild.
 *
 * This function updates the set of commands registered with the Discord API for the given guild,
 * using the provided command data. It logs the process and handles any errors that occur during deployment.
 *
 * @param {DeployCommandsProps} props - The properties required to deploy commands.
 * @param {string} props.guildId - The ID of the Discord guild where commands will be deployed.
 * @returns {Promise<void>} A promise that resolves when the deployment is complete.
 */
export async function deployCommands({ guildId }: DeployCommandsProps) {
    try {
        console.log("Started refreshing application (/) commands.")

        await rest.put(
            Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
            {
                body: commandsData,
            }
        )

        console.log("Successfully reloaded application (/) commands.")
    } catch (error) {
        console.error(error)
    }
}