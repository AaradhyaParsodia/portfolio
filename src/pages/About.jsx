import { AboutCard } from "../components/AboutCard";

export function About() {
    return <div className="about">
        <div className="about-second-part">
            <img
                className="about-image"
                src="./src/assets/landing_2.svg"
                alt="about section photo"
                style={{ maxHeight: "450px" }}
            />
        </div>
        <AboutCard />
    </div>
}