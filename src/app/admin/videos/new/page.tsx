import Link from 'next/link';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { VideoForm } from './form';

export default async function NewVideoPage() {
  if (!(await isAuthenticated())) redirect('/admin/login');

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/videos" className="text-sm text-slate hover:text-primary">
          &larr; Back to Videos
        </Link>
        <h1 className="text-2xl font-bold text-charcoal mt-2">New Video</h1>
      </div>
      <VideoForm />
    </div>
  );
}
