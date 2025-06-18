'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
  smoothWheel: true,
  duration: 1.2, // optional, controls inertia
});


    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    // ScrollTrigger needs to know Lenis controls scroll
    ScrollTrigger.scrollerProxy(document.body, {
   scrollTop(value) {
  if (
    typeof value === 'number' ||
    typeof value === 'string' ||
    (value && typeof value === 'object' && 'nodeType' in value)
  ) {
    lenis.scrollTo(value);
  }


  return window.scrollY;
},

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.defaults({ scroller: document.body });

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return null;
}
