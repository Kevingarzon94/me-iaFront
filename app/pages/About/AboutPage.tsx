import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles/About.css"
import { HeroSection } from "~/pages/About/components/HeroSection";
import { IntroSection } from "~/pages/About/components/IntroSection";
import { TimelineSection } from "~/pages/About/components/TimeLineSection";
import { SocialLinks } from "~/components/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

export const AboutPage = () => {

    return (
        <div className="bg-gray-50">

            <HeroSection />
            <IntroSection />
            <TimelineSection />
            <SocialLinks />

        </div>
    );
}