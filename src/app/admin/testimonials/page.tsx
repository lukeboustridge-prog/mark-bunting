import Link from 'next/link';
import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { desc } from 'drizzle-orm';
import { DeleteTestimonialButton } from './components';

function StarRating({ stars }: { stars: number }) {
  return (
    <span className="text-accent" aria-label={`${stars} out of 5 stars`}>
      {'★'.repeat(stars)}
      {'☆'.repeat(5 - stars)}
    </span>
  );
}

export default async function TestimonialsPage() {
  if (!(await isAuthenticated())) redirect('/admin/login');

  const allTestimonials = await db
    .select()
    .from(testimonials)
    .orderBy(desc(testimonials.createdAt));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-charcoal">Testimonials</h1>
        <Link
          href="/admin/testimonials/new"
          className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors"
        >
          + New Testimonial
        </Link>
      </div>

      {allTestimonials.length === 0 ? (
        <div className="text-center py-16 text-slate">
          <p className="text-lg mb-4">No testimonials yet.</p>
          <Link href="/admin/testimonials/new" className="text-primary hover:underline">
            Add your first testimonial
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTestimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <StarRating stars={t.stars} />
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    t.published
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {t.published ? 'Published' : 'Draft'}
                </span>
              </div>

              <blockquote className="text-charcoal italic mb-4 flex-1 line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mb-4">
                <p className="font-semibold text-charcoal">{t.name}</p>
                <p className="text-sm text-slate">{t.role}</p>
              </div>

              {t.featured && (
                <span className="inline-block bg-accent/10 text-accent-dark text-xs font-medium px-2 py-1 rounded-full mb-3 w-fit">
                  Featured
                </span>
              )}

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <Link
                  href={`/admin/testimonials/${t.id}/edit`}
                  className="text-sm text-primary hover:underline"
                >
                  Edit
                </Link>
                <DeleteTestimonialButton id={t.id} name={t.name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
