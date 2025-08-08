# CompX Community Discord Bot

A TypeScript-based Discord bot built with discord.js v14 for the CompX community server.

## Features

- 🏓 **Ping Command**: Basic ping/pong slash command to test bot responsiveness
- 🤖 **Slash Commands**: Modern Discord slash command support
- 🔧 **Auto-deployment**: Commands are automatically deployed when the bot joins new servers
- 📝 **TypeScript**: Fully typed codebase with strict type checking
- 🔄 **Hot Reload**: Development server with automatic reloading

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Discord application and bot token

## Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd compx-community-discord
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory:

   ```env
   DISCORD_CLIENT_ID=your_discord_client_id
   DISCORD_TOKEN=your_discord_bot_token
   ```

   To get these values:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application or select an existing one
   - Copy the Application ID (this is your CLIENT_ID)
   - Go to the Bot section and copy the Token

4. **Bot Permissions**

   Your bot needs the following permissions:
   - `Send Messages`
   - `Use Slash Commands`
   - `Read Message History`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run format` - Format code using Prettier
- `npm run lint` - Lint and fix TypeScript files

## Project Structure

```
src/
├── config.ts           # Environment configuration
├── index.ts           # Main bot entry point
├── deploy-commands.ts # Command deployment utility
└── commands/
    ├── index.ts       # Command exports
    └── ping.ts        # Ping command implementation
```

## Adding New Commands

1. Create a new file in `src/commands/` (e.g., `example.ts`)
2. Export `data` (SlashCommandBuilder) and `execute` function:

```typescript
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("example")
  .setDescription("Example command description");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Example response!");
}
```

3. Add the command to `src/commands/index.ts`:

```typescript
import * as ping from "./ping";
import * as example from "./example";

export const commands = {
  ping,
  example,
};
```

The command will be automatically deployed when the bot starts or joins a new server.

## Development

Run the development server:

```bash
npm run dev
```

This will start the bot with hot reload enabled. Any changes to the source files will automatically restart the bot.

## Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Contributing

1. Follow the existing code style (enforced by ESLint and Prettier)
2. Use TypeScript for all new code
3. Add appropriate JSDoc comments for functions and classes
4. Test commands thoroughly before submitting

## Code Style

- Use single quotes for strings
- No semicolons at the end of lines
- Arrow functions with parentheses around parameters
- Strict TypeScript configuration

## License

ISC

## Support

For questions or issues, please contact the CompX community moderators.
