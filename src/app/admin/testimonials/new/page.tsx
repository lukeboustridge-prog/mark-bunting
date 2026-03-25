import Link from 'next/link';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { TestimonialForm } from './form';

export default async function NewTestimonialPage() {
  if (!(await isAuthenticated())) redirect('/admin/login');

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/admin/testimonials" className="text-sm text-slate hover:text-primary">
          &larr; Back to Testimonials
        </Link>
        <h1 className="text-2xl font-bold text-charcoal mt-2">New Testimonial</h1>
      </div>
      <TestimonialForm />
    </div>
  );
}
