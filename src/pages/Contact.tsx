import { motion } from "motion/react";
import React, { useState } from "react";
import {
  Eye, 
  Languages, 
  ClipboardCheck, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const OFFICE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuB9_PRHAfujXA9RYtrr_DgcWD3m0XUdIzehCYvB5z1kmvEc2zHv32QukwtHW0EAAenD3fqoDL9T0bu-0wpemGoIF4qcDxmXlegWzSGypM4oz1hXqztsnfmtjk2iCFn3tiVo59DeForc6YomsswihTmRJQeQC_OBBXOo7L04a9W-i2bRSJNgEobRzw5kw0tYqs9rDRKXQzGBMaMYbZ3FY0G_SY7_HAxL_NMnHEw47c6UkOg6ztEN8BVniQNNBUlT4SLD2vN2MH9f";

import { BOOKING_URL } from "../constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus('error');
      setErrorMessage("Something went wrong. Please try again or email us directly at info@ajyle.ai");
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="pt-24 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-on-surface leading-[1.1]">
            Let's find the right path forward. <span className="text-primary-container">Together.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Working out where AI fits in your business should not feel like guesswork. We give you a clear picture of what is worth doing, what is not, and exactly how to move forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Eye />, title: "Total Clarity", text: "We cut through the noise to show you exactly where AI creates real value." },
              { icon: <Languages />, title: "Plain English", text: "No jargon. Just a straightforward view of what the technology does." },
              { icon: <ClipboardCheck />, title: "Honest Assessment", text: "We tell you what works, what does not, and what is not worth your time." }
            ].map((item) => (
              <div key={item.title} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-headline font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Booking Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-2xl border border-outline-variant/15">
            <h2 className="font-headline text-2xl font-bold mb-6">Book a Free 30-Minute Call</h2>
            <p className="text-on-surface-variant mb-8">Not sure where to start? Book a free call and we will help you figure out the right next step. No preparation needed.</p>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-primary to-primary-container text-white text-center py-4 rounded-lg font-bold font-headline mb-8 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Book a Free 30-Minute Call
            </a>
            <div className="flex items-center gap-3 justify-center text-sm text-on-surface-variant">
              <ShieldCheck size={16} />
              <span>No commitment required. Confidentiality guaranteed.</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Inquiry Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div {...fadeIn} className="lg:col-span-8 bg-surface-container p-8 md:p-12 rounded-xl">
          <div className="max-w-xl">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="font-headline text-3xl font-bold mb-4 text-on-surface">Message Sent!</h2>
                <p className="text-on-surface-variant mb-8">Thanks for getting in touch. We've got your message and we'll be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="font-headline text-3xl font-bold mb-4 text-on-surface">General Inquiry</h2>
                <p className="text-on-surface-variant mb-10">Got a question or not sure where to start? Tell us what you are working on and we will point you in the right direction.</p>
                
                {status === 'error' && (
                  <div className="mb-8 p-4 bg-error/10 border border-error/20 rounded-lg flex items-center gap-3 text-error text-sm">
                    <AlertCircle size={18} />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                      <input 
                        className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:border-primary focus:ring-0 transition-colors outline-none text-on-surface" 
                        placeholder="John Doe" 
                        type="text"
                        required
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                      <input 
                        className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:border-primary focus:ring-0 transition-colors outline-none text-on-surface" 
                        placeholder="john@company.com" 
                        type="email"
                        required
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">How can we help?</label>
                    <textarea 
                      className="w-full bg-transparent border-b border-outline-variant/40 py-2 focus:border-primary focus:ring-0 transition-colors outline-none text-on-surface resize-none" 
                      placeholder="Tell us what you're working on or what's not working yet." 
                      rows={4}
                      required
                      disabled={status === 'submitting'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button 
                    className={`font-headline font-bold text-primary flex items-center gap-2 group ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    type="submit"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Testimonial Image */}
        <motion.div {...fadeIn} className="lg:col-span-4 relative rounded-xl overflow-hidden min-h-[400px] shadow-xl">
          <img src={OFFICE_IMAGE} alt="Office" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent flex flex-col justify-end p-8 text-white">
            <p className="font-headline text-lg font-medium leading-relaxed italic mb-4">
              "I had a brilliant experience with Ajyle AI. Ade was outstanding, patient, knowledgeable, and full of creative energy. I’d highly recommend Ajyle AI."
            </p>
            <p className="text-sm font-bold">Yvonne John</p>
            <p className="text-xs opacity-70">Author of Dreaming of a Life Unlived</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

