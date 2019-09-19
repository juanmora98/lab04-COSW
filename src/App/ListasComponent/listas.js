import React from 'react';
import { Grid, CssBaseline, Button } from '@material-ui/core';
import './listas.css';
import { Cartas } from './cartas';


const home = '/';

export class Listas extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Grid container>
                    <CssBaseline />
                    <Grid item lg={12}>
                        <Grid container>
                            <Grid item sm={false} md={2}></Grid>
                            <Grid item sm={12} md={8}>
                                <Cartas description="Implement login view" responsible ={{name : "Juan mora", email : ""}}  status="In progress" dueDate = "5649654"/>                                
                            </Grid>
                            <Grid item sm={false} md={2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }; 
}
