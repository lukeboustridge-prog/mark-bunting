import { db } from '@/lib/db';
import { blogPosts } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { togglePublished } from './actions';
import { DeletePostButton } from './delete-button';

export default async function AdminBlogPage() {
  if (!(await isAuthenticated())) {
    redirect('/admin/login');
  }

  const posts = await db
    .select()
    .from(blogPosts)
    .orderBy(desc(blogPosts.createdAt));

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-charcoal font-display">
              Blog Posts
            </h1>
            <p className="text-slate mt-1">
              {posts.length} post{posts.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Link
            href="/admin/blog/new"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Post
          </Link>
        </div>

        {/* Posts Table */}
        {posts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-warm-gray/20 p-12 text-center">
            <p className="text-slate text-lg">No blog posts yet.</p>
            <Link
              href="/admin/blog/new"
              className="inline-block mt-4 text-primary hover:text-primary-dark font-semibold"
            >
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-warm-gray/20 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-warm-gray/20 bg-warm-white">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">
                    Title
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">
                    Category
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-charcoal">
                    Date
                  </th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-charcoal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-warm-gray/10 hover:bg-warm-white/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="font-medium text-charcoal hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-slate mt-0.5 truncate max-w-md">
                        {post.excerpt}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate">{post.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <TogglePublishedButton
                        id={post.id}
                        published={post.published}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-slate">
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString('en-NZ', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })
                        : '—'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog/${post.id}/edit`}
                          className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                        >
                          Edit
                        </Link>
                        <DeletePostButton id={post.id} title={post.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/admin"
            className="text-slate hover:text-charcoal text-sm transition-colors"
          >
            &larr; Back to Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

function TogglePublishedButton({
  id,
  published,
}: {
  id: number;
  published: boolean;
}) {
  const action = togglePublished.bind(null, id, !published);

  return (
    <form action={action}>
      <button
        type="submit"
        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
          published
            ? 'bg-green-100 text-green-800 hover:bg-green-200'
            : 'bg-warm-gray/20 text-slate hover:bg-warm-gray/30'
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            published ? 'bg-green-500' : 'bg-warm-gray'
          }`}
        />
        {published ? 'Published' : 'Draft'}
      </button>
    </form>
  );
}

