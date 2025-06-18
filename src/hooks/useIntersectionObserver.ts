'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { freezeOnceVisible = false, ...observerOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<HTMLElement | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);
      },
      observerOptions
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [observerOptions.threshold, observerOptions.root, observerOptions.rootMargin, frozen]);

  return {
    ref: elementRef,
    isIntersecting,
    entry,
  };
}

export function useScrollAnimation() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return {
    ref,
    isVisible: isIntersecting,
    className: isIntersecting ? 'animate-on-scroll visible' : 'animate-on-scroll',
  };
}