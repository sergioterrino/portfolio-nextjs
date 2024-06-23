export const transitionVariantsPage = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

export const fadeIn = (position: string) => {
  return {
      visible: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
              type: "tween",
              duration: 1.4,
              delay: 0.5,
              ease: [0.25, 0.25, 0.25, 0.75],
          },
      },
      hidden: {
          y: position === 'bottom' ? 80 : -80,
          x: position === 'right' ? 80 : 0,
          opacity: 0,
          transition: {
              type: "tween",
              duration: 0.5,
              delay: 0.5,
              ease: [0.25, 0.25, 0.25, 0.25],
          },
      },

  };
};