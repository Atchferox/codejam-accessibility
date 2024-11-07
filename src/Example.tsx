import { Variants, motion } from 'framer-motion';
import { useState } from 'react';

const variants: Variants = {
  clicked: { rotate: 135, borderRadius: '50%' },
  notSoClicked: { rotate: 0, borderRadius: '5%' },
};

export const Example = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="flex items-center justify-center h-[30vw] w-[30vw] bg-white text-purple-500 cursor-pointer"
      onClick={() => setIsClicked(!isClicked)}
      animate={isClicked ? 'notSoClicked' : 'clicked'}
      variants={variants}
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 800, damping: 25, mass: 5 }}
    >
      <h1>Framer motion</h1>{' '}
    </motion.div>
  );
};
