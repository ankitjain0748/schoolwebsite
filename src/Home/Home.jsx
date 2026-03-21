import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import CoreSubjects from "./CoreSubjects";
import Programs from "./Programs";
import ValuesSection from "./ValuesSection";

export default function HeroSection() {


    return (
        <>
            <Banner />
            <Programs />
            <CoreSubjects />
            <About />
            <ValuesSection/>
            <Contact/>
        </>
    );
}
