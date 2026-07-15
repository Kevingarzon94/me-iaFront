import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export const useWelcomeAnimation = (container: HTMLDivElement | null) => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.to('.text', {
        backgroundPosition: '200% center',
        duration: 2,
        repeat: -1,
        ease: 'linear',
      })

      tl.current = gsap
        .timeline({ paused: true })
        .to('.box', {
          bottom: 0,
          translateY: 0,
          duration: 0.8,
        })
        .to('.text', {
          opacity: 0,
          height: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.7,
          ease: 'power2.inOut',
        })
        .to('.chat', {
          opacity: 1,
        });
    },
    { scope: container as HTMLDivElement | undefined},
  );
  const play = () => {
    if (tl.current) {
      tl.current.play();
    }
  };
  return { play };
};