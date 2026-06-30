import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const CONTACT_EMAIL = "anushkamkulkarni@gmail.com";

function createGmailComposeUrl({
  subject = "",
  body = "",
}: {
  subject?: string;
  body?: string;
} = {}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
  });

  if (subject.trim()) params.set("su", subject.trim());
  if (body.trim()) params.set("body", body.trim());

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactView() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      formState.message,
      "",
      `From: ${formState.name}`,
      `Reply to: ${formState.email}`,
    ].join("\n");

    window.open(createGmailComposeUrl({ subject: formState.subject, body }), "_blank", "noopener,noreferrer");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="h-full bg-space px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="h-8 w-8 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          </div>
          <p className="text-slate-400 text-lg">
            Have a question or opportunity? I'd love to hear from you. Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Info Cards */}
            <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href={createGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-cyan-400 transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a
                    href="tel:+919075789231"
                    className="text-white font-semibold hover:text-cyan-400 transition-colors"
                  >
                    +91-9075789231
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-semibold">India 🌍</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-700">
              <p className="text-sm text-slate-400 mb-4 font-semibold">Connect on Social</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/AnushkaaKulkarni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/anushka-kulkarni-08801a318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Anushka"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="h-5 w-5" />
                Send Message
              </motion.button>
            </form>

            {/* Form Note */}
            <p className="mt-4 text-sm text-slate-400 text-center">
              I typically respond within 24 hours. Looking forward to connecting with you!
            </p>
          </motion.div>
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Currently Available For</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Internships", icon: "🎓" },
              { label: "Freelance Projects", icon: "💼" },
              { label: "Collaborations", icon: "🤝" },
              { label: "Full-time Roles", icon: "🚀" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-700/50 px-4 py-2 border border-cyan-500/30 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
              >
                <span>{item.icon}</span>
                <span className="font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
