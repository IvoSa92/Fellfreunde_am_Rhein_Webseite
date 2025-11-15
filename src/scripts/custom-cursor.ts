// Custom Cursor mit Pfotenabdruck-Theme
// Modern, performant und accessibility-freundlich

export function initCustomCursor() {
  // Prüfe, ob auf Touch-Gerät (Custom Cursor nur für Desktop)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    return; // Kein Custom Cursor auf Mobile/Tablet
  }

  // Prüfe, ob Nutzer reduzierte Bewegungen bevorzugt
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return; // Kein Custom Cursor wenn reduzierte Bewegungen bevorzugt
  }

  // Erstelle Cursor-Elemente (falls noch nicht vorhanden)
  let cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
  let cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

  if (!cursorDot || !cursorOutline) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';

    cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
  }

  // Cursor-Position mit RequestAnimationFrame für Performance
  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  // Mouse Move Handler
  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot folgt sofort
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  };

  // Smooth Follow für Outline mit RequestAnimationFrame
  const animateOutline = () => {
    // Easing für smooth follow
    const delay = 0.1;
    outlineX += (mouseX - outlineX) * delay;
    outlineY += (mouseY - outlineY) * delay;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  };

  // Hover-Effekte für interaktive Elemente
  const interactiveElements = 'a, button, input, textarea, select, [role="button"], .faq-button';

  const handleMouseEnter = () => {
    cursorDot.classList.add('cursor-hover');
    cursorOutline.classList.add('cursor-hover');
  };

  const handleMouseLeave = () => {
    cursorDot.classList.remove('cursor-hover');
    cursorOutline.classList.remove('cursor-hover');
  };

  // Event Listeners hinzufügen
  document.addEventListener('mousemove', handleMouseMove);

  document.querySelectorAll(interactiveElements).forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
  });

  // Cursor ausblenden wenn Maus den Viewport verlässt
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
  });

  // Starte Animation
  animateOutline();
}

// Cleanup für View Transitions
export function cleanupCustomCursor() {
  // Event Listeners werden automatisch entfernt bei Page Transition
  // Cursor-Elemente bleiben im DOM für Performance
}
