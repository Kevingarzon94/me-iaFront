// TimelineSection.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TimelineSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const experiences = [
        {
            year: "2016",
            company: "MQA",
            position: "Junior Developer",
            description: "Desarrollo de aplicaciones web con Javascript, SAP Fiori",
            color: "bg-blue-500"
        },
        {
            year: "2017",
            company: "I4 Soluciones",
            position: "Frontend Developer",
            description: "Desarrollo de aplicaciones web con Javascript, nativescript, UI5 Sap",
            color: "bg-purple-500"
        },
        {
            year: "2018",
            company: "Grupo Accion Plus",
            position: "Full Stack Developer",
            description: "Arquitectura de microservicios y APIs REST, JavaScript,PHP,React Native",
            color: "bg-green-500"
        },
        {
            year: "2019",
            company: "Amaris Consulting",
            position: "Full Stack Developer",
            description: "Liderazgo técnico, Node.js, React.js, PHP, PostgreSQL, Oracle, AWS Lambda, DynamoDB y S3, typescript",
            color: "bg-orange-500"
        },
        {
            year: "2024",
            company: "Babel",
            position: "Full Stack",
            description: "Desarrollo de interfaces usando React/Typescript, NestJS, MicroFrontend",
            color: "bg-red-500"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Calcular el desplazamiento correcto
            const getScrollAmount = () => {
                const timelineWidth = timelineRef.current?.scrollWidth || 0;
                const windowWidth = window.innerWidth;
                // Añadir padding extra para ver la última tarjeta
                return timelineWidth - windowWidth + 400; // 400px de padding extra
            };

            // Animar la línea del timeline
            gsap.fromTo('.timeline-line',
                { width: '0%' },
                {
                    width: '100%',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: 1,
                    }
                }
            );

            // Animar los puntos y tarjetas
            gsap.fromTo('.timeline-point',
                {
                    scale: 0,
                    opacity: 0
                },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                        end: "bottom 30%",
                        scrub: 1
                    }
                }
            );

            gsap.fromTo('.experience-card',
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        scrub: 1
                    }
                }
            );

            // Scroll horizontal mejorado
            gsap.to(timelineRef.current, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            // Actualizar en resize
            ScrollTrigger.addEventListener("refreshInit", () => {
                gsap.set(timelineRef.current, { x: 0 });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="timeline-section min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
        >
            <div className="h-screen flex flex-col justify-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-primary-800">
                    Mi Experiencia
                </h2>

                {/* Timeline Container */}
                <div className="relative h-[500px] flex items-center">
                    <div
                        ref={timelineRef}
                        className="timeline-wrapper flex items-center absolute left-0"
                        style={{
                            width: `${(experiences.length * 400) + 400}px`, // Añadir espacio extra
                            paddingRight: '400px' // Padding al final
                        }}
                    >
                        {/* Línea del timeline */}
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-gray-300 -translate-y-1/2"
                            style={{ width: `${experiences.length * 400}px` }}
                        >
                            <div className="timeline-line h-full bg-gradient-to-r from-primary-400 to-primary-600"></div>
                        </div>

                        {/* Experiencias */}
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center flex-shrink-0"
                                style={{ width: '400px' }}
                            >
                                {/* Punto en la línea */}
                                <div className={`timeline-point absolute top-1/2 -translate-y-1/2 w-6 h-6 ${exp.color} rounded-full z-10 shadow-lg`}>
                                    <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${exp.color}`}></div>
                                </div>

                                {/* Tarjeta de experiencia */}
                                <div className={`experience-card ${index % 2 === 0 ? '-mt-64' : 'mt-32'} bg-white rounded-xl shadow-xl p-6 w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                                    <div className={`text-white text-sm font-bold px-3 py-1 rounded-full ${exp.color} inline-block mb-3`}>
                                        {exp.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                                        {exp.company}
                                    </h3>
                                    <p className="text-primary-600 font-medium mb-2">
                                        {exp.position}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Línea conectora */}
                                <div
                                    className={`absolute w-0.5 h-20 bg-gray-300 left-1/2 -translate-x-1/2 ${
                                        index % 2 === 0 ? 'top-1/2' : 'bottom-1/2'
                                    }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicador de scroll */}
                <div className="flex justify-center mt-10 text-gray-500 text-sm animate-pulse">
                    <span>← Scroll para explorar →</span>
                </div>
            </div>
        </section>
    );
};