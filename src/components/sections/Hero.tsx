'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Blog
      </motion.h1>
      <motion.p
        className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Insights, tutorials, and updates on modern web development.
      </motion.p>
    </section>
  );
}