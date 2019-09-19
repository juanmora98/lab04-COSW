import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input, Link } from '@material-ui/core';
import './login.css';


const listas = '/listas';


export class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={false} sm={4} md={4}/>
          <Grid item xs={12} sm={12} md={5} elevation={6}>
              <CssBaseline />
              <main className="layout">
                <Paper className="paper">
                  <Avatar className="avatar">
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography variant="headline">Sign in</Typography>
                  <form className="form">
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="username">username</InputLabel>
                      <Input id="username" name="username" autoComplete="username" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <br />
                    <br />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" href={listas}>
                        Sign In
                    </Button>
                    <Grid item xs={12}><br/></Grid>
                    <Grid item xs={12}>
                      <Link href={listas} variant="link3">
                        See Parking
                      </Link>
                    </Grid>
                  </form>
                </Paper>
              </main>
          </Grid>
          <Grid item xs={false} sm={4} md={4}/>
        </Grid>
      </React.Fragment>
    );
  }
}