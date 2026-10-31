export type BlogPost = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  cover: string
  body: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-in-public',
    title: 'The quiet power of building in public',
    category: 'Notes',
    date: 'June 14, 2024',
    readTime: '4 min read',
    excerpt: 'What changes when you share the process, not just the polished result.',
    cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=85',
    body: [
      'The internet rewards finished things. Launch posts, tidy case studies, the neat version of a long and complicated process. But most of the useful thinking happens before the reveal.',
      'Building in public has become a way to make that thinking visible. It is not about turning every work session into content. It is about leaving enough of a trail that other people can learn from the decisions, mistakes, and small discoveries along the way.',
      'For me, the best kind of sharing is specific and honest: a screenshot of an awkward first pass, a short note about a technical trade-off, or a post-mortem that says what I would do differently. That kind of openness creates better conversations and, usually, better work.',
    ],
  },
  {
    slug: 'shipping-ai-products',
    title: 'What I learned shipping my first AI product',
    category: 'Building',
    date: 'April 2, 2024',
    readTime: '6 min read',
    excerpt: 'Useful AI products start with a clear job, not an impressive demo.',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85',
    body: [
      'The first prototype was impressive for about five minutes. It could summarize, brainstorm, and answer questions. Then the novelty wore off and the real question arrived: what job does this actually help someone do?',
      'The strongest lesson was to narrow the product until the value became obvious. A focused workflow with a fast feedback loop beat a general assistant with a longer feature list every time.',
      'The technical pieces matter, but trust matters more. Good defaults, visible sources, graceful failure states, and an interface that lets people stay in control are the difference between a model demo and a product people return to.',
    ],
  },
  {
    slug: 'better-interfaces',
    title: 'A practical guide to better interfaces',
    category: 'Design',
    date: 'January 18, 2024',
    readTime: '5 min read',
    excerpt: 'A few small principles I return to whenever a screen feels almost right.',
    cover: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85',
    body: [
      'Good interfaces rarely announce themselves. They reduce the amount of thinking required to move through a task, and they make the next useful action feel natural.',
      'Start with hierarchy. If everything is loud, nothing is clear. Give the primary action space, keep supporting information close to the thing it explains, and let typography do more of the work than decoration.',
      'Then test the edges: empty states, long names, slow networks, keyboard navigation, and the moment after an action succeeds. The quality of a product is often most visible in those quiet, unglamorous moments.',
    ],
  },
]

export const projects = [
  { title: 'Sage AI', year: '2024', type: 'AI product', description: 'A calm, capable AI workspace for turning messy research into clear decisions.', tags: ['Next.js', 'AI SDK', 'Postgres'], cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', color: '#d8e6df' },
  { title: 'Good Practice', year: '2023', type: 'Brand system', description: 'A design and development system for a new generation of thoughtful digital products.', tags: ['Strategy', 'Design systems', 'Web'], cover: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85', color: '#f0d8c9' },
  { title: 'Atlas Notes', year: '2023', type: 'Open source', description: 'An opinionated, local-first writing tool for people who think in connections.', tags: ['TypeScript', 'React', 'Open source'], cover: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=85', color: '#d9d7e8' },
]
