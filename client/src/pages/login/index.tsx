import axios from "../../axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router";

interface Props {
    loggedInState: boolean;
    dispatch: (action: {type: string, [key: string]: any}) => void
}

function Login(props: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onLoginButtonPress = () => {
        axios({
            method: "POST",
            url: "/auth/login",
            data: {
                username,
                password
            },
        }).then(d => {
            if(d.status === 200) {
                props.dispatch({type: "SET_AUTH_STATE", state: d.data});
                navigate("/")
            }
        });
    }
    useEffect(() => {
        if(props.loggedInState) {
            navigate("/");
        }
    }, [props.loggedInState])
    
    return (
        <>
        <Container>
            <Card className="mt-5 p-4">
                <Card.Title className="mb-4">
                    Login
                </Card.Title>
                <Card.Text>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" placeholder="Username" aria-label="Username"/>           
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="mt-2 form-control" placeholder="Password" aria-label="Password"/> 
                    <Button onClick={onLoginButtonPress} className="mt-4">Login</Button>          
                </Card.Text>
            </Card>
        </Container>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    loggedInState: state.authState.logged_in
});

export default connect(mapStateToProps)(Login);