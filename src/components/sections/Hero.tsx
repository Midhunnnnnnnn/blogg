'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      // Create floating particles
      const particles: HTMLDivElement[] = [];
      if (backgroundRef.current) {
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(96, 165, 250, 0.3);
            border-radius: 50%;
            pointer-events: none;
          `;
          backgroundRef.current.appendChild(particle);
          particles.push(particle);
          particlesRef.current.push(particle);

          // Random initial position
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5
          });

          // Floating animation
          gsap.to(particle, {
            duration: Math.random() * 20 + 10,
            x: `+=${Math.random() * 400 - 200}`,
            y: `+=${Math.random() * 400 - 200}`,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            ease: "none"
          });

          // Fade in/out animation
          gsap.to(particle, {
            duration: Math.random() * 3 + 2,
            opacity: Math.random() * 0.7 + 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          });
        }
      }

      // Main entrance animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      // Title animation with letter-by-letter reveal
      if (titleRef.current) {
        const titleChars = titleRef.current.textContent?.split('') || [];
        titleRef.current.innerHTML = titleChars.map((char: string) => 
          char === ' ' ? ' ' : `<span class="char">${char}</span>`
        ).join('');

        const chars = titleRef.current.querySelectorAll('.char');
        
        tl.to(titleRef.current, {
          duration: 0.6,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "back.out(1.7)"
        })
        .to(chars, {
          duration: 0.05,
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.02,
          ease: "back.out(2)"
        }, "-=0.3")
        .to(subtitleRef.current, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out"
        }, "-=0.4");

        // Parallax scroll effects
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Title parallax
            gsap.to(titleRef.current, {
              duration: 0.3,
              y: progress * -50,
              scale: 1 - progress * 0.1,
              opacity: 1 - progress * 0.5,
              ease: "none"
            });

            // Subtitle parallax
            gsap.to(subtitleRef.current, {
              duration: 0.3,
              y: progress * -30,
              opacity: 1 - progress * 0.7,
              ease: "none"
            });

            // Particles movement
            particlesRef.current.forEach((particle, index) => {
              gsap.to(particle, {
                duration: 0.3,
                y: `+=${progress * (index % 2 === 0 ? -20 : 20)}`,
                opacity: (1 - progress) * 0.5,
                ease: "none"
              });
            });
          }
        });

        // Mouse move parallax effect
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const xPercent = (clientX / innerWidth - 0.5) * 2;
          const yPercent = (clientY / innerHeight - 0.5) * 2;

          gsap.to(titleRef.current, {
            duration: 0.5,
            x: xPercent * 10,
            y: yPercent * 5,
            rotationY: xPercent * 2,
            rotationX: -yPercent * 2,
            ease: "power2.out"
          });

          gsap.to(subtitleRef.current, {
            duration: 0.7,
            x: xPercent * 5,
            y: yPercent * 3,
            ease: "power2.out"
          });

          // Move particles based on mouse
          particlesRef.current.forEach((particle, index) => {
            const multiplier = (index % 3) + 1;
            gsap.to(particle, {
              duration: 0.8,
              x: `+=${xPercent * multiplier * 2}`,
              y: `+=${yPercent * multiplier * 2}`,
              ease: "power2.out"
            });
          });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Continuous title animation
        const continuousAnimation = () => {
          gsap.to(titleRef.current, {
            duration: 4,
            rotationY: 2,
            rotationX: 1,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });

          gsap.to(chars, {
            duration: 0.1,
            color: "#60a5fa",
            stagger: {
              each: 0.1,
              repeat: -1,
              yoyo: true
            },
            ease: "power2.inOut"
          });
        };

        setTimeout(continuousAnimation, 2000);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative py-32 text-center min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textShadow: '0 0 30px rgba(96, 165, 250, 0.3)'
          }}
        >
          Welcome to My Blog
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}
        >
          Insights, tutorials, and updates on modern web development.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        .char {
          display: inline-block;
          opacity: 0;
          transform: translateY(50px) rotateX(-90deg);
        }
        
        .particle {
          will-change: transform, opacity;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .particle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}