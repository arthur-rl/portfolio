import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import { connect } from 'react-redux';
import axios from './axios';

function App(props: {dispatch: Function, loggedInState: boolean}) {
    useEffect(() => {
        if(!props.loggedInState) {
            axios({
                method: "GET",
                url: "/auth/state",
            }).then(d => {
                if(d.status === 200) {
                    props.dispatch({type: "SET_AUTH_STATE", state: d.data});
                }
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<Login/>} path="/login"/>
            </Routes>
        </BrowserRouter>
    );
}

const mapStateToProps = (state: any) => ({
    loggedInState: state.authState.logged_in
});

export default connect(mapStateToProps)(App);
