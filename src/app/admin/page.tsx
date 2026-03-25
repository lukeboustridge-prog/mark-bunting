import Link from 'next/link';
import { isAuthenticated } from '@/lib/auth';

const sections = [
  {
    label: 'Blog Posts',
    href: '/admin/blog',
    description: 'Create and manage blog articles',
  },
  {
    label: 'Videos',
    href: '/admin/videos',
    description: 'Manage video content and embeds',
  },
  {
    label: 'Podcasts',
    href: '/admin/podcasts',
    description: 'Manage podcast episodes',
  },
  {
    label: 'Testimonials',
    href: '/admin/testimonials',
    description: 'Client testimonials and reviews',
  },
  {
    label: 'Content Blocks',
    href: '/admin/content-blocks',
    description: 'Edit page content sections',
  },
];

function LoginForm({ error }: { error?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Flame icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-flame/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-flame"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 23c-3.866 0-7-2.686-7-6 0-1.665.684-3.17 1.767-4.243C7.5 12.024 8 11.03 8 10c0-.435.06-.859.173-1.26.113-.403.281-.787.498-1.14C9.592 6.092 11 4.5 12 2c1 2.5 2.408 4.092 3.329 5.6.217.353.385.737.498 1.14.113.401.173.825.173 1.26 0 1.03.5 2.024 1.233 2.757C18.316 13.83 19 15.335 19 17c0 3.314-3.134 6-7 6z" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-charcoal text-center mb-2">
            Mark Bunting CMS
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Enter your password to continue
          </p>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 text-center">
              Invalid password. Please try again.
            </div>
          )}

          <form action="/api/admin/login" method="POST">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-charcoal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoFocus
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-flame focus:border-transparent text-base"
              placeholder="Enter admin password"
            />
            <button
              type="submit"
              className="mt-4 w-full px-4 py-3 bg-flame hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors text-base cursor-pointer"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authed = await isAuthenticated();
  const params = await searchParams;

  if (!authed) {
    return <LoginForm error={params.error} />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-charcoal mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">
        Welcome back, Mark. Choose a section to manage your content.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-flame hover:shadow-md transition-all group"
          >
            <h3 className="text-lg font-semibold text-charcoal group-hover:text-flame transition-colors mb-1">
              {section.label}
            </h3>
            <p className="text-sm text-gray-500">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
