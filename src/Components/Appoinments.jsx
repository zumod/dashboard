/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 220,
    },
}));

const Deposits = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <>
            <Grid item xs={12} md={4} lg={12}>
                <Paper className={fixedHeightPaper}>
                    <Title>Todays Appoinments </Title>
                    <Typography component='p' variant='h4'>
                        No Upcoming Consultation
                    </Typography>
                    <Typography
                        color='textSecondary'
                        className={classes.depositContext}
                    ></Typography>
                </Paper>
            </Grid>
        </>
    );
};

export default Deposits;
