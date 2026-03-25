'use server';

import { db } from '@/lib/db';
import { videos } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createVideo(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const youtubeUrl = formData.get('youtubeUrl') as string;
  const thumbnailUrl = (formData.get('thumbnailUrl') as string) || null;
  const category = (formData.get('category') as string) || null;
  const featured = formData.get('featured') === 'on';
  const published = formData.get('published') === 'on';

  await db.insert(videos).values({
    title,
    description,
    youtubeUrl,
    thumbnailUrl,
    category,
    featured,
    published,
    publishedAt: published ? new Date() : null,
  });

  revalidatePath('/admin/videos');
  redirect('/admin/videos');
}

export async function updateVideo(id: number, formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const youtubeUrl = formData.get('youtubeUrl') as string;
  const thumbnailUrl = (formData.get('thumbnailUrl') as string) || null;
  const category = (formData.get('category') as string) || null;
  const featured = formData.get('featured') === 'on';
  const published = formData.get('published') === 'on';

  await db
    .update(videos)
    .set({
      title,
      description,
      youtubeUrl,
      thumbnailUrl,
      category,
      featured,
      published,
      publishedAt: published ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(videos.id, id));

  revalidatePath('/admin/videos');
  redirect('/admin/videos');
}

export async function deleteVideo(id: number) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db.delete(videos).where(eq(videos.id, id));

  revalidatePath('/admin/videos');
}

export async function toggleVideoPublished(id: number, published: boolean) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db
    .update(videos)
    .set({
      published,
      publishedAt: published ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(videos.id, id));

  revalidatePath('/admin/videos');
}
