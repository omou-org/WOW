import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import MyDialog from "./MyDialog";

const App = () => (
    <div className="App">
        <Container fixed>
            <MyDialog title="Dialog A" />
            <MyDialog title="Dialog B" />
            <MyDialog title="Dialog C" />
        </Container>
    </div>
);

export default App;
