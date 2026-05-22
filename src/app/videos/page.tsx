import { Flame, Play, Film } from "lucide-react";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import { videos } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Mark Bunting in action — keynote talks, workshop highlights, and short-form clips on communication, connection, and culture.",
  alternates: { canonical: "/videos" },
  openGraph: {
    url: "https://markbunting.co.nz/videos",
    title: "Videos — Mark Bunting",
    description:
      "Keynote talks, workshop highlights, and short-form clips on communication and culture.",
  },
};

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-NZ", {
    month: "long",
    year: "numeric",
  });
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    // Handle various YouTube URL formats
    let videoId: string | null = null;
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes("youtube.com")) {
      videoId = parsed.searchParams.get("v");
      if (!videoId && parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1];
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}

export default async function VideosPage() {
  const allVideos = await db
    .select()
    .from(videos)
    .where(eq(videos.published, true))
    .orderBy(desc(videos.publishedAt));

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <Film className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Videos</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Watch &amp; Learn
          </h1>
          <p className="text-lg text-charcoal-light max-w-lg mx-auto">
            Video content from Mark&apos;s workshops, keynotes, and
            conversations about communication and connection.
          </p>
        </div>
      </section>

      {/* Videos Grid or Empty State */}
      <section className="py-12 md:py-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          {allVideos.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-2xl bg-white shadow-sm border border-primary/10 p-12 text-center">
              <div className="w-20 h-20 rounded-full gradient-fire mx-auto mb-6 flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-0.5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-3">
                Coming Soon
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Mark is putting together video content from workshops, keynotes,
                and more. Check back soon to watch and learn.
              </p>
              <Flame className="w-6 h-6 text-primary/40 mx-auto" />
            </div>
          ) : (
            <>
              {/* Featured video (first one) */}
              {allVideos[0] && (() => {
                const featured = allVideos[0];
                const embedUrl = getYouTubeEmbedUrl(featured.youtubeUrl);
                return (
                  <div className="mb-12">
                    <div className="rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition-shadow duration-300">
                      {embedUrl ? (
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            src={embedUrl}
                            title={featured.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      ) : (
                        <a
                          href={featured.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative h-64 md:h-96 gradient-fire group"
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                        </a>
                      )}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-2">
                          {featured.category && (
                            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              {featured.category}
                            </span>
                          )}
                          <span className="text-xs text-slate">
                            {formatDate(featured.publishedAt)}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-2">
                          {featured.title}
                        </h2>
                        <p className="text-charcoal-light leading-relaxed">
                          {featured.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Rest of videos */}
              {allVideos.length > 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allVideos.slice(1).map((video) => {
                    const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
                    return (
                      <div
                        key={video.id}
                        className="rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
                        {embedUrl ? (
                          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                              src={embedUrl}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            />
                          </div>
                        ) : (
                          <a
                            href={video.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative h-44 bg-gradient-to-br from-warm-white to-primary/10 group"
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Play className="w-6 h-6 text-primary ml-0.5" />
                              </div>
                            </div>
                          </a>
                        )}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-2">
                            {video.category && (
                              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                {video.category}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                            {video.title}
                          </h3>
                          <p className="text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-2">
                            {video.description}
                          </p>
                          <span className="text-xs text-slate">
                            {formatDate(video.publishedAt)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
