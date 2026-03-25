import Link from 'next/link';
import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { EditTestimonialForm } from './form';

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) redirect('/admin/login');

  const { id } = await params;
  const testimonial = await db
    .select()
    .from(testimonials)
    .where(eq(testimonials.id, Number(id)));

  if (!testimonial.length) notFound();

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/testimonials" className="text-sm text-slate hover:text-primary">
          &larr; Back to Testimonials
        </Link>
        <h1 className="text-2xl font-bold text-charcoal mt-2">Edit Testimonial</h1>
      </div>
      <EditTestimonialForm testimonial={testimonial[0]} />
    </div>
  );
}
