import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
  FaTelegramPlane,
  FaDiscord,
  FaSpotify,
  FaSoundcloud,
  FaSnapchatGhost,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import fbRocket from "../assets/asset_fb_rocket.webp";

const PLATFORMS = [
  { name: "Facebook", icon: FaFacebookF, color: "#1877F2" },
  { name: "Instagram", icon: FaInstagram, color: "#E1306C" },
  { name: "X (Twitter)", icon: FaXTwitter, color: "#111111" },
  { name: "YouTube", icon: FaYoutube, color: "#FF0000" },
  { name: "TikTok", icon: FaTiktok, color: "#111111" },
  { name: "LinkedIn", icon: FaLinkedinIn, color: "#0A66C2" },
  { name: "Telegram", icon: FaTelegramPlane, color: "#26A5E4" },
  { name: "Discord", icon: FaDiscord, color: "#5865F2" },
  { name: "Spotify", icon: FaSpotify, color: "#1DB954" },
  { name: "SoundCloud", icon: FaSoundcloud, color: "#FF7700" },
  { name: "Snapchat", icon: FaSnapchatGhost, color: "#FFFC00" },
  { name: "Website Traffic", icon: FaGlobe, color: "#EA6C1C" },
];

const FB_SERVICES = [
  { title: "Facebook  Post Likes", desc: "Boost post engagement and credibility with real likes." },
  { title: "Facebook Likes", desc: "Grow your page popularity with high-quality likes." },
  { title: "Facebook Comments", desc: "Increase interaction with engaging comments." },
  { title: "Facebook Shares", desc: "Expand your reach with powerful shares." },
  { title: "Facebook Video Views", desc: "Get more visibility with high-retention video views." },
  { title: "Facebook Reactions", desc: "Make your posts more engaging with diverse reactions." },
];

export default function Services() {
  const [active, setActive] = useState("Facebook");

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-eyebrow justify-center mb-3">our services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Powerful <span className="text-primary-500">SMM Services</span> for Fast Growth
          </h2>
          <p className="text-ink-light">
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major
            platforms. From Facebook to TikTok, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon;
            const isActive = active === p.name;
            return (
              <motion.button
                key={p.name}
                onClick={() => setActive(p.name)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-soft"
                    : "bg-primary-50 text-ink hover:bg-primary-100"
                }`}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white text-xs"
                  style={{ backgroundColor: isActive ? "rgba(255,255,255,0.25)" : p.color }}
                >
                  <Icon />
                </span>
                {p.name}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-primary-200 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="rounded-xl overflow-hidden bg-gradient-to-b from-primary-50 to-primary-100">
              <img
                src={fbRocket}
                alt={`${active} marketing`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-500 mb-3">
                {active} Marketing Services
              </h3>
              <p className="text-ink-light mb-5">
                Boost your brand visibility, connect with your ideal audience,
                and drive more traffic, engagement, and sales through
                strategic {active} marketing campaigns.
              </p>
              <ul className="space-y-3 mb-6">
                {FB_SERVICES.map((s, i) => (
                  <li key={s.title} className="flex gap-3 text-sm">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 text-white text-[11px] font-bold"
                      style={{
                        clipPath:
                          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-ink-light">
                      <span className="font-semibold text-primary-500">{s.title}</span>
                      {"- "}
                      {s.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-soft"
              >
                View {active} Services
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
