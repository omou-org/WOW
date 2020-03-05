import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
        <Container fixed>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
    </div>
  );
}

export default App;
