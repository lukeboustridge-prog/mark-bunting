import { neon } from '@neondatabase/serverless';

const DATABASE_URL =
  'postgresql://neondb_owner:npg_8nxdevzqQN5I@ep-soft-forest-a4qd3uol-pooler.us-east-1.aws.neon.tech/RANZ_Rooring?sslmode=require';

const sql = neon(DATABASE_URL);

async function seed() {
  console.log('Seeding Mark Bunting database...\n');

  // Clear existing data for idempotent re-runs
  await sql.query('DELETE FROM mb_blog_posts');
  await sql.query('DELETE FROM mb_podcast_episodes');
  await sql.query('DELETE FROM mb_testimonials');
  console.log('Cleared existing data.\n');

  // ── Blog Posts ──────────────────────────────────────────────────
  // Staggered dates going back from 2025-10-01
  const blogPosts = [
    { title: 'The Ultimate Compliment', slug: 'the-ultimate-compliment', category: 'Connection', excerpt: 'Why the best compliment you can give someone has nothing to do with what they look like, and everything to do with how they made you feel.', published_at: '2025-10-01' },
    { title: 'One Little Word That Can Shift Everything', slug: 'one-little-word-that-can-shift-everything', category: 'Language', excerpt: 'Sometimes the tiniest change in your language can transform a conversation. Here\'s the one word swap that changes everything.', published_at: '2025-09-15' },
    { title: 'Please Break This Golden Rule of Communication', slug: 'please-break-this-golden-rule-of-communication', category: 'Framework', excerpt: 'You\'ve been told to treat others how you want to be treated. Here\'s why that advice might be doing more harm than good.', published_at: '2025-09-01' },
    { title: 'An Orange Flame Gets Accidental Exercise', slug: 'an-orange-flame-gets-accidental-exercise', category: 'Open Flames', excerpt: 'What happens when an Orange Flame — warm, social, people-oriented — stumbles into an unexpected workout for their communication muscles.', published_at: '2025-08-15' },
    { title: 'Warning: Naming and Faming Follows', slug: 'warning-naming-and-faming-follows', category: 'Recognition', excerpt: 'The power of recognition and why naming what people do well can transform how they show up.', published_at: '2025-08-01' },
    { title: 'Air New Zealand Was a Really Great Airline', slug: 'air-new-zealand-was-a-really-great-airline', category: 'Customer Service', excerpt: 'What happened to the communication culture that once made Air NZ legendary, and what we can all learn from it.', published_at: '2025-07-15' },
    { title: 'How Waikato Locals Seek First to Understand with Open Flames', slug: 'how-waikato-locals-seek-first-to-understand', category: 'Open Flames', excerpt: 'Stories from the Waikato community putting the Open Flames framework into practice in real life.', published_at: '2025-07-01' },
    { title: 'An Orange Flame Neeeeeds People', slug: 'an-orange-flame-neeeeeds-people', category: 'Open Flames', excerpt: 'If you\'re an Orange Flame, you know the feeling — that deep need for human connection that drives everything you do.', published_at: '2025-06-15' },
    { title: 'Want to Be a Better Listener? Ask Yourself This Simple Question', slug: 'want-to-be-a-better-listener', category: 'Listening', excerpt: 'One question that will instantly make you a more present, engaged listener in every conversation.', published_at: '2025-06-01' },
  ];

  console.log('Inserting blog posts...');
  for (const post of blogPosts) {
    await sql.query(
      `INSERT INTO mb_blog_posts (title, slug, excerpt, content, category, published, published_at, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, true, $6, $6, $6)`,
      [post.title, post.slug, post.excerpt, post.excerpt, post.category, post.published_at]
    );
  }
  console.log(`  ✓ ${blogPosts.length} blog posts inserted`);

  // ── Podcast Episodes ───────────────────────────────────────────
  const podbeanUrl = 'https://bunty6.podbean.com/';
  const spotifyUrl = 'https://open.spotify.com/show/5JMnvS1LTDnMHEG55CCplm';
  const appleUrl = 'https://podcasts.apple.com/nz/podcast/the-mark-bunting-podcast/id1648406702';

  const podcastEpisodes = [
    { title: 'Episode 1: 10 Things They Don\'t Tell You About Being in Your Own Business', episode_number: 1, duration: '45 min', description: 'The debut episode featuring mentor Graham Billings discussing SMART plans, accountability, prioritizing tasks, and leveraging CRM systems.', published_at: '2024-06-18' },
    { title: 'Episode 2: Purpose, People and Business Setup', episode_number: 2, duration: '53 min', description: 'Mark explores his purpose and human behaviour, references Stephen Bartlett, and features business setup insights from accountant Ian Black.', published_at: '2024-06-25' },
    { title: 'Episode 3: Bad News, Bison and Business Tax', episode_number: 3, duration: '1hr 1min', description: 'Handling bad news and maybe bad advice, lessons from bison behaviour, and exploring why tax is actually good.', published_at: '2024-07-10' },
    { title: 'Episode 4: Shaun O\'Neill and Rich by 60', episode_number: 4, duration: '53 min', description: 'Featuring guest Shaun O\'Neill discussing business dedication, with Rich by 60 segments and Cliff X Face.', published_at: '2024-07-31' },
    { title: 'Rocks: The Real Power of Being Thankful', episode_number: null, duration: '15 min', description: 'There is so much fear in the world right now. Here is a FREE antidote to fear, through the power of genuine thankfulness.', published_at: '2023-03-21' },
    { title: 'Rocks: The \'Green\' Thing', episode_number: null, duration: '12 min', description: 'A humorous look at how previous generations managed without modern environmental consciousness.', published_at: '2023-03-08' },
    { title: 'Rocks: Diving Boards and Parthenons', episode_number: null, duration: '10 min', description: 'Exploring career uncertainty and building stability through metaphorical architectural references.', published_at: '2022-12-01' },
    { title: 'Rocks: Real Giving', episode_number: null, duration: '8 min', description: 'The difference between giving from the heart and giving from the hand, with stories and a listener challenge.', published_at: '2022-11-30' },
  ];

  console.log('Inserting podcast episodes...');
  for (const ep of podcastEpisodes) {
    await sql.query(
      `INSERT INTO mb_podcast_episodes (title, description, episode_number, duration, podbean_url, spotify_url, apple_url, published, published_at, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, true, $8, $8, $8)
`,
      [ep.title, ep.description, ep.episode_number, ep.duration, podbeanUrl, spotifyUrl, appleUrl, ep.published_at]
    );
  }
  console.log(`  ✓ ${podcastEpisodes.length} podcast episodes inserted`);

  // ── Testimonials ───────────────────────────────────────────────
  console.log('Inserting testimonials...');
  await sql.query(
    `INSERT INTO mb_testimonials (name, role, quote, stars, featured, published, created_at)
     VALUES ($1, $2, $3, $4, true, true, NOW())
`,
    [
      'Workshop Participant',
      'Team Session',
      'It was perfectly pitched, insightful and connected really well with the team. It definitely changed the vernacular in the group and made the other tasks more interesting as we observed the different coloured flames working together. Everyone rated the session really highly, and the consensus was that it was one of the best sessions we\'ve had.',
      5,
    ]
  );
  console.log('  ✓ 1 testimonial inserted');

  // ── Videos (empty) ─────────────────────────────────────────────
  console.log('Skipping mb_videos (empty for now — future feature)');

  // ── Verify counts ──────────────────────────────────────────────
  console.log('\n--- Row counts ---');
  const blogCount = await sql.query('SELECT COUNT(*)::int as count FROM mb_blog_posts');
  console.log(`mb_blog_posts:       ${blogCount[0].count}`);

  const podcastCount = await sql.query('SELECT COUNT(*)::int as count FROM mb_podcast_episodes');
  console.log(`mb_podcast_episodes: ${podcastCount[0].count}`);

  const testimonialCount = await sql.query('SELECT COUNT(*)::int as count FROM mb_testimonials');
  console.log(`mb_testimonials:     ${testimonialCount[0].count}`);

  const videoCount = await sql.query('SELECT COUNT(*)::int as count FROM mb_videos');
  console.log(`mb_videos:           ${videoCount[0].count}`);

  console.log('\nSeed complete!');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
