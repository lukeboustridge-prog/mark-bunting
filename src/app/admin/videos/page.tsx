import Link from 'next/link';
import { db } from '@/lib/db';
import { videos } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { desc } from 'drizzle-orm';
import { DeleteVideoButton, TogglePublishedButton } from './components';

export default async function VideosPage() {
  if (!(await isAuthenticated())) redirect('/admin/login');

  const allVideos = await db.select().from(videos).orderBy(desc(videos.createdAt));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-charcoal">Videos</h1>
        <Link
          href="/admin/videos/new"
          className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          + New Video
        </Link>
      </div>

      {allVideos.length === 0 ? (
        <div className="text-center py-16 text-slate">
          <p className="text-lg mb-4">No videos yet.</p>
          <Link href="/admin/videos/new" className="text-primary hover:underline">
            Add your first video
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-charcoal/5">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">Title</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">Category</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-charcoal">Featured</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-charcoal">Status</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {allVideos.map((video) => (
                  <tr key={video.id} className="hover:bg-warm-white/50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">{video.title}</div>
                      <div className="text-sm text-slate truncate max-w-xs">{video.youtubeUrl}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate">{video.category || '—'}</td>
                    <td className="px-6 py-4 text-center">
                      {video.featured && (
                        <span className="inline-block bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <TogglePublishedButton id={video.id} published={video.published} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/admin/videos/${video.id}/edit`}
                          className="text-sm text-primary hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteVideoButton id={video.id} title={video.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {allVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-charcoal">{video.title}</h3>
                  <TogglePublishedButton id={video.id} published={video.published} />
                </div>
                <p className="text-sm text-slate mb-1">{video.category || 'No category'}</p>
                {video.featured && (
                  <span className="inline-block bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded-full mb-3">
                    Featured
                  </span>
                )}
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                  <Link
                    href={`/admin/videos/${video.id}/edit`}
                    className="text-sm text-primary hover:underline"
                  >
                    Edit
                  </Link>
                  <DeleteVideoButton id={video.id} title={video.title} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
