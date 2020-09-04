import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { grid } from "../../json/grid.json";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const useStyles2 = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Paneluno = () => {
    const classes = { useStyles }
    const classes2 = { useStyles2 }

    const [state, setState] = useState({
        dato: "William",
        DataGrilla: grid
    });



    function saludar(e) {
        console.log("hola");
        ReactDOM.render("hola", document.getElementById('bc'))
    }

    function presionar(e) {
        setState({
            dato: "Hola"
        })
        console.log("Hola");
    }

    const grilla = state.DataGrilla.map((item, i) =>(
        <Grid item xs={3} key={i}>
        <Paper className={classes.paper}>
            <Card className={classes2.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes2.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.Nombre} - {state.dato}
                    </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {item.Descripcion}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={(e) => presionar(e)}>
                        Share
                 </Button>
                    <Button size="small" color="primary">
                        Learn More
                </Button>
                </CardActions>
            </Card>

        </Paper>
    </Grid>
    ))




    const body = <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        {grilla}
    </Grid>

    return (
        <div className={classes.root}>
            {body}
        </div>
    );
}

export default Paneluno;