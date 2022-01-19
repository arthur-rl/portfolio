import { Button, Card, Container, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import ReactModal from 'react-modal';
import '../assets/css/projects.css';
import { useEffect, useState } from "react";
import axios from "../../../axios";

interface Props {
    innerRef: any;
    loggedInState: boolean;
}

interface Button {
    name: string;
    url: string;
}
interface Project {
    name: string;
    image: string; 
    description: string;
    buttons: Button[]
}

function Projects(props: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [projects, setProjects] = useState<Project[]>([]);
    const [buttons, setButtons] = useState<Button[]>([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/projects"
        }).then(d => {
            setProjects(d.data)
        });
    }, []);

    const onCreateProjectClick = () => {
        axios({
            method: "POST",
            url: "/api/projects",
            data: {
                name: projectName,
                description,
                image: imageUrl,
                projectButtons: buttons
            },
        }).then(d => {
            setProjects([...projects, d.data]);
            setIsModalOpen(false);
        });
    }

    const onAddButtonClick = () => {
        setButtons([...buttons, {name: "", url: ""}])
    }

    const deleteButton = (buttonIndex: number) => {
        const b = buttons.filter((_, index) => index !== buttonIndex);
        setButtons(b);
    }

    const updateButtonName = (buttonIndex: number, name: string) => {
        let button = buttons[buttonIndex];
        button = {
            ...button,
            name
        }
        const b = buttons.filter((_, index) => index !== buttonIndex);
        setButtons([
            ...b,
            button
        ])
    }

    const updateButtonUrl = (buttonIndex: number, url: string) => {
        let button = buttons[buttonIndex];
        button = {
            ...button,
            url
        }
        const b = buttons.filter((_, index) => index !== buttonIndex);
        setButtons([
            ...b,
            button
        ]);
    }

    return (
        <>
         <ReactModal isOpen={isModalOpen}>
             <h3>Creating new project: {projectName}</h3>
            <input onChange={(e) => setProjectName(e.target.value)} type="text" className="form-control mb-3" placeholder="Project Name" />
            <textarea onChange={(e) => setDescription(e.target.value)} className="form-control mb-3" placeholder="Description" />
            <input onChange={(e) => setImageUrl(e.target.value)}type="text" className="form-control mb-3" placeholder="Image URL" />
            <h3>Buttons</h3>
            <div className="buttons">
                {buttons.map((button, index) => {
                    return (
                        <>
                            <input onChange={(e) => updateButtonName(index, e.target.value)} type="text" className="form-control mb-3" placeholder="Button Name" />
                            <input onChange={(e) => updateButtonUrl(index, e.target.value)} type="text" className="form-control mb-3" placeholder="Button URL" />
                            <Button onClick={() => deleteButton(index)} className="mb-3">Delete {button.name}</Button>
                        </>
                    )
                })}
            </div>
            <div className="d-flex" style={{flexDirection: "column"}}>
                <Button onClick={onAddButtonClick} className="mb-2">Add Button</Button>
                <Button onClick={onCreateProjectClick}>Create Project</Button>
            </div>
        </ReactModal>
            <Container ref={props.innerRef} fluid className="projects-container">
                <div className="projects-header text-center">
                    <h1 className="display-3 fw-bold text-white">
                        Projects
                    </h1>
                    {props.loggedInState && (
                        <Button className="mt-2" onClick={() => setIsModalOpen(true)}>Add New Project</Button>
                    )}
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 text-white">Projects I have created, contributed on or worked for.</p>
                    </div>
                    <Container fluid>
                        <div className="projects">
                            {projects.map((project, index) => {
                                return (
                                    <Card className="project-card p-3" key={index}>
                                        <Card.Header>
                                            {project.name}
                                        </Card.Header>
                                        <Card.Img variant="top" src={project.image} width={"286"} height={"180"} />
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                        {project.buttons.map((link, index) => {
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

const mapStateToProps = (state: any) => ({
    loggedInState: state.authState.logged_in
});

export default connect(mapStateToProps)(Projects);
