import Link from 'next/link';
import { db } from '@/lib/db';
import { videos } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { EditVideoForm } from './form';

export default async function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) redirect('/admin/login');

  const { id } = await params;
  const video = await db.select().from(videos).where(eq(videos.id, Number(id)));

  if (!video.length) notFound();

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/videos" className="text-sm text-slate hover:text-primary">
          &larr; Back to Videos
        </Link>
        <h1 className="text-2xl font-bold text-charcoal mt-2">Edit Video</h1>
      </div>
      <EditVideoForm video={video[0]} />
    </div>
  );
}
