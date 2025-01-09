"use client"
import { useEffect, useRef, useState } from 'react';

type Props = {
    children?:any;
}

const StickySection = ({ children }:Props) => {
  const stickyRef = useRef(null);
  const containerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const stickyElement = stickyRef.current;
    const containerElement = containerRef.current;

    if (!stickyElement || !containerElement) return;

    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      { threshold: 1 }
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsSticky(false);
        }
      },
      { threshold: 0 }
    );

    // Observe both the top and bottom of the container
    topObserver.observe(containerElement);
    bottomObserver.observe(containerElement);

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={stickyRef}
        className={`
          hidden md:block
          ${isSticky ? 'fixed top-0' : 'relative'}
          w-full max-w-[inherit]
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default StickySection;