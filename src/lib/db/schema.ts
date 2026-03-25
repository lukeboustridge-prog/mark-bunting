import { pgTable, serial, text, boolean, integer, timestamp } from 'drizzle-orm/pg-core';

// Blog posts
export const blogPosts = pgTable('mb_blog_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').unique().notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  category: text('category').notNull(),
  imageUrl: text('image_url'),
  published: boolean('published').default(false).notNull(),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Videos
export const videos = pgTable('mb_videos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  youtubeUrl: text('youtube_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  category: text('category'),
  featured: boolean('featured').default(false).notNull(),
  published: boolean('published').default(false).notNull(),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Podcast episodes
export const podcastEpisodes = pgTable('mb_podcast_episodes', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  episodeNumber: integer('episode_number'),
  duration: text('duration'),
  podbeanUrl: text('podbean_url'),
  spotifyUrl: text('spotify_url'),
  appleUrl: text('apple_url'),
  published: boolean('published').default(false).notNull(),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Testimonials
export const testimonials = pgTable('mb_testimonials', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  quote: text('quote').notNull(),
  stars: integer('stars').default(5).notNull(),
  featured: boolean('featured').default(false).notNull(),
  published: boolean('published').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// General content blocks (for editable sections)
export const contentBlocks = pgTable('mb_content_blocks', {
  id: serial('id').primaryKey(),
  key: text('key').unique().notNull(),
  title: text('title'),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
