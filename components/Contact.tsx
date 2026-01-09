
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's build <br /><span className="text-gradient">something great.</span></h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            Whether you have a fully fleshed-out design or just a rough idea, 
            I'm here to help bring your mobile app dreams to life. Reach out and let's discuss your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                <p className="font-medium text-slate-200">contact@ashik.dev</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Location</p>
                <p className="font-medium text-slate-200">Dhaka, Bangladesh (Remote Available)</p>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-1">Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Ashikur Rahman" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-1">Email</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="ashik@example.com" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-200"
              />
            </div>
          </div>
          <div className="space-y-2 mb-8 relative z-10">
            <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
            <textarea 
              required
              rows={5}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your amazing app idea..." 
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-slate-200"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className="w-full flutter-gradient py-4 rounded-xl text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 relative z-10"
          >
            {status === 'idle' && 'Send Message'}
            {status === 'sending' && <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
            {status === 'sent' && 'Message Received! ✨'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
