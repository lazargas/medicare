'use client';
import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  children: React.ReactNode[];
  visibleCards?: number;
  autoSlide?: boolean;
  slideInterval?: number; // in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  visibleCards = 1,
  autoSlide = false,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const totalChildren = React.Children.count(children);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + totalChildren) % totalChildren
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const timer = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(timer); // Clean up on unmount or when autoSlide changes
  }, [autoSlide, slideInterval]);

  const variants = {
    enter: (direction: 1 | -1) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 1 | -1) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const visibleItems = Array.from({ length: visibleCards }).map((_, index) => {
    const itemIndex = (currentIndex + index) % totalChildren;
    return React.Children.toArray(children)[itemIndex];
  });

  return (
    <div style={{ position: 'relative', width: '100%',height:"100%", overflow: 'hidden', padding: '1.5rem' }}>
      <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
        <AnimatePresence initial={false} custom={direction}>
          {visibleItems.map((child, index) => (
            <motion.div
              key={(currentIndex + index) % totalChildren}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{
                flex: '0 0 auto',
                width: `${100 / visibleCards}%`,
              }}
            >
              {child}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={handlePrev}
        style={{ position: 'absolute', top: '50%', left: -36, transform: 'translateY(-50%)', rotate: '90deg' }}
      >
        <svg width="60" height="30" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.932 5.748L10.036 4.632L14.56 9.204L19.084 4.632L20.188 5.748L14.56 11.388L8.932 5.748Z" fill="black" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        style={{ position: 'absolute', top: '46%', right: -17, transform: 'translateY(-50%)', rotate: '-90deg' }}
      >
        <svg width="60" height="30" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.932 5.748L10.036 4.632L14.56 9.204L19.084 4.632L20.188 5.748L14.56 11.388L8.932 5.748Z" fill="black" />
        </svg>
      </button>
    </div>
  );
};

export default memo(Carousel);
