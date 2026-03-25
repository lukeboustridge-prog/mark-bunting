'use server';

import { db } from '@/lib/db';
import { blogPosts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function createPost(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string || slugify(title);
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const imageUrl = (formData.get('imageUrl') as string) || null;
  const published = formData.get('published') === 'on';

  await db.insert(blogPosts).values({
    title,
    slug,
    excerpt,
    content,
    category,
    imageUrl,
    published,
    publishedAt: published ? new Date() : null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  redirect('/admin/blog');
}

export async function updatePost(id: number, formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string || slugify(title);
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const imageUrl = (formData.get('imageUrl') as string) || null;
  const published = formData.get('published') === 'on';

  // Get current post to check if publish state changed
  const existing = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
  const wasPublished = existing[0]?.published;

  await db
    .update(blogPosts)
    .set({
      title,
      slug,
      excerpt,
      content,
      category,
      imageUrl,
      published,
      publishedAt: published && !wasPublished ? new Date() : existing[0]?.publishedAt,
      updatedAt: new Date(),
    })
    .where(eq(blogPosts.id, id));

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  redirect('/admin/blog');
}

export async function deletePost(id: number) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db.delete(blogPosts).where(eq(blogPosts.id, id));

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  redirect('/admin/blog');
}

export async function togglePublished(id: number, published: boolean) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db
    .update(blogPosts)
    .set({
      published,
      publishedAt: published ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(blogPosts.id, id));

  revalidatePath('/admin/blog');
  revalidatePath('/blog');
}
