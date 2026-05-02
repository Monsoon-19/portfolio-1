export const personalInfo = {
  name: 'Upendra Murmu',
  role: 'Full Stack Developer',
  email: 'upendramurmu19@gmail.com',
  phone: '+91 7735445973',
  location: 'Bhubaneswar, Odisha',
  github: 'https://github.com/Monsoon-19',
  linkedin: 'https://www.linkedin.com/in/upendra-murmu-393731363',
};

export const aboutText = {
  intro:
    "I'm Upendra — a full stack developer from Mayurbhanj, now based in Bhubaneswar. I got into code because I wanted to build things, not just study them. That hasn't changed.",
  body:
    "I spend most of my time working with Next.js, React, and Supabase — building apps that actually work end-to-end. Auth, databases, real-time updates, deployment — I like owning the full picture, not just a slice of it. My projects aren't homework assignments. HabitTrack has real users with streak tracking and RLS policies. DailyExpense handles full CRUD with analytics. I build things I'd actually use myself.",
  creative:
    "When I'm not writing code, I'm usually editing videos in After Effects or CapCut, messing around in Canva, or just exploring the weird intersection of tech and creativity. I think good developers should care about how things look, not just how they work.",
  vibe: 'Currently building, always learning',
};

export const skills = {
  languages: [
    { name: 'C++', level: 'Strong' },
    { name: 'Python', level: 'Comfortable' },
    { name: 'JavaScript', level: 'Primary' },
    { name: 'TypeScript', level: 'Primary' },
    { name: 'HTML/CSS', level: 'Strong' },
    { name: 'SQL', level: 'Comfortable' },
  ],
  frameworks: [
    { name: 'Next.js', note: 'go-to framework' },
    { name: 'React', note: 'daily driver' },
    { name: 'Node.js', note: 'backend' },
    { name: 'Tailwind CSS', note: 'styling' },
    { name: 'Framer Motion', note: 'animations' },
  ],
  tools: [
    { name: 'Supabase', note: 'auth + db' },
    { name: 'Vercel', note: 'deploy' },
    { name: 'Git & GitHub', note: 'version control' },
    { name: 'VS Code', note: 'editor' },
    { name: 'MongoDB', note: 'nosql' },
  ],
  coreCS: ['DSA', 'OOP', 'DBMS', 'Computer Networks'],
};

export const experience = [
  {
    id: 1,
    title: 'Agentic AI: From Learner to Builder',
    company: 'IBM SkillsBuild × CSRBOX',
    location: 'Bhubaneswar, IN',
    period: 'Jul 2025 — Aug 2025',
    type: 'Internship',
    description:
      'Worked on real-world applications of AI, ML, and Generative AI. Went from understanding the theory to actually building with agentic patterns — prompt engineering, retrieval pipelines, and tool-augmented workflows.',
  },
  {
    id: 2,
    title: 'Front-End Web Development',
    company: 'IBM SkillsBuild Summer Internship',
    location: 'Bhubaneswar, IN',
    period: 'Jun 2024 — Aug 2024',
    type: 'Internship',
    description:
      'Six weeks of hands-on frontend work — HTML, CSS, JavaScript, responsive design. This is where I went from "I know the syntax" to "I can build a page from scratch." The turning point.',
  },
];

export const projects = [
  {
    id: 1,
    name: 'HabitTrack',
    tagline: 'A habit tracker I actually use myself.',
    description:
      'Full-stack habit tracking app with auth, streak tracking, weekly analytics charts, and an achievements system. Built with Supabase for the backend — PostgreSQL with Row Level Security so every user\'s data stays private.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
    highlight: '15+ beta testers, RLS for data privacy, achievement badges',
    liveUrl: 'https://habit-track-self.vercel.app',
    githubUrl: 'https://github.com/Monsoon-19/HabitTrack',
    status: 'Live',
    year: '2025',
  },
  {
    id: 2,
    name: 'DailyExpense',
    tagline: 'Because I needed to stop guessing where my money goes.',
    description:
      'Full-stack expense tracker with complete CRUD operations, category-wise analytics, and a clean dashboard. Built with v0 + Supabase, deployed on Vercel. Real-time data sync with 10+ reusable UI components.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    highlight: 'Real-time sync, analytics dashboard, 10+ reusable components',
    liveUrl: 'https://daily-expense-delta.vercel.app',
    githubUrl: 'https://github.com/Monsoon-19/DailyExpense',
    status: 'Live',
    year: '2025',
  },
  {
    id: 3,
    name: 'Passenger Counter',
    tagline: 'My first JavaScript project — where it all started.',
    description:
      'A simple, interactive counter app built during my Scrimba learning days. Clean vanilla JavaScript with custom CSS styling. Nothing fancy, but it taught me the fundamentals that everything else is built on.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlight: null,
    liveUrl: null,
    githubUrl: 'https://github.com/Monsoon-19/passanger-counter',
    status: 'Complete',
    year: '2024',
  },
  {
    id: 4,
    name: 'Ball Game',
    tagline: 'A weekend experiment in browser-based gameplay.',
    description:
      'An interactive ball game built purely with JavaScript and HTML canvas. Just a fun side project to explore DOM manipulation, game loops, and collision detection.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    highlight: null,
    liveUrl: null,
    githubUrl: 'https://github.com/Monsoon-19/ball-game',
    status: 'Complete',
    year: '2024',
  },
];

export const creative = {
  dsa: {
    count: '30+',
    label: 'Problems solved on LeetCode & HackerRank',
    note: 'Strengthening algorithmic thinking — arrays, strings, trees, and graphs',
  },
  content: {
    tools: ['After Effects', 'CapCut', 'Canva'],
    note: 'Creating digital content, video edits, and visual experiments for social media',
  },
};
