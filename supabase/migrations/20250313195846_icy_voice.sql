/*
  # Blog System Schema

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `featured_image` (text)
      - `published` (boolean)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `author_id` (uuid, references auth.users)
    
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `created_at` (timestamptz)

    - `posts_categories`
      - `post_id` (uuid, references posts)
      - `category_id` (uuid, references categories)
      - Primary key on (post_id, category_id)

  2. Security
    - Enable RLS on all tables
    - Policies for authenticated users to manage their own posts
    - Public read access for published posts
*/

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  excerpt text,
  featured_image text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create posts_categories junction table
CREATE TABLE IF NOT EXISTS posts_categories (
  post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts_categories ENABLE ROW LEVEL SECURITY;

-- Policies for posts
CREATE POLICY "Public can view published posts" 
  ON posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authors can manage their own posts" 
  ON posts
  USING (auth.uid() = author_id);

-- Policies for categories
CREATE POLICY "Public can view categories" 
  ON categories
  FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Only authenticated users can manage categories" 
  ON categories
  USING (auth.role() = 'authenticated');

-- Policies for posts_categories
CREATE POLICY "Public can view posts_categories" 
  ON posts_categories
  FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Only authenticated users can manage posts_categories" 
  ON posts_categories
  USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updating updated_at
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE
  ON posts
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();