'use client';

import { useState } from 'react';
import { deleteVideo, toggleVideoPublished } from './actions';

export function DeleteVideoButton({ id, title }: { id: number; title: string }) {
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-2">
        <span className="text-sm text-secondary">Delete &quot;{title}&quot;?</span>
        <button
          onClick={async () => {
            await deleteVideo(id);
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
      onClick={() => toggleVideoPublished(id, !published)}
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

export function YouTubePreview({ url }: { url: string }) {
  const videoId = extractYouTubeId(url);
  if (!videoId) return null;

  return (
    <div className="mt-2">
      <img
        src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
        alt="YouTube thumbnail preview"
        className="rounded-lg w-48 h-auto"
      />
    </div>
  );
}

function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}
