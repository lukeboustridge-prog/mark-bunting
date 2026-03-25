"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, RotateCcw, Share2, Sparkles } from "lucide-react";

type FlameType = "red" | "orange" | "clear";

interface Answer { text: string; type: FlameType; }
interface Question { question: string; answers: Answer[]; }
interface FlameProfile { label: string; tagline: string; description: string; color: string; bgColor: string; borderColor: string; }

const flameProfiles: Record<FlameType, FlameProfile> = {
  red: {
    label: "Red Flame",
    tagline: "Bold. Direct. Decisive.",
    description: "You are a Red Flame \u2014 a natural leader who cuts through the noise. You say what you mean, mean what you say, and don\u2019t waste time on small talk. People know where they stand with you, and you bring an intensity to every conversation that gets things done. Your superpower is clarity and conviction. Your growth edge? Sometimes slowing down to let others catch up \u2014 because not everyone processes at your speed.",
    color: "text-secondary", bgColor: "bg-secondary", borderColor: "border-secondary",
  },
  orange: {
    label: "Orange Flame",
    tagline: "Warm. Social. Energising.",
    description: "You are an Orange Flame \u2014 the spark that lights up every room. You thrive on connection, laughter, and the electric buzz of human interaction. You remember names, ask follow-up questions, and have a gift for making people feel seen. Your warmth is magnetic, and teams function better with you in them. Your superpower is rapport and enthusiasm. Your growth edge? Channelling your social energy so that important conversations don\u2019t get lost in the fun.",
    color: "text-primary", bgColor: "bg-primary", borderColor: "border-primary",
  },
  clear: {
    label: "Clear Flame",
    tagline: "Analytical. Precise. Thoughtful.",
    description: "You are a Clear Flame \u2014 the calm, focused centre of any conversation. You listen more than you speak, and when you do speak, every word counts. You value accuracy, preparation, and depth over breadth. People trust your judgement because you\u2019ve clearly thought things through. Your superpower is insight and precision. Your growth edge? Sharing your thinking earlier and more often \u2014 because the world needs your perspective.",
    color: "text-accent", bgColor: "bg-accent", borderColor: "border-accent",
  },
};

const questions: Question[] = [
  { question: "You walk into a networking event where you don\u2019t know anyone. You...", answers: [
    { text: "Walk up to the first person you see and introduce yourself confidently", type: "red" },
    { text: "Scan the room, find the liveliest group, and join their conversation", type: "orange" },
    { text: "Grab a drink, observe the dynamics, and approach someone standing alone", type: "clear" },
  ]},
  { question: "In a team meeting, a colleague presents an idea you disagree with. You...", answers: [
    { text: "Speak up immediately \u2014 better to address it now than let a bad idea gain momentum", type: "red" },
    { text: "Acknowledge what\u2019s good first, then gently steer toward your concerns", type: "orange" },
    { text: "Take notes, think it through, and raise your concerns later with evidence", type: "clear" },
  ]},
  { question: "You need to deliver difficult feedback to someone. Your approach is to...", answers: [
    { text: "Be direct and honest \u2014 they\u2019ll respect you more for not sugarcoating it", type: "red" },
    { text: "Have the conversation over coffee, lead with empathy, make sure they feel supported", type: "orange" },
    { text: "Prepare specific examples and frame it as constructive data they can act on", type: "clear" },
  ]},
  { question: "Your ideal Friday afternoon at work looks like...", answers: [
    { text: "Wrapping up the week\u2019s big decisions and planning your attack for Monday", type: "red" },
    { text: "Team drinks or a long lunch catching up with colleagues", type: "orange" },
    { text: "Quiet time to review the week, organise your files, and tie up loose ends", type: "clear" },
  ]},
  { question: "When you\u2019re telling a story, you tend to...", answers: [
    { text: "Get straight to the punchline \u2014 nobody needs a 10-minute setup", type: "red" },
    { text: "Add colour, drama, voices, and hand gestures \u2014 the performance IS the story", type: "orange" },
    { text: "Include the relevant context and details so the listener fully understands", type: "clear" },
  ]},
  { question: "You receive an email that\u2019s vague and could mean multiple things. You...", answers: [
    { text: "Pick up the phone and sort it out in 30 seconds", type: "red" },
    { text: "Pop over to their desk or send a friendly message to chat about it", type: "orange" },
    { text: "Re-read it carefully and reply with specific clarifying questions", type: "clear" },
  ]},
  { question: "In a brainstorming session, your natural role is...", answers: [
    { text: "The one who cuts through the noise and pushes the group to commit", type: "red" },
    { text: "The one who builds on others\u2019 ideas and keeps the energy flowing", type: "orange" },
    { text: "The one who asks the sharp questions that test whether an idea works", type: "clear" },
  ]},
  { question: "Someone tells you about a problem they\u2019re having. Your first instinct is to...", answers: [
    { text: "Offer a solution \u2014 you can see the answer and want to help fix it", type: "red" },
    { text: "Listen fully, validate their feelings, and let them know you\u2019re there", type: "orange" },
    { text: "Ask questions to understand the full picture before suggesting anything", type: "clear" },
  ]},
  { question: "Your phone rings with an unknown number. You...", answers: [
    { text: "Answer it \u2014 could be important, and you\u2019ll find out fast enough", type: "red" },
    { text: "Answer cheerfully \u2014 might be someone interesting!", type: "orange" },
    { text: "Let it go to voicemail \u2014 if it matters, they\u2019ll leave a message", type: "clear" },
  ]},
  { question: "When learning something new, you prefer to...", answers: [
    { text: "Jump in and figure it out by doing \u2014 you learn fastest through action", type: "red" },
    { text: "Learn alongside others in a workshop or group setting", type: "orange" },
    { text: "Read the manual, watch a tutorial, and understand the system first", type: "clear" },
  ]},
  { question: "You\u2019re planning a holiday with friends. You naturally...", answers: [
    { text: "Take charge of the itinerary \u2014 someone has to make the decisions", type: "red" },
    { text: "Get everyone excited, create the group chat, and rally the troops", type: "orange" },
    { text: "Research the best options, compare prices, and present the findings", type: "clear" },
  ]},
  { question: "At a restaurant, the waiter brings you the wrong dish. You...", answers: [
    { text: "Flag it straight away \u2014 no drama, just say this is not what I ordered", type: "red" },
    { text: "Make a light joke about it and politely ask for the swap", type: "orange" },
    { text: "Quietly check the menu to confirm, then mention it politely", type: "clear" },
  ]},
  { question: "The communication skill you most wish others had is...", answers: [
    { text: "Getting to the point faster", type: "red" },
    { text: "Being more open, warm, and willing to connect", type: "orange" },
    { text: "Thinking before they speak and being more precise", type: "clear" },
  ]},
  { question: "When a project hits a roadblock, your reaction is...", answers: [
    { text: "Frustration \u2014 then immediately looking for the fastest way around it", type: "red" },
    { text: "Rallying the team and talking through it together to find a way forward", type: "orange" },
    { text: "Stepping back to analyse what went wrong and mapping alternative paths", type: "clear" },
  ]},
  { question: "After a big presentation, the compliment that means the most is...", answers: [
    { text: "\u201CThat was powerful \u2014 you really commanded the room\u201D", type: "red" },
    { text: "\u201CEveryone was engaged and energised \u2014 you made it so fun\u201D", type: "orange" },
    { text: "\u201CThat was so well-structured \u2014 every point was clear and backed up\u201D", type: "clear" },
  ]},
];

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [userAnswers, setUserAnswers] = useState<FlameType[]>([]);
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const tally = useMemo(() => {
    const t: Record<FlameType, number> = { red: 0, orange: 0, clear: 0 };
    userAnswers.forEach((a) => (t[a] += 1));
    return t;
  }, [userAnswers]);

  const dominant: FlameType = useMemo(() => {
    const entries = Object.entries(tally) as [FlameType, number][];
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0][0];
  }, [tally]);

  const total = userAnswers.length || 1;

  function handleAnswer(type: FlameType, idx: number) {
    setSelectedAnswer(idx);
    setTimeout(() => {
      const next = [...userAnswers, type];
      setUserAnswers(next);
      setSelectedAnswer(null);
      if (currentQ + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrentQ(currentQ + 1);
      }
    }, 350);
  }

  function reset() {
    setCurrentQ(0);
    setUserAnswers([]);
    setFinished(false);
    setSelectedAnswer(null);
  }

  async function share() {
    const profile = flameProfiles[dominant];
    const text = `I\u2019m a ${profile.label}! ${profile.tagline} Take the 15 Fast Flames quiz to discover your communication flame type.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "My Flame Type", text, url: window.location.href });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(text + " " + window.location.href);
      alert("Copied to clipboard!");
    }
  }

  if (finished) {
    const profile = flameProfiles[dominant];
    const pctRed = Math.round((tally.red / total) * 100);
    const pctOrange = Math.round((tally.orange / total) * 100);
    const pctClear = Math.round((tally.clear / total) * 100);
    const conicGradient = `conic-gradient(#DC2626 0% ${pctRed}%, #F97316 ${pctRed}% ${pctRed + pctOrange}%, #F59E0B ${pctRed + pctOrange}% 100%)`;

    return (
      <div className="min-h-screen bg-cream">
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-3xl px-6 text-center"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <Flame className={`h-10 w-10 ${profile.color}`} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-3">
              You are a <span className={profile.color}>{profile.label}</span>
            </h1>
            <p className="text-xl text-slate font-medium mb-8">{profile.tagline}</p>
            <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto">{profile.description}</p>
          </motion.div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl bg-white shadow-sm border border-primary/10 p-8 md:p-12"
            >
              <h2 className="font-display text-2xl font-bold text-charcoal text-center mb-10">Your Flame Mix</h2>
              <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="relative shrink-0">
                  <div className="w-48 h-48 rounded-full shadow-inner" style={{ background: conicGradient }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <Flame className={`h-8 w-8 ${profile.color}`} />
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-5 w-full">
                  {([
                    { type: "red" as const, label: "Red Flame", pct: pctRed, color: "#DC2626" },
                    { type: "orange" as const, label: "Orange Flame", pct: pctOrange, color: "#F97316" },
                    { type: "clear" as const, label: "Clear Flame", pct: pctClear, color: "#F59E0B" },
                  ]).map((item) => (
                    <div key={item.type}>
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-charcoal">{item.label}</span>
                        <span className="text-slate">{item.pct}% ({tally[item.type]}/{total})</span>
                      </div>
                      <div className="h-3 rounded-full bg-warm-white overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 pb-20">
          <div className="mx-auto max-w-2xl px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={share} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
              <Share2 className="w-4 h-4" /> Share Your Results
            </button>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary-dark transition-colors">
              <Sparkles className="w-4 h-4" /> Book a Session with Mark
            </Link>
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:border-primary hover:text-primary transition-colors">
              <RotateCcw className="w-4 h-4" /> Retake Quiz
            </button>
          </div>
        </section>
      </div>
    );
  }

  const q = questions[currentQ];
  const progress = (currentQ / questions.length) * 100;

  return (
    <div className="min-h-screen bg-cream">
      <section className="relative overflow-hidden pt-12 pb-6 md:pt-20 md:pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-white to-cream" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">15 Fast Flames</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-3">Discover Your Communication Flame</h1>
            <p className="text-slate max-w-lg mx-auto">Answer 15 quick questions to find out whether you burn Red, Orange, or Clear.</p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-slate mb-2">
          <span>Question {currentQ + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 rounded-full bg-warm-white overflow-hidden">
          <motion.div
            className="h-full rounded-full gradient-fire"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl bg-white shadow-sm border border-primary/10 p-8 md:p-10"
          >
            <h2 className="font-display text-xl md:text-2xl font-bold text-charcoal mb-8">{q.question}</h2>
            <div className="space-y-4">
              {q.answers.map((a, idx) => {
                const isSelected = selectedAnswer === idx;
                return (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleAnswer(a.type, idx)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left rounded-xl border-2 p-5 transition-all duration-200 ${isSelected ? "border-primary bg-primary/5 shadow-sm" : "border-transparent bg-warm-white hover:border-primary/30 hover:bg-primary/5"}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${isSelected ? "bg-primary text-white" : "bg-cream text-charcoal-light"}`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-charcoal-light leading-relaxed">{a.text}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-1.5 mt-8">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${i < currentQ ? "bg-primary" : i === currentQ ? "bg-secondary" : "bg-warm-white"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
