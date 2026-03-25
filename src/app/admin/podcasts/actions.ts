'use server';

import { db } from '@/lib/db';
import { podcastEpisodes } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createEpisode(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const episodeNumber = formData.get('episodeNumber')
    ? Number(formData.get('episodeNumber'))
    : null;
  const duration = (formData.get('duration') as string) || null;
  const podbeanUrl = (formData.get('podbeanUrl') as string) || null;
  const spotifyUrl = (formData.get('spotifyUrl') as string) || null;
  const appleUrl = (formData.get('appleUrl') as string) || null;
  const published = formData.get('published') === 'on';

  await db.insert(podcastEpisodes).values({
    title,
    description,
    episodeNumber,
    duration,
    podbeanUrl,
    spotifyUrl,
    appleUrl,
    published,
    publishedAt: published ? new Date() : null,
  });

  revalidatePath('/admin/podcasts');
  redirect('/admin/podcasts');
}

export async function updateEpisode(id: number, formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const episodeNumber = formData.get('episodeNumber')
    ? Number(formData.get('episodeNumber'))
    : null;
  const duration = (formData.get('duration') as string) || null;
  const podbeanUrl = (formData.get('podbeanUrl') as string) || null;
  const spotifyUrl = (formData.get('spotifyUrl') as string) || null;
  const appleUrl = (formData.get('appleUrl') as string) || null;
  const published = formData.get('published') === 'on';

  await db
    .update(podcastEpisodes)
    .set({
      title,
      description,
      episodeNumber,
      duration,
      podbeanUrl,
      spotifyUrl,
      appleUrl,
      published,
      publishedAt: published ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(podcastEpisodes.id, id));

  revalidatePath('/admin/podcasts');
  redirect('/admin/podcasts');
}

export async function deleteEpisode(id: number) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db.delete(podcastEpisodes).where(eq(podcastEpisodes.id, id));

  revalidatePath('/admin/podcasts');
}

export async function toggleEpisodePublished(id: number, published: boolean) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db
    .update(podcastEpisodes)
    .set({
      published,
      publishedAt: published ? new Date() : null,
      updatedAt: new Date(),
    })
    .where(eq(podcastEpisodes.id, id));

  revalidatePath('/admin/podcasts');
}
