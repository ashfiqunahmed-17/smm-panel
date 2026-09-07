import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const FAQS = [
  {
    q: "Is buying followers legal in Bangladesh?",
    a: "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe.",
  },
  { q: "How long does delivery take?", a: "Most orders start within a few minutes and complete gradually over hours to a few days, depending on the service and quantity you choose." },
  { q: "Can I order daily?", a: "Yes, you can place orders as often as you like. Many clients place small recurring orders to keep growth looking natural." },
  { q: "Will engagement drop?", a: "Some natural fluctuation is normal on any platform. We deliver gradually and use real users to keep engagement stable over time." },
  { q: "What if service is not delivered?", a: "If an order isn't completed, our support team will investigate and either complete delivery or refund the balance to your wallet." },
  { q: "Is Drip feed safer?", a: "Yes, drip-feed delivery spreads your order out over time, mimicking organic growth patterns and reducing any risk of flags." },
  { q: "Can agencies resell services?", a: "Absolutely. We offer reseller-friendly pricing and API access so agencies can resell our services under their own brand." },
  { q: "Which platform is best for business in BD?", a: "Facebook remains the most widely used platform for businesses in Bangladesh, though Instagram and TikTok are growing fast for younger audiences." },
];

function FaqItem({ item, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border-l-4 overflow-hidden transition-colors ${
        isOpen
          ? "border-primary-700 bg-gradient-to-r from-primary-500 to-primary-600 text-white"
          : "border-primary-300 bg-[#F3F3F4] text-ink"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-sm md:text-base"
      >
        {item.q}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <HiChevronDown className={isOpen ? "text-white" : "text-ink"} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-4 text-sm leading-relaxed text-white/90">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const col1 = FAQS.slice(0, 4);
  const col2 = FAQS.slice(4);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow justify-center mb-3">faq</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Frequently Asked <span className="text-primary-500">Questions</span>
          </h2>
          <p className="text-ink-light">
            Find clear and simple explanations to the most common questions
            about our services, payments, orders, and account management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            {col1.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {col2.map((item, i) => {
              const idx = i + col1.length;
              return (
                <FaqItem
                  key={item.q}
                  item={item}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
