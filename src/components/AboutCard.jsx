import { PointRight } from "./PointRight"
export function AboutCard() {
    return <div className="about-card">
        <h1>Know Who I&apos;M</h1>
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, This is <span className="text-highlight">Aaradhya Parsodia </span>
            from <span className="text-highlight"> Bhopal, M.P, India.</span>
            <br />
            I am currently working as a <span className="text-highlight">Backend Developer Intern</span> at Mentorsity.
            <br />
            A recent B.Tech. Graduate in Computer Science and Engineering from LNCT, Bhopal.
            <br />
            <br />
            If !coding then, probably doing one or more of these things!
        </p>
        <ul>
            <li className="about-activity">
                <PointRight /> Learning/researching about new things
            </li>
            <li className="about-activity">
                <PointRight /> Watching movie/series
            </li>
            <li className="about-activity">
            <PointRight /> .......
            </li>
        </ul>
    </div>
}