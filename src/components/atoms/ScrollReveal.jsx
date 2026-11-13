import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 28,
  scale = 1,
  once = true,
  amount = 0.15,
  className = '',
  as = 'div',
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Compute offset based on direction
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction] || { y: distance, x: 0 };

  // Static fallback for SSG and initial render (keeps SEO text fully rendered)
  if (!isClient) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'none']),
  delay: PropTypes.number,
  duration: PropTypes.number,
  distance: PropTypes.number,
  scale: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  as: PropTypes.string,
};

ScrollReveal.defaultProps = {
  direction: 'up',
  delay: 0,
  duration: 0.65,
  distance: 28,
  scale: 1,
  once: true,
  amount: 0.15,
  className: '',
  as: 'div',
};

export default ScrollReveal;
