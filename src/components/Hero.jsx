import { motion } from "framer-motion";
import heroWoman from "../assets/asset_hero_woman.webp";
import { FaStar } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-hero-gradient pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex items-center gap-2 mb-4 text-sm"
          >
            <FaStar className="text-emerald-500" />
            <span className="flex text-primary-500 gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
            <span className="font-semibold text-ink">Excellent 4.8 out of 5</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.12] mb-5"
          >
            <span className="text-primary-500">Best SMM Panel</span>
            <br />
            <span className="text-ink">in Bangladesh – </span>
            <span className="text-primary-500">Fast ,Safe</span>
            <span className="text-ink"> &amp;</span>
            <br />
            <span className="text-ink">Growth in Social Media.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-ink-light max-w-xl mb-8 leading-relaxed"
          >
            SMM is Bangladesh's most reliable &amp; cheap SMM panel for real
            social media growth. We built this platform for Bangladeshi
            businesses, creators, and agencies. You get fast delivery, safe
            methods, and followers that actually stay. No fake bots. No
            account risks. Just real results. Most panels chase big numbers.
            We focus on keeping those numbers. You get retention guarantees,
            delivery control, and long-term credibility.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="rounded-lg border border-primary-500 bg-white px-7 py-3 font-semibold text-primary-500 shadow-sm"
            >
              View Services
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#signup"
              className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-7 py-3 font-semibold text-white shadow-soft"
            >
              Create an Account
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.img
            src={heroWoman}
            alt="SMM growth illustration"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[520px] select-none drop-shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
