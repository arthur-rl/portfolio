import { Container } from "react-bootstrap";
import '../assets/css/aboutme.css';
import AboutMeTextLocation from '../assets/aboutme.txt'
import { useEffect, useState } from "react";

export default function AboutMe({innerRef}: {innerRef: any}) {

    const [aboutMeText, setAboutMeText] = useState("Loading...");

    useEffect(() => {
        if(AboutMeTextLocation) {
            fetch(AboutMeTextLocation).then(r => r.text()).then(d => {
                setAboutMeText(d)
            });
        }
    }, [AboutMeTextLocation])
    return (
        <>
            <Container ref={innerRef} fluid className="aboutme-container">
                <div className="aboutme-header">
                    <h1 className="display-3 fw-bold text-white">
                            About Me
                    </h1>
                    <div>
                        <p className="lead mb-4 text-white" dangerouslySetInnerHTML={{__html: aboutMeText}}></p>
                    </div>
                </div>
            </Container>
        </>
    )
}