import { motion } from "framer-motion";
import ctaWoman from "../assets/asset_cta_woman.webp";
import WorldMap from "./WorldMap";

export default function CTA() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-primary-50 px-6 py-12 md:px-14 md:py-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"
        >
          {/* background layer clipped to the rounded box; image sits outside this */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <WorldMap
              className="absolute inset-0 h-full w-full opacity-80"
              color="#F9C79B"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4 leading-snug">
              Ready to Grow Your Social Media{" "}
              <span className="text-primary-500">in Bangladesh?</span>
            </h2>
            <p className="text-ink-light mb-7 max-w-md">
              Join over 68,000 users who are already using SMM to grow faster
              on Facebook, Instagram, YouTube, TikTok, and more. Getting
              started is free and takes less than 60 seconds.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="rounded-lg border border-primary-500 bg-white px-6 py-3 text-sm font-semibold text-primary-500"
              >
                See All Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#signup"
                className="rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Create Free Account
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-20 hidden self-stretch lg:block"
          >
            <img
              src={ctaWoman}
              alt="Grow your social media"
              className="pointer-events-none absolute bottom-0 right-0 h-[135%] max-h-none w-auto max-w-none select-none object-contain object-bottom"
              draggable={false}
              loading="lazy"
            />
          </motion.div>

          {/* mobile: image contained normally, no overflow */}
          <div className="relative z-10 flex justify-center lg:hidden">
            <img
              src={ctaWoman}
              alt="Grow your social media"
              className="w-full max-w-[220px] object-contain select-none"
              draggable={false}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
