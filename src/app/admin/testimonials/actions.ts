'use server';

import { db } from '@/lib/db';
import { testimonials } from '@/lib/db/schema';
import { isAuthenticated } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTestimonial(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const name = formData.get('name') as string;
  const role = formData.get('role') as string;
  const quote = formData.get('quote') as string;
  const stars = Number(formData.get('stars')) || 5;
  const featured = formData.get('featured') === 'on';
  const published = formData.get('published') === 'on';

  await db.insert(testimonials).values({
    name,
    role,
    quote,
    stars,
    featured,
    published,
  });

  revalidatePath('/admin/testimonials');
  redirect('/admin/testimonials');
}

export async function updateTestimonial(id: number, formData: FormData) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  const name = formData.get('name') as string;
  const role = formData.get('role') as string;
  const quote = formData.get('quote') as string;
  const stars = Number(formData.get('stars')) || 5;
  const featured = formData.get('featured') === 'on';
  const published = formData.get('published') === 'on';

  await db
    .update(testimonials)
    .set({
      name,
      role,
      quote,
      stars,
      featured,
      published,
    })
    .where(eq(testimonials.id, id));

  revalidatePath('/admin/testimonials');
  redirect('/admin/testimonials');
}

export async function deleteTestimonial(id: number) {
  if (!(await isAuthenticated())) throw new Error('Unauthorized');

  await db.delete(testimonials).where(eq(testimonials.id, id));

  revalidatePath('/admin/testimonials');
}
