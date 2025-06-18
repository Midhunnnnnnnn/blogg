import type { Metadata } from 'next';
import  ContactForm  from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-8">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        
        <ContactForm />
      </div>
    </div>
  );
}