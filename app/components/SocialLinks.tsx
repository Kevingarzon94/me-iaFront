import { useRef } from "react";
import { Github, Linkedin, Phone } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const SocialLinks = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const links = containerRef.current?.querySelectorAll(".social-link");

            if (links && links.length > 0) {
                gsap.fromTo(
                    links,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        },
        { scope: containerRef }
    );

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="w-6 h-6" />,
            url: "https://github.com/",
            color: "hover:text-gray-900 hover:bg-gray-100",
            bg: "bg-gray-800 text-white",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-6 h-6" />,
            url: "https://linkedin.com/",
            color: "hover:text-blue-700 hover:bg-blue-50",
            bg: "bg-[#0077b5] text-white",
        },
        {
            name: "WhatsApp",
            icon: <Phone className="w-6 h-6" />,
            url: "https://wa.me/",
            color: "hover:text-green-600 hover:bg-green-50",
            bg: "bg-[#25D366] text-white",
        },
    ];

    return (
        <div ref={containerRef} className="flex justify-center gap-6 py-10">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link flex items-center justify-center p-4 rounded-full shadow-lg transition-colors duration-300 ${link.bg} ${link.color}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    aria-label={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};
