'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Codepen, Terminal, CheckCircle2, Loader2 } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const container = useRef(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset after showing success message
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        '.section-header',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
          }
        }
      );

      // Content Animation
      gsap.from('.contact-element', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  return (
    <section id="contact" className="w-full py-20 bg-[#0f172a] text-slate-200" ref={container}>
      <div className="container px-4 md:px-6">
        
        {/* Section Header */}
        <div className="section-header flex items-center gap-4 mb-16 max-w-6xl mx-auto">
          <span className="font-mono text-purple-400 text-xl font-bold">05</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold flex gap-2">
            <span className="text-purple-400">&lt;</span>
            <span className="text-cyan-400">Contact</span>
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info */}
          <div className="contact-element flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="font-mono text-2xl font-bold text-slate-100">
                Let's <span className="text-purple-400">connect</span>.
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e293b] border border-slate-700 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm text-slate-500 mb-1">Email</h4>
                  <a href={`mailto:${portfolioData.email}`} className="text-lg font-medium text-slate-200 hover:text-purple-400 transition-colors">
                    {portfolioData.email || 'rupaparavruti@gmail.com'}
                  </a>
                </div>
              </div>

        
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e293b] border border-slate-700 text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.2)] transition-all duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-mono text-sm text-slate-500 mb-1">Location</h4>
                  <span className="text-lg font-medium text-slate-200">
                    {portfolioData.location || 'Gandhinagar'}
                  </span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4">
              <h4 className="font-mono text-sm text-slate-500 mb-4">// Find me on</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, url: 'https://github.com/Vruti26', color: 'hover:text-white hover:bg-slate-800 hover:border-slate-600' },
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/vruti-rupapara', color: 'hover:text-blue-400 hover:bg-blue-900/20 hover:border-blue-800' },
                  { icon: Codepen, url: 'https://codepen.io/Vruti26', color: 'hover:text-sky-400 hover:bg-sky-900/20 hover:border-sky-800' }
                ].map((social, idx) => (
                  <Link 
                    key={idx}
                    href={social.url}
                    target="_blank"
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-[#1e293b] text-slate-400 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-element">
            <div className="relative rounded-2xl border border-slate-700 bg-[#1e293b]/50 backdrop-blur-sm p-1 shadow-2xl">
              
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-[#1e293b] rounded-t-xl">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-2 flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Terminal className="h-3 w-3" />
                  <span>sendMessage.js</span>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-4 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-cyan-400 ml-1">var name =</label>
                      <input 
                        type="text" 
                        required
                        placeholder='"Sanne Joshi"'
                        className="w-full rounded-lg border border-slate-700 bg-[#0f172a] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-cyan-400 ml-1">var email =</label>
                      <input 
                        type="email" 
                        required
                        placeholder='"sanne@example.com"'
                        className="w-full rounded-lg border border-slate-700 bg-[#0f172a] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-400 ml-1">var subject =</label>
                    <input 
                      type="text" 
                      required
                      placeholder='"Project Inquiry"'
                      className="w-full rounded-lg border border-slate-700 bg-[#0f172a] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-400 ml-1">var message =</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder='"Hello, I would like to discuss..."'
                      className="w-full resize-none rounded-lg border border-slate-700 bg-[#0f172a] px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`w-full py-6 font-mono text-sm font-bold transition-all duration-300 ${
                      formStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-[0_0_20px_rgba(192,132,252,0.3)]'
                    }`}
                  >
                    {formStatus === 'idle' && (
                      <span className="flex items-center gap-2">
                        Execute Send <Send className="h-4 w-4" />
                      </span>
                    )}
                    {formStatus === 'submitting' && (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                      </span>
                    )}
                    {formStatus === 'success' && (
                      <span className="flex items-center gap-2">
                        Message Sent <CheckCircle2 className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}