import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </toolbar>
            </AppBar>

            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello and welcome to my photo album. This is practice react application using material ui.
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    );
}

export default App;