import { Container } from "react-bootstrap";
import './assets/css/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import Projects from "./components/Projects";
import Typewriter from "../../components/TypeWriter";
import { useRef } from "react";

export default function Home() {

    const projectRef = useRef(null);

    const strings: string[] = [
        "on the web.",
        "on the backend.",
        "on the frontend.",
        "in the cloud.",
    ]

     const onProjectClick = () => {
        (projectRef.current as any).scrollIntoView();
    }

    return (
        <>
            <Container fluid className="w-100 h-100 home">
                <Container fluid className="arthur-hero">
                    <div className="px-4 py-5  text-center">
                        {/* <img className="d-block mx-auto mb-4 portrait" src={Portrait} alt="" width="300" height="300"/> */}
                        <h1 className="display-3 fw-bold text-white">Arthur Langley</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4 text-white">I like to code things, <span><Typewriter strings={strings}/></span></p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button className="btn btn-lg px-4 gap-3 w-100 button me-2"><FontAwesomeIcon icon={faInfoCircle}/> About Me</button>
                                <button onClick={onProjectClick} className="btn btn-lg px-4 gap-3 w-100 button me-2"><FontAwesomeIcon icon={faProjectDiagram}/> My Projects</button>
                                <a href="https://github.com/arthur-rl" className="btn btn-lg px-4 gap-3 w-100 button me-2"><FontAwesomeIcon icon={faGithub}/> Github</a>
                                <a href="https://linkedin.com/in/arthurlangleyuk" className="btn btn-lg px-4 gap-3 w-100 button"> <FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Projects innerRef={projectRef}/>
        </>
    )
}


// Photo by Sagui Andrea from Pexels
// https://www.pexels.com/photo/snow-covered-mountain-during-sunrise-618833/
