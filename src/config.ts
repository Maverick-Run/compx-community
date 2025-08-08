import dotenv from "dotenv"

dotenv.config()

const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error("Missing environment variables")
}

/**
 * Application configuration object containing Discord integration credentials.
 *
 * @property {string} DISCORD_TOKEN - The authentication token for the Discord bot.
 * @property {string} DISCORD_CLIENT_ID - The client ID for the Discord application.
 */
export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
}