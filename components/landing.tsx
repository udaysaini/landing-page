'use client'

import { useEffect } from "react";
import Calendly from "./calendly";
import Channels from "./channels";
import EditedShorts from "./edited-shorts";
import EditedVideos from "./edited-videos";
import Footer from "./footer";
import Hero from "./hero";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Landing = () => {
    useEffect(() => {
        AOS.init({
            disable: 'phone',
            duration: 500,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <div >
            <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
                {/* Hero */}
                <Hero />

                {/* Edited Videos */}
                <EditedVideos />

                {/* Edited Shorts */}
                {/* <EditedShorts /> */}

                {/* Channels */}
                <Channels />

                {/* Calendly booking page */}
                <Calendly />
            </div>

            {/* footer */}
            <Footer />
        </div>
    )
};

export default Landing;