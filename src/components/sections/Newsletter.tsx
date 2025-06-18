'use client';

import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Join the Newsletter</h2>
      <p className="text-muted-foreground mb-6">
        Get the latest posts and updates straight to your inbox.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Subscribed with ${email}`);
          setEmail('');
        }}
        className="flex justify-center gap-4 max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  );
}
