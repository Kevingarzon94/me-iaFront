import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const AnimatedBackground = () => {
    const dotsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dotsContainer = dotsRef.current;
        if (!dotsContainer) return;

        const totalDots = 100;

        for (let i = 0; i < totalDots; ++i) {
            const dot = document.createElement("div");
            dot.className = "dot";
            dotsContainer.appendChild(dot);

            gsap.set(dot, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.8 + 0.3,
                opacity: Math.random() * 0.4 + 0.1,
            });

            gsap.to(dot, {
                opacity: Math.random() * 0.6 + 0.3,
                y: "+=" + (Math.random() * 20 - 10),
                x: "+=" + (Math.random() * 20 - 10),
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 3,
            });
        }

        return () => {
            dotsContainer.innerHTML = "";
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="animated-gradient absolute inset-0" />
            <div ref={dotsRef} className="absolute inset-0" />
        </div>
    );
};