import {
  Flame,
  Headphones,
  Play,
  Clock,
  ExternalLink,
  Mic2,
} from "lucide-react";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import { podcastEpisodes } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Audio episodes with Mark Bunting on human communication, connection, language, and culture. Listen on Podbean, Spotify, or Apple Podcasts.",
  alternates: { canonical: "/podcast" },
  openGraph: {
    url: "https://markbunting.co.nz/podcast",
    title: "Podcast — Mark Bunting",
    description:
      "Audio episodes on human communication, connection, language, and culture.",
  },
};

const platforms = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/nz/podcast/the-mark-bunting-podcast/id1648406702",
    color: "bg-[#9933CC]",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/5JMnvS1LTDnMHEG55CCplm",
    color: "bg-[#1DB954]",
  },
  {
    name: "iHeart Radio",
    href: "https://www.iheart.com/podcast/338-the-mark-bunting-podcast-102835441/",
    color: "bg-[#C6002B]",
  },
  {
    name: "Podbean",
    href: "https://bunty6.podbean.com",
    color: "bg-[#6B8E23]",
  },
];

const segments = [
  { name: "Cliff X Face", description: "Facing challenges head-on" },
  { name: "Rich by 60", description: "Practical wealth-building wisdom" },
  { name: "Did You Know?", description: "Surprising facts and insights" },
  { name: "TWUTPOR", description: "The wrap-up that pulls on reflection" },
];

function formatDate(date: Date | null): string {
  if (!date) return "";
  return date.toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PodcastPage() {
  const episodes = await db
    .select()
    .from(podcastEpisodes)
    .where(eq(podcastEpisodes.published, true))
    .orderBy(desc(podcastEpisodes.publishedAt));

  const latestEpisode = episodes[0] ?? null;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  {episodes.length > 0
                    ? `${episodes.length} Episodes`
                    : "Coming Soon"}{" "}
                  &middot; Since Oct 2022
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                The Mark Bunting{" "}
                <br className="hidden sm:block" />
                <span className="text-gradient-fire">Podcast</span>
              </h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-4 max-w-lg">
                &quot;I&apos;m on a mission to make this country
                friendlier.&quot;
              </p>
              <p className="text-base text-slate leading-relaxed mb-8 max-w-lg">
                Mark teaches OPEN FLAME communication techniques and explores
                topics from business and human behaviour to motorcycling.
                Featuring segments like &quot;Cliff X Face&quot;, &quot;Rich by
                60&quot;, &quot;Did You Know?&quot; and &quot;TWUTPOR&quot;.
              </p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-slate">Listen on</p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full ${p.color} px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}
                    >
                      <Headphones className="w-4 h-4" />
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl gradient-fire shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Mic2 className="w-16 h-16 text-white/80 mx-auto mb-4" />
                    <p className="font-display text-2xl font-bold text-white">
                      The Mark Bunting
                    </p>
                    <p className="font-display text-lg font-bold text-white/90">
                      Podcast
                    </p>
                    <p className="text-sm text-white/70 mt-1">
                      bunty6.podbean.com
                    </p>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-3xl border-2 border-primary/20 -z-10" />
                <div className="absolute -inset-8 rounded-3xl border border-primary/10 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-xl font-bold text-charcoal mb-6">
            Regular Segments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {segments.map((seg) => (
              <div
                key={seg.name}
                className="rounded-2xl bg-white border border-primary/10 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="font-display text-sm font-bold text-primary">
                  {seg.name}
                </p>
                <p className="text-xs text-slate mt-1">{seg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded player placeholder */}
      {latestEpisode && (
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-2xl bg-charcoal p-6 md:p-8 flex items-center gap-6">
              <a
                href={latestEpisode.podbeanUrl || "https://bunty6.podbean.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-colors"
              >
                <Play className="w-6 h-6 text-white ml-0.5" />
              </a>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/50 mb-1">Latest Episode</p>
                <p className="font-display text-sm md:text-base font-bold text-white truncate">
                  {latestEpisode.title}
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
              </div>
              {latestEpisode.duration && (
                <div className="hidden sm:flex items-center gap-1 text-xs text-white/50">
                  <Clock className="w-3 h-3" />
                  {latestEpisode.duration}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Episodes */}
      <section className="py-12 md:py-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-10">
            Episodes
          </h2>

          {episodes.length === 0 ? (
            <div className="rounded-2xl bg-white shadow-sm border border-primary/10 p-12 text-center">
              <Mic2 className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="font-display text-xl font-bold text-charcoal mb-2">
                Episodes coming soon
              </p>
              <p className="text-charcoal-light">
                Subscribe on your favourite platform to be notified when new
                episodes drop.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {episodes.map((ep) => (
                <a
                  key={ep.id}
                  href={
                    ep.podbeanUrl || "https://bunty6.podbean.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl bg-white shadow-sm border border-primary/10 p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mic2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-primary transition-colors">
                      {ep.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-relaxed mb-3 line-clamp-2">
                      {ep.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate">
                      <span>{formatDate(ep.publishedAt)}</span>
                      {ep.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {ep.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-white group-hover:bg-primary transition-colors">
                    <Play className="w-4 h-4 text-charcoal-light group-hover:text-white transition-colors ml-0.5" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Flame className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Never Miss an Episode
          </h2>
          <p className="text-lg text-charcoal-light mb-10 max-w-lg mx-auto">
            Subscribe on your favourite platform and join Mark&apos;s mission to
            make this country friendlier.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full ${p.color} px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity`}
              >
                <ExternalLink className="w-4 h-4" />
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
