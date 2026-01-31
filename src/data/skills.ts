
export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  { id: 'ts',      name: 'TypeScript', icon: '/typescript.png' },
  { id: 'js',      name: 'JavaScript', icon: '/javascript.png' },
  { id: 'djs',     name: 'Discord.js',       icon: '/djs.png' },
  { id: 'go',      name: 'Go',        icon: '/go.png' },
  { id: 'mongodb', name: 'MongoDB',       icon: '/mongodb.png' },
];
