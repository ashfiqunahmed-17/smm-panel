import { motion } from "framer-motion";
import {
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaApplePay,
  FaPaypal,
} from "react-icons/fa";
import { SiSepa } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";
import WorldMap from "./WorldMap";

const ICONS = [
  { Icon: SiSepa, style: { top: "34%", left: "40%" } },
  { Icon: FaCcVisa, style: { top: "18%", left: "50%" }, big: true },
  { Icon: FaCcMastercard, style: { top: "34%", left: "60%" } },
  { Icon: FaGooglePay, style: { top: "58%", left: "35%" } },
  { Icon: BsBoxSeam, style: { top: "58%", left: "65%" } },
  { Icon: FaPaypal, style: { top: "78%", left: "32%" } },
  { Icon: FaApplePay, style: { top: "78%", left: "68%" } },
];

export default function PaymentMethods() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow justify-center mb-3">
            Payment Methods
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
            Multiple Payment <span className="text-primary-500">Methods</span>
          </h2>
          <p className="text-ink-light">
            We accept Visa, Mastercard, American Express, Bkash, Nagad,
            Rocket, and more, so you are never stuck at checkout. Deposits are
            instant, and you can start with as little as $1, which means
            there is no reason to wait before placing your first order.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl h-[280px] md:h-[340px]">
          {/* world map silhouette background */}
          <WorldMap
            className="absolute inset-0 h-full w-full opacity-90"
            color="#F9C79B"
          />

          {/* arcs */}
          {[220, 170].map((size, i) => (
            <div
              key={size}
              className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-t-full border border-primary-100 bg-white/40"
              style={{ width: size * 2, height: size }}
            />
          ))}

          {ICONS.map(({ Icon, style, big }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.08 }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white shadow-card ${
                big ? "h-16 w-16 text-3xl" : "h-14 w-14 text-2xl"
              }`}
              style={style}
            >
              <Icon className="text-primary-600" />
            </motion.div>
          ))}
        </div>

        <p className="select-none text-center font-extrabold text-primary-100 text-[13vw] md:text-[6.5rem] leading-none -mb-6 md:-mb-10 tracking-wide">
          MULTIPLE PAYMENTS
        </p>
      </div>
    </section>
  );
}
