'use client';

import { useState } from 'react';
import { deleteEpisode, toggleEpisodePublished } from './actions';

export function DeleteEpisodeButton({ id, title }: { id: number; title: string }) {
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-2">
        <span className="text-sm text-secondary">Delete &quot;{title}&quot;?</span>
        <button
          onClick={async () => {
            await deleteEpisode(id);
            setConfirming(false);
          }}
          className="text-sm font-medium text-white bg-secondary px-3 py-1 rounded hover:bg-secondary-dark transition-colors"
        >
          Yes
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-sm text-slate hover:text-charcoal"
        >
          Cancel
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-sm text-secondary hover:underline"
    >
      Delete
    </button>
  );
}

export function TogglePublishedButton({ id, published }: { id: number; published: boolean }) {
  return (
    <button
      onClick={() => toggleEpisodePublished(id, !published)}
      className={`text-xs font-medium px-3 py-1 rounded-full transition-colors ${
        published
          ? 'bg-green-100 text-green-800 hover:bg-green-200'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {published ? 'Published' : 'Draft'}
    </button>
  );
}
