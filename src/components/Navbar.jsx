import apLogo from "../assets/AP1.svg";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

export function Navbar() {
    let navigate = useNavigate();
    console.log("Nav rerendered");
    return <nav className="navbar">
        <div className="logo">
            <img
                className="logo-image"
                src={apLogo}
                alt="AP Logo"
                style={{ maxHeight: "20px" }}
                onClick={() => {
                    navigate("/")
                }}
            />
        </div>
        <div className="nav-sub-section">
            <span onClick={() => {
                navigate("/")
            }}>
                Home
            </span>
            <span onClick={() => {
                navigate("/about")
            }}>
                About
            </span>
            <span onClick={() => {
                window.location.href = "https://github.com/AaradhyaParsodia"
                // navigate("/projects")
            }}>
                Projects
            </span>
        </div>
        <div className="contact-me">
            <span 
                className="contact"
                onClick={()=>{
                    // navigate("/contact")
                    window.location.href = "https://linkedin.com/in/aaradhya-"
                }}
            >
                Contact Me
            </span>
        </div>
    </nav>
}