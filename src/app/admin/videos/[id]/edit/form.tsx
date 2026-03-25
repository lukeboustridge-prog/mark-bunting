'use client';

import { useState } from 'react';
import { updateVideo } from '../../actions';
import { YouTubePreview } from '../../components';

type Video = {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string | null;
  category: string | null;
  featured: boolean;
  published: boolean;
};

export function EditVideoForm({ video }: { video: Video }) {
  const [youtubeUrl, setYoutubeUrl] = useState(video.youtubeUrl);
  const updateWithId = updateVideo.bind(null, video.id);

  return (
    <form action={updateWithId} className="space-y-6 bg-white rounded-xl shadow-sm p-8">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-charcoal mb-2">
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={video.title}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-charcoal mb-2">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          defaultValue={video.description}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="youtubeUrl" className="block text-sm font-semibold text-charcoal mb-2">
          YouTube URL *
        </label>
        <input
          type="url"
          id="youtubeUrl"
          name="youtubeUrl"
          required
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
        <YouTubePreview url={youtubeUrl} />
      </div>

      <div>
        <label htmlFor="thumbnailUrl" className="block text-sm font-semibold text-charcoal mb-2">
          Custom Thumbnail URL
        </label>
        <input
          type="url"
          id="thumbnailUrl"
          name="thumbnailUrl"
          defaultValue={video.thumbnailUrl || ''}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="Optional — leave blank to use YouTube thumbnail"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-semibold text-charcoal mb-2">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          defaultValue={video.category || ''}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="e.g. Keynote, Workshop, Interview"
        />
      </div>

      <div className="flex items-center gap-8 pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={video.featured}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20"
          />
          <span className="text-sm font-medium text-charcoal">Featured</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={video.published}
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
          Update Video
        </button>
        <a href="/admin/videos" className="text-slate hover:text-charcoal transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
