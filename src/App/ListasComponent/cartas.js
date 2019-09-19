import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './cartas.css'

export class Cartas extends React.Component {
  render() {
    return(
      <Card className="cartas">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.props.description}
          </Typography>
          <Typography variant="body2" component="p">
            nombre: {this.props.responsible.name}
          </Typography>
          <Typography variant="body2" component="p">
            email: {this.props.responsible.email}
          </Typography>
          <Typography variant="h5" component="h2">
            status:{this.props.status}
          </Typography>
          <Typography variant="h5" component="h2">
            fecha:{this.props.dueDate}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}