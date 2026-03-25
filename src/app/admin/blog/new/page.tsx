'use client';

import { useRef, useState } from 'react';
import { createPost } from '../actions';
import Link from 'next/link';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function NewBlogPostPage() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugManuallyEdited) {
      setSlug(slugify(value));
    }
  }

  function handleSlugChange(value: string) {
    setSlugManuallyEdited(true);
    setSlug(value);
  }

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    try {
      await createPost(formData);
    } catch {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/blog"
            className="text-slate hover:text-charcoal text-sm transition-colors"
          >
            &larr; Back to Blog Posts
          </Link>
          <h1 className="text-3xl font-bold text-charcoal font-display mt-3">
            New Blog Post
          </h1>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          action={handleSubmit}
          className="bg-white rounded-xl shadow-sm border border-warm-gray/20 p-6 space-y-6"
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Your post title"
              className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-lg"
            />
          </div>

          {/* Slug */}
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              required
              value={slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="your-post-slug"
              className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-warm-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary font-mono text-sm"
            />
            <p className="text-xs text-slate mt-1">
              Auto-generated from title. Edit to customise.
            </p>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              required
              placeholder="e.g. Communication, Leadership, Teamwork"
              className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Image URL
              <span className="font-normal text-slate ml-1">(optional)</span>
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label
              htmlFor="excerpt"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              required
              rows={3}
              placeholder="A short summary of the post (shown in listings and previews)"
              className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-charcoal mb-1.5"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={16}
              placeholder="Write your post content here. You can use HTML for formatting."
              className="w-full px-4 py-3 rounded-lg border border-warm-gray/30 bg-white text-charcoal placeholder:text-warm-gray focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y font-mono text-sm leading-relaxed"
            />
            <p className="text-xs text-slate mt-1">
              Plain text or HTML supported.
            </p>
          </div>

          {/* Published Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              name="published"
              className="w-4 h-4 rounded border-warm-gray/30 text-primary focus:ring-primary/50"
            />
            <label htmlFor="published" className="text-sm font-semibold text-charcoal">
              Publish immediately
            </label>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-warm-gray/20">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              {submitting ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving...
                </>
              ) : (
                'Create Post'
              )}
            </button>
            <Link
              href="/admin/blog"
              className="text-slate hover:text-charcoal font-medium px-4 py-2.5 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
