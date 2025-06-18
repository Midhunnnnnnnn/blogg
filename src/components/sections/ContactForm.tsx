'use client';

import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-border rounded-md bg-background text-foreground"
          required
        />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
