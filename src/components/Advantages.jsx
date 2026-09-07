import { motion } from "framer-motion";
import adv1 from "../assets/asset_adv1.webp";
import adv2 from "../assets/asset_adv2.webp";
import adv3 from "../assets/asset_adv3.webp";
import adv4 from "../assets/asset_adv4.webp";

const ITEMS = [
  {
    icon: adv1,
    title: "We Never Ask for Your Password",
    desc: "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see.",
    highlight: "Zero security risk.",
  },
  {
    icon: adv2,
    title: "We Use Real Users, Not Bots",
    desc: "This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when bans happen.",
  },
  {
    icon: adv3,
    title: "We Deliver Gradually",
    desc: "Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.",
  },
  {
    icon: adv4,
    title: "Our Track Record",
    desc: "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.",
  },
];

export default function Advantages() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary-100 blur-2xl opacity-60"
        aria-hidden
      />
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow justify-center mb-3">
            advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Advantages of using{" "}
            <span className="text-primary-500">our panel services</span>
          </h2>
          <p className="text-ink-light">
            Find clear and simple explanations to the most common questions
            about our services, payments, orders, and account management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-6 shadow-card"
            >
              <img src={it.icon} alt="" className="h-14 w-14 object-contain mb-4" loading="lazy" />
              <h3 className="font-bold text-ink mb-2">{it.title}</h3>
              <p className="text-sm text-ink-light leading-relaxed">
                {it.desc}{" "}
                {it.highlight && (
                  <span className="font-semibold text-emerald-600">
                    {it.highlight}
                  </span>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
