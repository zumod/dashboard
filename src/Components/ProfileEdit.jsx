import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },
    spacing: [0, 2, 3, 5, 8],
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 'auto',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const ProfileEdit = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <React.Fragment className={classes.root}>
            <Paper className={fixedHeightPaper}>
                <Box
                    component='span'
                    style={{ backgroundColor: 'WhiteSmoke' }}
                    height='auto'
                >
                    <br />
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={8} lg={4}>
                            Profile Picture
                            <br />
                            <br />
                            <Avatar
                                alt='photo'
                                src='https://media.idownloadblog.com/wp-content/uploads/2018/01/Facebook-contact-icon.jpg'
                                style={{
                                    margin: '0 auto',
                                    width: '100px',
                                    height: '100px',
                                }}
                            />
                            <br />
                            <input
                    accept="image/*"
                    className={classes.input}
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                   
                    <Button variant="contained" component="span" className={classes.button} startIcon={<CloudUploadIcon />} >
                      Upload
                    </Button>
                  </label>
                      <Button variant="outlined" color="primary" style={{margin: "10px"}} className={classes.button}
                          startIcon={<PhotoCamera />}>
                          Take a Photo
                      </Button>
                            <br />
                            <br />
                            <Divider />
                            <br />
                            Signature
                            <br />
                            <br />
                            <Avatar
                                alt='photo'
                                src='https://www.docsketch.com/assets/vip-signatures/muhammad-ali-signature-6a40cd5a6c27559411db066f62d64886c42bbeb03b347237ffae98b0b15e0005.svg'
                                style={{
                                    margin: '0 auto',
                                    width: '100px',
                                    height: '100px',
                                }}
                            />
                            <br />
                            <input
                    accept="image/*"
                    className={classes.input}
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                   
                    <Button variant="contained" component="span" className={classes.button} startIcon={<CloudUploadIcon />} >
                      Upload
                    </Button>
                  </label> 
                      <Button variant="outlined" color="primary" style={{margin: "10px"}} className={classes.button}
                          startIcon={<PhotoCamera />}>
                          Take Signature
                      </Button>
                            <br />
                            <br />
                            <br />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={8}
                            lg={8}
                            style={{ paddingTop: '10px' }}
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={8} lg={3}>
                                    Title
                                    <TextField
                                        id='standard-size-small'
                                        size='small'
                                    />
                                </Grid>
                                <Grid item xs={12} md={8} lg={3}>
                                    FirstName
                                    <TextField
                                        id='standard-size-small'
                                        size='small'
                                    />
                                </Grid>
                                <Grid item xs={12} md={8} lg={3}>
                                    MiddleName
                                    <TextField
                                        id='standard-size-small'
                                        size='small'
                                    />
                                </Grid>
                                <Grid item xs={12} md={8} lg={3}>
                                    LastName
                                    <TextField
                                        id='standard-size-small'
                                        size='small'
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid item xs={12} md={8} lg={12}>
                                Profile
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default ProfileEdit;
