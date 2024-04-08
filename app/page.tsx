import Calendly from "@/components/calendly";
import Channels from "@/components/channels";
import EditedShorts from "@/components/edited-shorts";
import EditedVideos from "@/components/edited-videos";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Landing from "@/components/landing";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        {/* <Landing /> */}

        {/* Hero */}
        <Hero />

        {/* Edited Videos */}
        <EditedVideos />
        
        {/* Edited Shorts */}
        <EditedShorts />
        
        {/* Channels */}
        <Channels />
        
        {/* Calendly booking page */}
        <Calendly />
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}
