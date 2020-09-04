import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { usuario } from "../json/usuario.json";

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navegacion = (props) => {
    const classes = useStyles();

    const toolba = <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            News
        </Typography>
        <Button color="inherit">Login</Button>
    </Toolbar>

    return (
        <div className={classes.root}>
            <AppBar position="static">
                {
                    toolba
                }
            </AppBar>
        </div>
    );

}

export default Navegacion;
