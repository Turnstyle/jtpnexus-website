'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Building, Phone, MessageSquare, Send } from 'lucide-react'; // Icons

interface ContactSalesFormData {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export default function ContactSalesPage() {
  const [formData, setFormData] = useState<ContactSalesFormData>({ 
    fullName: "", 
    email: "", 
    company: "", 
    phone: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact-sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ message: result.message || "Message sent successfully!", type: 'success' });
        setFormData({ fullName: "", email: "", company: "", phone: "", message: "" }); // Reset form
      } else {
        const errorMsg = result.errors ? 
                         Object.values(result.errors).flat().join('; ') : 
                         (result.message || 'Submission failed. Please try again.');
        setSubmitStatus({ message: `Error: ${errorMsg}`, type: 'error' });
      }
    } catch (error) {
      console.error('Contact Sales Fetch Error:', error);
      setSubmitStatus({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-slate-100 font-sans flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-2xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Contact Our Team
        </h1>
        <p className="text-lg sm:text-xl text-slate-400">
          Have questions or want to discuss how RIA Hunter can help your business? Fill out the form below.
        </p>
      </header>

      <main className="w-full max-w-2xl bg-slate-800/70 p-8 md:p-10 rounded-xl shadow-2xl border border-slate-700/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              <Input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} required className="pl-10 w-full bg-slate-700 border-slate-600 placeholder-slate-500 text-slate-100 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              <Input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="pl-10 w-full bg-slate-700 border-slate-600 placeholder-slate-500 text-slate-100 focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              <Input type="text" name="company" placeholder="Company (Optional)" value={formData.company} onChange={handleChange} className="pl-10 w-full bg-slate-700 border-slate-600 placeholder-slate-500 text-slate-100 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              <Input type="tel" name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="pl-10 w-full bg-slate-700 border-slate-600 placeholder-slate-500 text-slate-100 focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
            <Textarea name="message" placeholder="Your Message * (At least 10 characters)" value={formData.message} onChange={handleChange} required minLength={10} className="pl-10 w-full min-h-[120px] bg-slate-700 border-slate-600 placeholder-slate-500 text-slate-100 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          {submitStatus && (
            <p className={`text-sm font-medium p-3 rounded-md ${submitStatus.type === 'success' ? 'bg-green-600/20 text-green-300' : 'bg-red-600/20 text-red-300'}`}>
              {submitStatus.message}
            </p>
          )}

          <div className="pt-2">
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3.5 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 text-base" disabled={isSubmitting}>
              <Send className="h-5 w-5" /> 
              <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
            </Button>
          </div>
        </form>
      </main>
      
      <footer className="w-full max-w-2xl text-center mt-12 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} John T. Peters. All Rights Reserved.</p>
         <p className="mt-2">
          <a href="/" className="hover:text-purple-400 transition-colors">Back to Main Site</a>
        </p>
      </footer>
    </div>
  );
} 