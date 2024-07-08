import { AboutCard } from "../components/AboutCard";
import about from "../assets/landing_2.svg"
export function About() {
    return <div className="about">
        <div className="about-second-part">
            <img
                className="about-image"
                src={about}
                alt="about section photo"
                style={{ maxHeight: "450px" }}
            />
        </div>
        <AboutCard />
    </div>
}