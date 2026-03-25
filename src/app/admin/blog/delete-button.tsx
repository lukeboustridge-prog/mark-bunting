'use client';

import { deletePost } from './actions';

export function DeletePostButton({ id, title }: { id: number; title: string }) {
  async function handleDelete() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await deletePost(id);
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="text-sm text-secondary/70 hover:text-secondary font-medium transition-colors"
    >
      Delete
    </button>
  );
}
