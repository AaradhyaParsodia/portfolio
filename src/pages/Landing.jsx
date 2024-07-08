import landing from "../assets/landing.svg"
export function Landing() {
    // return <div className="main-container">
    return <div>
        {/* <Navbar></Navbar> */}
        <div className="landing-splitter">
            <div className="landing-first-part">
                <div className="greeting">
                    Hey, 
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </div>
                <div className="name-section">I&apos;M <span className="name">AARADHYA PARSODIA</span></div>
                <div className="short-desc">
                    <p style={{ textAlign: "justify" }}>
                        A Software Developer who usually work on <span className="text-highlight">JavaScript(NodeJs), JavaSE, C++, etc. </span>
                        from <span className="text-highlight"> Bhopal, M.P, India.</span>
                        <br />
                        A craftsman who can build soft things on the digital computers
                        <br />
                        A recent B.Tech. Graduate in Computer Science and Engineering from LNCT, Bhopal.
                        <br />
                    </p>
                </div>
            </div>
            <div className="landing-second-part">
                <img
                    className="landing-image"
                    src={landing}
                    alt="landing photo"
                    style={{ maxHeight: "450px" }}
                />
            </div>
        </div>
    </div>
    // </div>
}