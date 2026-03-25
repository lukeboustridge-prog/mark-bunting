import Link from 'next/link';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { EpisodeForm } from './form';

export default async function NewEpisodePage() {
  if (!(await isAuthenticated())) redirect('/admin/login');

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/podcasts" className="text-sm text-slate hover:text-primary">
          &larr; Back to Podcasts
        </Link>
        <h1 className="text-2xl font-bold text-charcoal mt-2">New Podcast Episode</h1>
      </div>
      <EpisodeForm />
    </div>
  );
}
