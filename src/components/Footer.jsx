import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const QUICK_LINKS = ["Home", "About Us", "Services", "Blog", "Contact Us", "Terms of Service", "Privacy Policy", "Refund Policy"];
const SERVICE_PAGES = ["Facebook SMM Panel", "Instagram SMM Panel", "YouTube SMM Panel", "TikTok SMM Panel", "Telegram SMM Panel", "X-Twitter SMM Panel"];
const SOCIALS = [FaFacebookF, FaInstagram, FaYoutube, FaXTwitter, FaLinkedinIn];

export default function Footer() {
  return (
    <footer className="relative bg-footer-gradient text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(255,255,255,0.4) 40px, rgba(255,255,255,0.4) 42px)",
        }}
        aria-hidden
      />
      <div className="container-x relative py-14 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="inline-block rounded-lg bg-white px-5 py-2 text-sm font-bold text-primary-500 mb-4">
            LOGO
          </div>
          <p className="text-sm text-white/85 leading-relaxed mb-4 max-w-xs">
            SMM is Bangladesh's most trusted SMM panel. We offer fast,
            affordable social media growth services for every platform, with
            full support for local payments like bKash and Nagad.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#top"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-sm transition-colors hover:bg-white/30"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a href="#top" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services Pages</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {SERVICE_PAGES.map((l) => (
              <li key={l}>
                <a href="#services" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <ul className="space-y-4 text-sm text-white/85">
            <li className="flex items-start gap-3">
              <HiOutlineMail className="mt-0.5 shrink-0" /> info@smmsun.com
            </li>
            <li className="flex items-start gap-3">
              <HiOutlinePhone className="mt-0.5 shrink-0" /> +1 833 252 278
            </li>
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="mt-0.5 shrink-0" />
              Serving all of Bangladesh
              <br />
              Support: 24/7
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/15 py-4 text-center text-xs text-white/80">
        © 2026 SMM Limited. All Rights Reserved. | Operated under the
        Bangladesh ICT framework.
      </div>
    </footer>
  );
}
