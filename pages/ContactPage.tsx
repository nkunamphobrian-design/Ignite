import React, { useState } from 'react';
import { useSeo } from '../hooks/useSeo';

const ContactPage: React.FC = () => {
  useSeo('Contact Us | IgnitePress', 'Get in touch with the team.');

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // This is a dummy submission handler.
    // In a real application, you would replace this with a call to your backend or a service like Formspree.
    console.log('Form data submitted:', formData);

    setTimeout(() => {
      // Simulate a successful submission
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after a few seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="py-12 md:py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-5">
        <div className="max-w-xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-dark dark:text-light tracking-tight leading-tight">Get In Touch</h1>
            <p className="mt-4 text-lg text-gray dark:text-gray-300">Have a question, feedback, or a collaboration idea? We'd love to hear from you.</p>
          </header>

          <div className="bg-white dark:bg-gray-darker p-8 rounded-xl shadow-lg">
            {formStatus === 'success' ? (
              <div className="text-center p-8 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg">
                <i className="fas fa-check-circle text-4xl mb-4"></i>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-light dark:bg-gray-dark border border-gray-light dark:border-gray-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-light dark:bg-gray-dark border border-gray-light dark:border-gray-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-light dark:bg-gray-dark border border-gray-light dark:border-gray-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
