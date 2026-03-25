import { db } from '@/lib/db';
import { blogPosts } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { isAuthenticated } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import { EditPostForm } from './edit-form';

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAuthenticated())) {
    redirect('/admin/login');
  }

  const { id } = await params;
  const postId = parseInt(id, 10);
  if (isNaN(postId)) notFound();

  const results = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.id, postId));

  if (results.length === 0) notFound();

  const post = results[0];

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <EditPostForm post={post} />
      </div>
    </div>
  );
}
