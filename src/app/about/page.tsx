import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About me and my blog',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-4">
          Hi there! I'm a web developer and technical writer passionate about creating 
          user-friendly web applications and sharing knowledge with the community.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">My Background</h2>
        <p className="mb-4">
          I've been working in web development for over 5 years, specializing in 
          React, Next.js, and TypeScript. I love building performant, accessible, 
          and beautiful web applications.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">My Skills</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Frontend Development (React, Next.js, TypeScript)</li>
          <li>UI/UX Design</li>
          <li>Backend Development (Node.js, Express)</li>
          <li>Database Design (MongoDB, PostgreSQL)</li>
          <li>Technical Writing</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">About This Blog</h2>
        <p className="mb-4">
          This blog is my platform to share insights, tutorials, and thoughts about 
          web development, design, and technology. I write about topics I'm passionate 
          about and hope to help others learn and grow in their development journey.
        </p>
        
        <p className="mb-4">
          Feel free to <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact me</a> if 
          you have any questions or just want to say hello!
        </p>
      </div>
    </div>
  );
}