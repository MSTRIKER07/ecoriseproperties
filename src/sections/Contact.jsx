import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealUp from '../components/RevealUp';
import { COMPANY, LAND_REQUIREMENT_OPTIONS } from '../data/content';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const data = getFormData(e.target.closest('form'));
    const msg = `*New Inquiry from Website*%0A%0A*Name:* ${data.fullName}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email}%0A*Requirement:* ${data.requirement || 'Not specified'}%0A%0A*Message:*%0A${data.message}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${msg}`, '_blank');
    e.target.closest('form').reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const data = getFormData(e.target.closest('form'));
    const subject = encodeURIComponent(`Land Inquiry: ${data.requirement || 'General'} — ${data.fullName}`);
    const body = encodeURIComponent(`Name: ${data.fullName}\nPhone: ${data.phone}\nEmail: ${data.email}\nRequirement: ${data.requirement || 'Not specified'}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:${COMPANY.emails[0]}?subject=${subject}&body=${body}`;
    e.target.closest('form').reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-32 bg-offwhite">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-24">
          <RevealUp>
            <h2 className="text-4xl md:text-6xl font-display text-forest mb-6">
              Contact <span className="italic text-gold">Us</span>
            </h2>
          </RevealUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <RevealUp delay={0.2} className="flex flex-col h-full gap-8">
            <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-forest/10">
              <iframe
                title="Google Maps Embed Latur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.49019688487!2d76.5134707!3d18.4032177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83bd7132cd29%3A0x83629bac584ce60!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-gold space-y-6 flex-grow">
              <div className="flex gap-4 items-start">
                <MapPin className="text-gold w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-forest mb-1">Office Address</h4>
                  <p className="text-forest/70">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-gold w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-forest mb-1">Phone</h4>
                  {COMPANY.phones.map((phone, i) => (
                    <p key={i} className="text-forest/70">{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="text-gold w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-forest mb-1">Email</h4>
                  {COMPANY.emails.map((email, i) => (
                    <p key={i} className="text-forest/70">{email}</p>
                  ))}
                </div>
              </div>
            </div>
          </RevealUp>

          <RevealUp delay={0.4} className="h-full">
            <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl h-full border border-forest/10">
              <h3 className="text-3xl font-display font-bold mb-8 text-forest">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-forest/70">Full Name</label>
                    <input name="fullName" required type="text" className="w-full bg-offwhite border border-forest/10 rounded-lg py-3 px-4 outline-none focus:border-gold transition-colors text-forest" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-forest/70">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full bg-offwhite border border-forest/10 rounded-lg py-3 px-4 outline-none focus:border-gold transition-colors text-forest" placeholder="+91 90000 00000" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-forest/70">Email Address</label>
                  <input name="email" required type="email" className="w-full bg-offwhite border border-forest/10 rounded-lg py-3 px-4 outline-none focus:border-gold transition-colors text-forest" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-forest/70">Land Requirement</label>
                  <select name="requirement" className="w-full bg-offwhite border border-forest/10 rounded-lg py-3 px-4 outline-none focus:border-gold transition-colors text-forest">
                    <option value="">Select an option</option>
                    {LAND_REQUIREMENT_OPTIONS.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-forest/70">Message</label>
                  <textarea name="message" required rows="4" className="w-full bg-offwhite border border-forest/10 rounded-lg py-3 px-4 outline-none focus:border-gold transition-colors text-forest resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full text-center py-3 px-4 rounded-lg text-sm font-semibold"
                    style={{ backgroundColor: 'rgba(52,211,153,0.12)', color: '#0F6E56', border: '1px solid rgba(52,211,153,0.3)' }}
                  >
                    ✓ Message sent! We'll get back to you shortly.
                  </motion.div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-colors shadow-lg"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={handleEmail}
                    className="flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-colors shadow-lg"
                    style={{ backgroundColor: '#0F6E56' }}
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </motion.button>
                </div>
              </form>
            </div>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
