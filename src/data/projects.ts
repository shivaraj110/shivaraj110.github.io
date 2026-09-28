export interface Project {
  name: string
  tag: string
  desc: string
  tech: string
  // omitted for private client repos
  github?: string
  live?: string
  npm?: string
  freelance?: boolean
}

export const projects: Project[] = [
  {
    name: 'ghost.blog',
    tag: 'SaaS / AI',
    desc: 'AI content marketing and SEO automation. Brands hire AI "Ghost Writers" with their own voice that research, write, SEO-score and auto-publish articles to WordPress on a schedule — plus a companion WordPress plugin that syncs SEO metadata into Yoast, Rank Math and AIOSEO.',
    tech: 'Next.js, Supabase, Drizzle, PostgreSQL, BullMQ, Redis, Gemini, Stripe, Payload CMS, Bun WebSockets, WordPress (PHP)',
    live: 'https://ghost.blog',
    freelance: true,
  },
  {
    name: 'Codrop',
    tag: 'Dev tool / P2P',
    desc: 'Dropbox for devs — code, environments, and .envs auto-synced across every machine and cloud agent, zero git pull required. Content-addressed chunks over encrypted peer-to-peer QUIC, with devices authenticated by public key.',
    tech: 'Rust, QUIC, iroh, Ed25519',
    github: 'termdx/Codrop',
  },
  {
    name: 'Ikkii',
    tag: 'Mobile / Crypto',
    desc: 'Crypto dueling arena for mobile gamers. Create or join 1v1 duels with stake, play matches in supported games — winner takes the pot via trustless Solana escrow.',
    tech: 'React Native, Expo, Solana, Anchor, Rust, Bun, Hono, Drizzle, PostgreSQL',
    github: 'ikkii-org',
    live: 'https://ikkii.app',
  },
  {
    name: 'Piper',
    tag: 'Terminal',
    desc: 'Never leave your terminal to test your API again. Terminal-based API testing tool with a beautiful TUI interface.',
    tech: 'TypeScript, Bun, OpenTUI',
    github: 'termdx/piper',
    live: 'https://www.npmjs.com/package/@termdx/piper',
    npm: '@termdx/piper',
  },
  {
    name: 'BlogStack',
    tag: 'Full-stack',
    desc: 'Full-stack blogging platform with cross-posting support. Write once, publish everywhere.',
    tech: 'Remix, TypeScript, Prisma',
    github: 'shivaraj110/BlogStack-remix',
    live: 'https://blogstack-ruby.vercel.app',
  },
  {
    name: 'ShelfCook',
    tag: 'Mobile',
    desc: 'Mobile app for recipe management and meal planning with smart shopping lists.',
    tech: 'React Native, Expo, TypeScript',
    github: 'shivaraj110/sc-newui',
    live: 'https://shelfcook.netlify.app/',
  },
  {
    name: 'Flowro Landing',
    tag: 'Web',
    desc: 'SaaS agency landing page with modern animations and micro-interactions.',
    tech: 'React, Tailwind, TypeScript',
    github: 'shivaraj110/Flowro-landing',
    live: 'https://flowro.netlify.app/',
  },
  {
    name: 'FontAI',
    tag: 'AI / Web',
    desc: 'AI-powered font picker with intelligent pairing suggestions based on your design context.',
    tech: 'TypeScript, React, Vite',
    github: 'shivaraj110/fontAI',
    live: 'https://fontpickerai.netlify.app/',
  },
  {
    name: 'Pomo TUI',
    tag: 'Terminal',
    desc: 'Minimalist terminal pomodoro timer for focused productivity sessions.',
    tech: 'TypeScript, Ink',
    github: 'shivaraj110/pomo-tui',
    live: 'https://www.npmjs.com/package/pomo-tui',
    npm: 'pomo-tui',
  },
  {
    name: 'StoreLinks',
    tag: 'Extension',
    desc: 'Browser extension for smart bookmark management and categorization.',
    tech: 'TypeScript, Chrome API',
    github: 'shivaraj110/store-links',
  },
  {
    name: 'WebRTC Signaling',
    tag: 'Backend',
    desc: 'Real-time signaling server for peer-to-peer WebRTC connections.',
    tech: 'TypeScript, WebSockets',
    github: 'shivaraj110/webRTC-signaling-server',
  },
]
