'use client';

import { useState } from 'react';
import { deleteTestimonial } from './actions';

export function DeleteTestimonialButton({ id, name }: { id: number; name: string }) {
  const [confirming, setConfirming] = useState(false);

  if (confirming) {
    return (
      <span className="flex items-center gap-2">
        <span className="text-sm text-secondary">Delete {name}&apos;s testimonial?</span>
        <button
          onClick={async () => {
            await deleteTestimonial(id);
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
