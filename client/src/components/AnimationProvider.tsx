import { useEffect, useRef } from 'react';

/**
 * AnimationProvider - Handles page load animations and mouse movement effects
 * Features:
 * - Fade-in animations on page load
 * - Parallax effect on mouse movement
 * - Cursor glow effect
 * - Intersection Observer for section animations
 */

export function usePageLoadAnimation() {
  useEffect(() => {
    // Animate all elements with data-animate on page load
    const animateElements = document.querySelectorAll('[data-animate]');
    
    animateElements.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'all 0.8s ease-out';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, []);
}

export function useMouseParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Move decorative elements based on mouse position
      const decorElements = containerRef.current.querySelectorAll('[data-parallax]');
      decorElements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.parallax || '1');
        const moveX = (x - 0.5) * 20 * depth;
        const moveY = (y - 0.5) * 20 * depth;
        
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return containerRef;
}

export function useIntersectionAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateOnScroll = document.querySelectorAll('[data-scroll-animate]');
    animateOnScroll.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = 'all 0.8s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export function useCursorGlow() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.position = 'fixed';
    cursor.style.width = '40px';
    cursor.style.height = '40px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid #00ff00';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.opacity = '0.5';
    cursor.style.boxShadow = '0 0 20px #00ff00, inset 0 0 20px #00ff00';
    cursor.style.display = 'none';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.display = 'block';
      cursor.style.left = e.clientX - 20 + 'px';
      cursor.style.top = e.clientY - 20 + 'px';
    };

    const handleMouseLeave = () => {
      cursor.style.display = 'none';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cursor.remove();
    };
  }, []);
}
