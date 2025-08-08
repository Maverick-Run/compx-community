/**
 * Defines the "ping" slash command for Discord, which replies with "Pong!" when executed.
 *
 * @param interaction - The interaction object representing the command invocation.
 * @returns A promise that resolves when the reply has been sent.
 */
import { CommandInteraction, SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("Pong!")
}