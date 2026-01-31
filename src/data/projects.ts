export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  websiteUrl?: string;
  discordUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'reactstudios',
    title: 'ReactStudios',
    description: 'An Italian development team specializing in creating mods and plugins for Minecraft, with a focus on innovative, high-quality game servers.',
    image: '/reactstudios.png',
    websiteUrl: '#', 
    discordUrl: 'https://discord.gg/mcZcDdwpYH'
  },
  {
    id: 'nuvexa',
    title: 'Nuvexa',
    description: 'Nuvexa is a public Discord bot designed to manage community partnerships in a simple, automated, multi-server way.',
    image: '/nuvexa.png',
    websiteUrl: 'https://nuvexabot.it',
    discordUrl: 'https://discord.gg/Y7dPneurpm' 
  },
];
