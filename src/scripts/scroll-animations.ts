// Scroll Animations mit Intersection Observer
// Modern, performant und accessibility-freundlich

export function initScrollAnimations() {
  // Prüfe, ob Nutzer reduzierte Bewegungen bevorzugt
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Wenn reduzierte Bewegungen bevorzugt werden, zeige Elemente direkt an
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('animate-in');
    });
    return;
  }

  // Intersection Observer für Scroll-Animationen
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1, // Element muss zu 10% sichtbar sein
    rootMargin: '0px 0px -50px 0px', // Leichter Offset von unten
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;

        // Verzögerung aus data-delay Attribut lesen
        const delay = target.dataset.delay || '0';

        // Animation mit Verzögerung anwenden
        setTimeout(() => {
          target.classList.add('animate-in');
        }, parseInt(delay));

        // Nach Animation nicht mehr beobachten (Performance)
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  // Alle Elemente mit data-animate Attribut beobachten
  const animatedElements = document.querySelectorAll('[data-animate]');

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

// Cleanup-Funktion für View Transitions
export function cleanupScrollAnimations() {
  // Entferne alle animate-in Klassen für neue Navigation
  document.querySelectorAll('.animate-in').forEach((el) => {
    el.classList.remove('animate-in');
  });
}
