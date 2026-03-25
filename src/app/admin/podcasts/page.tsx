import Link from 'next/link';
import { db } from '@/lib/db';
import { podcastEpisodes } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { desc } from 'drizzle-orm';
import { DeleteEpisodeButton, TogglePublishedButton } from './components';

export default async function PodcastsPage() {
  if (!(await isAuthenticated())) redirect('/admin/login');

  const episodes = await db
    .select()
    .from(podcastEpisodes)
    .orderBy(desc(podcastEpisodes.createdAt));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-charcoal">Podcast Episodes</h1>
        <Link
          href="/admin/podcasts/new"
          className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          + New Episode
        </Link>
      </div>

      {episodes.length === 0 ? (
        <div className="text-center py-16 text-slate">
          <p className="text-lg mb-4">No podcast episodes yet.</p>
          <Link href="/admin/podcasts/new" className="text-primary hover:underline">
            Add your first episode
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-charcoal/5">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">Ep #</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">Title</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">Duration</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-charcoal">Links</th>
                  <th className="text-center px-6 py-3 text-sm font-semibold text-charcoal">Status</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {episodes.map((ep) => (
                  <tr key={ep.id} className="hover:bg-warm-white/50">
                    <td className="px-6 py-4 text-sm font-medium text-charcoal">
                      {ep.episodeNumber ?? '—'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">{ep.title}</div>
                      <div className="text-sm text-slate line-clamp-1">{ep.description}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate">{ep.duration || '—'}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {ep.podbeanUrl && (
                          <a href={ep.podbeanUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full hover:bg-purple-200">
                            Podbean
                          </a>
                        )}
                        {ep.spotifyUrl && (
                          <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full hover:bg-green-200">
                            Spotify
                          </a>
                        )}
                        {ep.appleUrl && (
                          <a href={ep.appleUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full hover:bg-pink-200">
                            Apple
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <TogglePublishedButton id={ep.id} published={ep.published} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link
                          href={`/admin/podcasts/${ep.id}/edit`}
                          className="text-sm text-primary hover:underline"
                        >
                          Edit
                        </Link>
                        <DeleteEpisodeButton id={ep.id} title={ep.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {episodes.map((ep) => (
              <div key={ep.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    {ep.episodeNumber && (
                      <span className="text-xs font-medium text-slate">Episode {ep.episodeNumber}</span>
                    )}
                    <h3 className="font-medium text-charcoal">{ep.title}</h3>
                  </div>
                  <TogglePublishedButton id={ep.id} published={ep.published} />
                </div>
                <p className="text-sm text-slate line-clamp-2 mb-2">{ep.description}</p>
                {ep.duration && <p className="text-xs text-warm-gray mb-3">{ep.duration}</p>}
                <div className="flex flex-wrap gap-2 mb-3">
                  {ep.podbeanUrl && (
                    <a href={ep.podbeanUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                      Podbean
                    </a>
                  )}
                  {ep.spotifyUrl && (
                    <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Spotify
                    </a>
                  )}
                  {ep.appleUrl && (
                    <a href={ep.appleUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                      Apple
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <Link
                    href={`/admin/podcasts/${ep.id}/edit`}
                    className="text-sm text-primary hover:underline"
                  >
                    Edit
                  </Link>
                  <DeleteEpisodeButton id={ep.id} title={ep.title} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
