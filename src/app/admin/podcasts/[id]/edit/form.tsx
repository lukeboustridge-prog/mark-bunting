'use client';

import { updateEpisode } from '../../actions';

type Episode = {
  id: number;
  title: string;
  description: string;
  episodeNumber: number | null;
  duration: string | null;
  podbeanUrl: string | null;
  spotifyUrl: string | null;
  appleUrl: string | null;
  published: boolean;
};

export function EditEpisodeForm({ episode }: { episode: Episode }) {
  const updateWithId = updateEpisode.bind(null, episode.id);

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
          defaultValue={episode.title}
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
          defaultValue={episode.description}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="episodeNumber" className="block text-sm font-semibold text-charcoal mb-2">
            Episode Number
          </label>
          <input
            type="number"
            id="episodeNumber"
            name="episodeNumber"
            min="1"
            defaultValue={episode.episodeNumber ?? ''}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-semibold text-charcoal mb-2">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            defaultValue={episode.duration || ''}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="e.g. 45 min"
          />
        </div>
      </div>

      <div>
        <label htmlFor="podbeanUrl" className="block text-sm font-semibold text-charcoal mb-2">
          Podbean URL
        </label>
        <input
          type="url"
          id="podbeanUrl"
          name="podbeanUrl"
          defaultValue={episode.podbeanUrl || ''}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="spotifyUrl" className="block text-sm font-semibold text-charcoal mb-2">
          Spotify URL
        </label>
        <input
          type="url"
          id="spotifyUrl"
          name="spotifyUrl"
          defaultValue={episode.spotifyUrl || ''}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="appleUrl" className="block text-sm font-semibold text-charcoal mb-2">
          Apple Podcasts URL
        </label>
        <input
          type="url"
          id="appleUrl"
          name="appleUrl"
          defaultValue={episode.appleUrl || ''}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div className="pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            defaultChecked={episode.published}
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
          Update Episode
        </button>
        <a href="/admin/podcasts" className="text-slate hover:text-charcoal transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
