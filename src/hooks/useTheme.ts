'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('useTheme: Initial mount effect running');
    setMounted(true);
    
    const stored = localStorage.getItem('theme') as Theme;
    console.log('useTheme: Stored theme:', stored);
    
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    console.log('useTheme: Theme effect running', { theme, mounted });
    
    if (!mounted) return;

    const root = document.documentElement;
    console.log('useTheme: Root element found:', root);
    
    // Remove existing theme classes and attributes
    root.classList.remove('light', 'dark');
    root.removeAttribute('data-theme');
    console.log('useTheme: Removed existing classes and attributes');
    
    let effectiveTheme = theme;
    
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
      console.log('useTheme: System theme detected as:', effectiveTheme);
    }
    
    // ONLY apply the class (since Tailwind config uses darkMode: 'class')
    root.classList.add(effectiveTheme);
    
    console.log('useTheme: Applied theme class:', effectiveTheme);
    console.log('useTheme: HTML classes:', root.className);
    
    // Store the user's preference (not the effective theme)
    localStorage.setItem('theme', theme);
    
    // Listen for system theme changes when in system mode
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        root.classList.remove('light', 'dark');
        root.classList.add(newSystemTheme);
        console.log('useTheme: System theme changed to:', newSystemTheme);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('useTheme: Toggling theme from:', theme);
    setTheme(current => {
      const next = current === 'light' ? 'dark' : current === 'dark' ? 'system' : 'light';
      console.log('useTheme: New theme will be:', next);
      return next;
    });
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
  };
}