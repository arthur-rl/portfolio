import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import '../assets/css/projects.css';
import { PROJECT_DATA } from "../assets/data";

export default function Projects({innerRef}:{innerRef: any}) {
    return (
        <>
            <Container ref={innerRef} fluid className="projects-container">
                <div className="projects-header text-center">
                    <h1 className="display-3 fw-bold text-white">
                        Projects
                    </h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-white">Projects I have created, contributed on or worked for.</p>
                    </div>
                    <Container fluid>
                        <div className="projects">
                            {PROJECT_DATA.map((project, index) => {
                                return (
                                    <Card className="project-card p-3" key={index}>
                                        <Card.Header>
                                            {project.name}
                                        </Card.Header>
                                        <Card.Img variant="top" src={project.image} width={"286"} height={"180"} />
                                        <Card.Text>
                                            {project.body}
                                        </Card.Text>
                                        {project.links.map((link, index) => {
                                            return <a className="btn btn-primary" key={index} href={link.url}>{link.name}</a>
                                        })}
                                    </Card>
                                )
                            })}
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4 text-white">... & many more</p>
                        </div>
                </Container>
                </div>
            </Container>
        </>
    )
}
