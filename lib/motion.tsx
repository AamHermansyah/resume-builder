export const splashVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: .5,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideInVariants = (dir: 'left' | 'right') => ({
  hidden: {
    x: dir === 'left' ? '-100%' : '100%',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
});