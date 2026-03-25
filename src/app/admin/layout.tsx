import Link from 'next/link';
import { isAuthenticated } from '@/lib/auth';

const navItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Blog Posts', href: '/admin/blog' },
  { label: 'Videos', href: '/admin/videos' },
  { label: 'Podcasts', href: '/admin/podcasts' },
  { label: 'Testimonials', href: '/admin/testimonials' },
  { label: 'Content Blocks', href: '/admin/content-blocks' },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthenticated();

  if (!authed) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-gray-50">{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-charcoal text-white flex flex-col shrink-0">
            <div className="p-6 border-b border-white/10">
              <h1 className="text-lg font-bold tracking-tight">
                Mark Bunting <span className="text-flame">CMS</span>
              </h1>
            </div>
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-white/10">
              <form action="/api/admin/logout" method="POST">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-left cursor-pointer"
                >
                  Log out
                </button>
              </form>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
              <h2 className="text-lg font-semibold text-charcoal">
                Mark Bunting CMS
              </h2>
              <form action="/api/admin/logout" method="POST">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-charcoal hover:text-flame transition-colors cursor-pointer"
                >
                  Log out
                </button>
              </form>
            </header>
            <main className="flex-1 p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
