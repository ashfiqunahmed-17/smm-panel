import { motion } from "framer-motion";

const PHASES = [
  {
    label: "Weeks 1-2",
    what: "Use SMM services to build initial followers and engagement",
    why: "Creates baseline credibility and improves first impression",
    cost: "৳2,000–5,000",
  },
  {
    label: "Weeks 3-4",
    what: "Start posting consistent, high-quality content",
    why: "Larger follower base increases organic engagement",
    cost: "Mostly content effort",
  },
  {
    label: "Months 2-3",
    what: "Continue content + light support if needed",
    why: "Faster reach, better algorithm response",
    cost: "Reduced SMM usage",
  },
  {
    label: "Months 3-6",
    what: "Focus mainly on organic growth",
    why: "Strong engagement pushes content naturally",
    cost: "Minimal or no SMM needed",
  },
];

const ROWS = [
  { key: "what", label: "What You Do" },
  { key: "why", label: "Why it Works" },
  { key: "cost", label: "Estimated Cost/ Time" },
];

export default function GrowthTimeline() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow justify-center mb-3">growth</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Growing on Social Media in{" "}
            <span className="text-primary-500">Bangladesh</span>
          </h2>
          <p className="text-ink-light">
            The smartest way to grow is by combining SMM support with real
            content. You use SMM at the beginning for momentum, then let
            organic growth take over.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHASES.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-primary-200 p-4 shadow-card"
            >
              <div className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 py-2.5 text-center text-sm font-semibold text-white mb-4">
                {p.label}
              </div>
              <div className="relative pl-2">
                {ROWS.map((r, ri) => (
                  <div key={r.key} className="relative pl-6 pb-4 last:pb-0">
                    {ri < ROWS.length - 1 && (
                      <span className="absolute left-[11px] top-6 bottom-0 border-l-2 border-dotted border-primary-300" />
                    )}
                    <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-md border border-primary-300 bg-white text-[11px] font-bold text-primary-500">
                      {String(ri + 1).padStart(2, "0")}
                    </span>
                    <div className="rounded-lg bg-[#F7F7F8] p-3">
                      <p className="text-sm font-bold text-primary-500 mb-1">
                        {r.label}
                      </p>
                      <p className="text-xs text-ink-light leading-relaxed">
                        {p[r.key]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
