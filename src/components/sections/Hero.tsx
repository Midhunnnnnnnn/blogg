'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to My Blog
        </h1>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
          Insights, tutorials, and updates on modern web development.
        </p>
      </motion.p>
    </section>
  );
}