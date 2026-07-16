export interface Project {
  name: string
  tag: string
  desc: string
  tech: string
  github: string
  live?: string
  npm?: string
}

export const projects: Project[] = [
  {
    name: 'CODROP',
    tag: 'DEV TOOL / P2P',
    desc: 'Dropbox for devs — code, environments, and .envs auto-synced across every machine and cloud agent, zero git pull required. Content-addressed chunks over encrypted peer-to-peer QUIC, with devices authenticated by public key.',
    tech: 'RUST / QUIC / IROH / ED25519',
    github: 'termdx/Codrop',
  },
  {
    name: 'IKKII',
    tag: 'MOBILE / CRYPTO',
    desc: 'Crypto dueling arena for mobile gamers. Create or join 1v1 duels with stake, play matches in supported games — winner takes the pot via trustless Solana escrow.',
    tech: 'REACT NATIVE / EXPO / SOLANA / ANCHOR / RUST / BUN / HONO / DRIZZLE / POSTGRESQL',
    github: 'ikkii-org',
    live: 'https://ikkii.app',
  },
  {
    name: 'PIPER',
    tag: 'TERMINAL',
    desc: 'Never leave your terminal to test your API again. Terminal-based API testing tool with a beautiful TUI interface.',
    tech: 'TYPESCRIPT / BUN / OPENTUI',
    github: 'termdx/piper',
    live: 'https://www.npmjs.com/package/@termdx/piper',
    npm: '@termdx/piper',
  },
  {
    name: 'BLOGSTACK',
    tag: 'FULL-STACK',
    desc: 'Full-stack blogging platform with cross-posting support. Write once, publish everywhere.',
    tech: 'REMIX / TYPESCRIPT / PRISMA',
    github: 'shivaraj110/BlogStack-remix',
    live: 'https://blogstack-ruby.vercel.app',
  },
  {
    name: 'SHELFCOOK',
    tag: 'MOBILE',
    desc: 'Mobile app for recipe management and meal planning with smart shopping lists.',
    tech: 'REACT NATIVE / EXPO / TYPESCRIPT',
    github: 'shivaraj110/sc-newui',
    live: 'https://shelfcook.netlify.app/',
  },
  {
    name: 'FLOWRO LANDING',
    tag: 'WEB',
    desc: 'SaaS agency landing page with modern animations and micro-interactions.',
    tech: 'REACT / TAILWIND / TYPESCRIPT',
    github: 'shivaraj110/Flowro-landing',
    live: 'https://flowro.netlify.app/',
  },
  {
    name: 'FONTAI',
    tag: 'AI / WEB',
    desc: 'AI-powered font picker with intelligent pairing suggestions based on your design context.',
    tech: 'TYPESCRIPT / REACT / VITE',
    github: 'shivaraj110/fontAI',
    live: 'https://fontpickerai.netlify.app/',
  },
  {
    name: 'POMO TUI',
    tag: 'TERMINAL',
    desc: 'Minimalist terminal pomodoro timer for focused productivity sessions.',
    tech: 'TYPESCRIPT / INK',
    github: 'shivaraj110/pomo-tui',
    live: 'https://www.npmjs.com/package/pomo-tui',
    npm: 'pomo-tui',
  },
  {
    name: 'STORELINKS',
    tag: 'EXTENSION',
    desc: 'Browser extension for smart bookmark management and categorization.',
    tech: 'TYPESCRIPT / CHROME API',
    github: 'shivaraj110/store-links',
  },
  {
    name: 'WEBRTC SIGNALING',
    tag: 'BACKEND',
    desc: 'Real-time signaling server for peer-to-peer WebRTC connections.',
    tech: 'TYPESCRIPT / WEBSOCKETS',
    github: 'shivaraj110/webRTC-signaling-server',
  },
]
