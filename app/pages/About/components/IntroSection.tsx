import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {AnimatedBackground} from "~/pages/About/components/AnimatedBackground";

gsap.registerPlugin(ScrollTrigger);

export const IntroSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Configurar estado inicial del cubo
            gsap.set('.cube', {
                rotateX: -20,
                rotateY: -20
            });

            // Obtener paneles de texto
            const textPanels = gsap.utils.toArray<HTMLElement>('.text-panel');

            // Timeline principal con pin
            const mainTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=250%", // 2.5 pantallas de scroll
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            // Dividir el scroll en 3 secciones iguales
            const sectionDuration = 1; // Duración relativa de cada sección

            // Primera sección (0% - 33%): Mostrar "El Inicio"
            mainTimeline.to('.cube', {
                rotateX: 100,
                rotateY: 100,
                duration: sectionDuration,
                ease: "none"
            });

            // Segunda sección (33% - 66%): Cambiar a "El Aprendizaje"
            mainTimeline
                .to(textPanels[0], {
                    opacity: 0,
                    y: -50,
                    duration: 0.3
                })
                .to(textPanels[1], {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                }, "<")
                .to('.cube', {
                    rotateX: 200,
                    rotateY: 200,
                    duration: sectionDuration,
                    ease: "none"
                });

            // Tercera sección (66% - 100%): Cambiar a "El Presente"
            mainTimeline
                .to(textPanels[1], {
                    opacity: 0,
                    y: -50,
                    duration: 0.3
                })
                .to(textPanels[2], {
                    opacity: 1,
                    y: 0,
                    duration: 0.3
                }, "<")
                .to('.cube', {
                    rotateX: 360,
                    rotateY: 360,
                    duration: sectionDuration,
                    ease: "none"
                });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="intro-section relative overflow-hidden">
            <AnimatedBackground />
            <div className="h-screen flex items-center px-8 z-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Lado Izquierdo - Cubo 3D */}
                        <div className="cube-container flex justify-center items-center">
                            <div className="scene">
                                <div className="cube">
                                    <div className="cube-face front">
                                        <span>Frontend</span>
                                    </div>
                                    <div className="cube-face back">
                                        <span>Backend</span>
                                    </div>
                                    <div className="cube-face right">
                                        <span>DevOps</span>
                                    </div>
                                    <div className="cube-face left">
                                        <span>UI/UX</span>
                                    </div>
                                    <div className="cube-face top">
                                        <span>Database</span>
                                    </div>
                                    <div className="cube-face bottom">
                                        <span>API</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Lado Derecho - Textos */}
                        <div className="text-container relative h-[400px]">
                            <div className="text-panel absolute inset-0" data-index="0">
                                <h2 className="text-4xl font-bold mb-6 text-primary-800">
                                    El Inicio
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Mi viaje en el desarrollo web comenzó hace 5 años.
                                    Lo que empezó como curiosidad por entender cómo funcionaban
                                    las páginas web, se convirtió en una pasión que define mi carrera.
                                </p>
                            </div>

                            <div className="text-panel absolute inset-0 opacity-0" data-index="1">
                                <h2 className="text-4xl font-bold mb-6 text-primary-800">
                                    El Aprendizaje
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Cada proyecto ha sido una oportunidad de aprendizaje.
                                    Desde HTML y CSS básico hasta frameworks modernos como React y Node.js,
                                    mi stack tecnológico ha evolucionado constantemente.
                                </p>
                            </div>

                            <div className="text-panel absolute inset-0 opacity-0" data-index="2">
                                <h2 className="text-4xl font-bold mb-6 text-primary-800">
                                    El Presente
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Hoy, como desarrollador Full Stack, combino creatividad y lógica
                                    para construir experiencias digitales que no solo funcionan bien,
                                    sino que también inspiran y conectan con los usuarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};