"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    label: "Discord",
    value: "PleaseRestore_",
    icon: (
      /* Discord icon */
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    href: "#",
    color: "#5865f2",
    copyable: true,
    copyValue: "PleaseRestore_",
  },
  {
    label: "Roblox",
    value: "View Profile",
    icon: (
      /* Simple R icon */
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <text x="8" y="17" fontSize="10" fill="#09090f" fontWeight="bold" fontFamily="sans-serif">R</text>
      </svg>
    ),
    href: "https://www.roblox.com/users/3098440605/profile",
    color: "#d4a847",
  },
  {
    label: "LinkedIn",
    value: "Ramon Tuazon Jr.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/rmtuazjr/",
    color: "#0a66c2",
  },
  {
    label: "Viber",
    value: "+63 921 657 6775",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.4 0C5.1.1.5 4.8.5 11.1c0 2.8 1 5.4 2.6 7.4L2 22l3.5-1.1c2 1.3 4.3 2 6.8 2h.1C18.7 22.9 23.5 18 23.5 12 23.5 5.7 18.1.1 11.4 0zm6 16.4c-.3.8-1.4 1.5-2.4 1.7-.6.1-1.5.2-4.3-.9-3.6-1.4-5.9-5-6.1-5.3-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4 1-.4h.7c.3 0 .6.1.9.7l1.2 2.8c.1.2.1.5 0 .7l-.3.5c-.1.2-.3.3-.4.5-.1.2-.3.4-.1.8.2.4.8 1.4 1.6 2.2 1.1 1 2 1.4 2.4 1.6.4.2.6.1.8-.1l.6-.7c.2-.2.4-.2.6-.2.2 0 2.2 1.1 2.6 1.3.4.2.7.3.8.4.1.4.1 1-.2 1.9z" />
      </svg>
    ),
    href: "viber://chat?number=%2B639216576775",
    color: "#7360f2",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #d4a847, transparent 60%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#d4a847] text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="section-heading text-4xl sm:text-5xl font-black text-white">
            Contact <span className="gold-text">Me</span>
          </h2>
          <p className="mt-5 text-white/40 text-sm max-w-md mx-auto">
            Looking to collaborate, hire, or just say hello? Reach out on any platform below.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {contacts.map((c) => (
            <ContactCard key={c.label} contact={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ contact }: { contact: typeof contacts[0] }) {
  return (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      variants={{
        hidden:  { opacity: 0, y: 30, scale: 0.92 },
        visible: { opacity: 1, y: 0,  scale: 1    },
      }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 36px ${contact.color}22, 0 0 16px ${contact.color}11`,
        borderColor: `${contact.color}50`,
        y: -4,
      }}
      whileTap={{ scale: 0.97 }}
      className="glass rounded-xl p-6 border border-white/[0.07] flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-300 group"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${contact.color}18`,
          border: `1px solid ${contact.color}35`,
          color: contact.color,
        }}
      >
        {contact.icon}
      </div>

      <div>
        <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-1">{contact.label}</p>
        <p className="text-white/80 text-sm font-semibold">{contact.value}</p>
      </div>

      {/* Bottom line */}
      <div
        className="w-0 group-hover:w-full h-px transition-all duration-500 rounded"
        style={{ background: `linear-gradient(to right, transparent, ${contact.color}60, transparent)` }}
      />
    </motion.a>
  );
}
