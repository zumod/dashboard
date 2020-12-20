import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },
    fixedHeight: {
        height: 350,
    },
}));

const Profile = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <React.Fragment>
            <Grid item xs={12} md={8} lg={12}>
                <Paper className={fixedHeightPaper}>
                    <h4>Professional Profile </h4>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default Profile;