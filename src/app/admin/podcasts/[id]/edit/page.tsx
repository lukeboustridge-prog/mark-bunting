import Link from 'next/link';
import { db } from '@/lib/db';
import { podcastEpisodes } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { EditEpisodeForm } from './form';

export default async function EditEpisodePage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) redirect('/admin/login');

  const { id } = await params;
  const episode = await db
    .select()
    .from(podcastEpisodes)
    .where(eq(podcastEpisodes.id, Number(id)));

  if (!episode.length) notFound();

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/podcasts" className="text-sm text-slate hover:text-primary">
          &larr; Back to Podcasts
        </Link>
        <h1 className="text-2xl font-bold text-charcoal mt-2">Edit Episode</h1>
      </div>
      <EditEpisodeForm episode={episode[0]} />
    </div>
  );
}
