import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSpringRef, useTransition } from 'react-spring';

export const useAnimatedRoutesTransition = () => {
  let { pathname } = useLocation();

  const transRef = useSpringRef();
  const [transitions] = useTransition(pathname, () => ({
    ref: transRef,
    keys: null,
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.8 },
    exitBeforeEnter: true,
  }));

  useEffect(() => {
    transRef.start();
  }, [pathname]);

  return [transitions];
};
