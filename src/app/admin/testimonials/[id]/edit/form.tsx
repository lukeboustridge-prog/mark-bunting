'use client';

import { updateTestimonial } from '../../actions';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  stars: number;
  featured: boolean;
  published: boolean;
};

export function EditTestimonialForm({ testimonial }: { testimonial: Testimonial }) {
  const updateWithId = updateTestimonial.bind(null, testimonial.id);

  return (
    <form action={updateWithId} className="space-y-6 bg-white rounded-xl shadow-sm p-8">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={testimonial.name}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-charcoal mb-2">
          Role / Company *
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          defaultValue={testimonial.role}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="quote" className="block text-sm font-semibold text-charcoal mb-2">
          Quote *
        </label>
        <textarea
          id="quote"
          name="quote"
          required
          rows={5}
          defaultValue={testimonial.quote}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="stars" className="block text-sm font-semibold text-charcoal mb-2">
          Rating
        </label>
        <select
          id="stars"
          name="stars"
          defaultValue={String(testimonial.stars)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        >
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      <div className="flex items-center gap-8 pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={testimonial.featured}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20"
          />
          <span className="text-sm font-medium text-charcoal">Featured</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={testimonial.published}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20"
          />
          <span className="text-sm font-medium text-charcoal">Published</span>
        </label>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors text-lg"
        >
          Update Testimonial
        </button>
        <a href="/admin/testimonials" className="text-slate hover:text-charcoal transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
