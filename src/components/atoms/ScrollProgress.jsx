import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress({
  color = '#7E6852',
  height = 3,
  className = '',
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      style={{
        scaleX,
        height,
        backgroundColor: color,
        transformOrigin: '0%',
      }}
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

ScrollProgress.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  className: PropTypes.string,
};

ScrollProgress.defaultProps = {
  color: '#7E6852',
  height: 3,
  className: '',
};

export default ScrollProgress;
