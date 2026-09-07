import { motion } from "framer-motion";
import stat1 from "../assets/asset_stat1.webp";
import stat2 from "../assets/asset_stat2.webp";
import stat3 from "../assets/asset_stat3.webp";
import stat4 from "../assets/asset_stat4.webp";

const STATS = [
  { icon: stat1, value: "321,879", label: "Order Processed" },
  { icon: stat2, value: "6,245", label: "Available Services" },
  { icon: stat3, value: "8,552", label: "Registered User" },
  { icon: stat4, value: "#1", label: "Regional Rank" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#F5F5F5] py-10 md:py-14">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-xl bg-white px-4 py-7 text-center shadow-card"
          >
            <img
              src={s.icon}
              alt=""
              className="mx-auto mb-3 h-14 w-14 object-contain"
              loading="lazy"
            />
            <p className="text-2xl font-extrabold text-ink">{s.value}</p>
            <p className="text-sm font-semibold text-primary-500 mt-1">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
