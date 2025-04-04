import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(process.cwd(), 'blog.db'));

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    featured_image TEXT,
    published BOOLEAN DEFAULT 0,
    published_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS posts_categories (
    post_id INTEGER,
    category_id INTEGER,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
  );
`);

// Insert some sample data if the tables are empty
const postCount = db.prepare('SELECT COUNT(*) as count FROM posts').get().count;

if (postCount === 0) {
  const samplePosts = [
    {
      title: 'The Art of Coffee Cultivation',
      slug: 'art-of-coffee-cultivation',
      excerpt: 'Discover the meticulous process of growing premium coffee beans...',
      featured_image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe',
      published: 1,
      published_at: new Date().toISOString(),
    },
    {
      title: 'Understanding Coffee Grading Standards',
      slug: 'coffee-grading-standards',
      excerpt: 'A comprehensive guide to coffee quality standards...',
      featured_image: 'https://images.unsplash.com/photo-1501492673258-2c23127f1fa1',
      published: 1,
      published_at: new Date().toISOString(),
    },
    {
      title: 'Direct Trade Relationships',
      slug: 'direct-trade-relationships',
      excerpt: 'Building sustainable partnerships with producers...',
      featured_image: 'https://images.unsplash.com/photo-1599999905374-a7264acb2c23',
      published: 1,
      published_at: new Date().toISOString(),
    },
  ];

  const insertPost = db.prepare(`
    INSERT INTO posts (title, slug, excerpt, featured_image, published, published_at)
    VALUES (@title, @slug, @excerpt, @featured_image, @published, @published_at)
  `);

  for (const post of samplePosts) {
    insertPost.run(post);
  }
}

export function getPosts() {
  return db.prepare(`
    SELECT id, title, slug, excerpt, featured_image, published_at
    FROM posts
    WHERE published = 1
    ORDER BY published_at DESC
  `).all();
}

export function getPost(slug: string) {
  return db.prepare(`
    SELECT id, title, slug, content, excerpt, featured_image, published_at
    FROM posts
    WHERE slug = ? AND published = 1
  `).get(slug);
}

export function getCategories() {
  return db.prepare('SELECT id, name, slug FROM categories').all();
}

export function getPostCategories(postId: number) {
  return db.prepare(`
    SELECT c.id, c.name, c.slug
    FROM categories c
    JOIN posts_categories pc ON c.id = pc.category_id
    WHERE pc.post_id = ?
  `).all(postId);
}