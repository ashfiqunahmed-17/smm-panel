import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Create Account",
    desc: "Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.",
  },
  {
    n: "02",
    title: "Add Funds",
    desc: "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
  },
  {
    n: "03",
    title: "Select Service",
    desc: "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.",
  },
  {
    n: "04",
    title: "Place your order",
    desc: "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="relative bg-process-gradient py-16 md:py-24 overflow-hidden">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow justify-center mb-3">
            working process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Grow Your <span className="text-primary-500">Socials</span> in 4
            Simple Steps
          </h2>
          <p className="text-ink-light">
            A simple and efficient process designed to deliver fast and
            reliable results. Just place your order, and our system will
            handle the rest to help grow your social media presence smoothly.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-4xl mx-auto">
          {/* center orbit */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-24 w-24">
            <div className="absolute inset-0 rounded-full border border-primary-200" />
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1 -translate-y-1/2 rounded-full bg-primary-500" />
            <span className="absolute right-0 top-1/2 h-2 w-2 translate-x-1 -translate-y-1/2 rounded-full bg-primary-500" />
            <div className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white text-xl font-bold shadow-soft ring-8 ring-white/70">
              H
            </div>
          </div>

          {STEPS.map((s, i) => {
            const hasCard = i === 0 || i === 3;
            const dotCorner = i === 0 ? "-top-3 -left-3" : "-bottom-3 -right-3";
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={hasCard ? { y: -4 } : {}}
                className={`relative ${
                  hasCard
                    ? "rounded-2xl bg-gradient-to-br from-white to-primary-50 p-7 shadow-card overflow-hidden"
                    : "p-7"
                }`}
              >
                {hasCard && (
                  <span
                    className={`absolute ${dotCorner} h-16 w-16 opacity-60`}
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #F98C34 1.5px, transparent 1.5px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                )}
                <p className="relative text-3xl font-extrabold text-primary-500 mb-2">
                  {s.n}
                </p>
                <h3 className="relative text-lg font-bold text-primary-500 mb-2">
                  {s.title}
                </h3>
                <p className="relative text-sm text-ink-light leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
