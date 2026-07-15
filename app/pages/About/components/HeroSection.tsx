import {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import {techIcons} from "../constants/constants.HeroSection";

export const HeroSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            floatingRefs.current.forEach((el, index) => {
                gsap.to(el, {
                    y: "random(-20, 20)",
                    x: "random(-20, 20)",
                    rotation: "random(-15, 15)",
                    duration: "random(3, 5)",
                    repeat: -2,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.2
                })
            })
            gsap.to(containerRef.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })
        }, containerRef)
        return () => ctx.revert();
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                preserveAspectRatio="none"
            >
                <path
                    d="M 0,400 Q 400,200 800,400 T 1600,400"
                    stroke="rgb(99, 102, 241)"
                    strokeWidth="2"
                    fill="none"
                    className="path-animation"
                />
            </svg>

            {techIcons.map((tech, index) => {
                const {src, alt, position, size} = tech;
                return (
                    <div
                        key={index}
                        ref={el => {
                            floatingRefs.current[index] = el
                        }}
                        className={`absolute ${position} floating-icon cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300`}
                        style={{zIndex: 1}}
                    >
                        <div className="relative group">
                            <img
                                src={src}
                                alt={alt}
                                width={size}
                                height={size}
                                className="hover:scale-110 transition-transform duration-300 object-contain"
                                style={{
                                    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))'
                                }}
                            />
                            <div
                                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl bg-primary-400 rounded-full"/>
                        </div>
                    </div>
                );
            })}

            <div className="text-center z-10 px-8">
                <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6">
          <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            El futuro se programa
          </span>
                    <span
                        className="block bg-gradient-to-r from-primary-800 to-primary-600 bg-clip-text text-transparent">
            línea a línea.
          </span>
                </h1>
                <p className="hero-subtitle text-xl text-neutral-600 max-w-2xl mx-auto">
                    Programar no es solo mi trabajo, es mi forma de imaginar el futuro.
                </p>

                <div className="mt-12 animate-bounce">
                    <svg className="w-6 h-6 mx-auto text-primary-500" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </div>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>
        </section>
    );
}