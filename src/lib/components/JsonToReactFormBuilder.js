import React from 'react';
import Layout from './Layout';
import MainProvider from './context/MainContext';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1.5),
  },
}));

const JsonToReactFormBuilder = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainProvider>
        <Layout
          jsonFile={props.jsonFile}
          onSubmit={props.onSubmit}
          onCancel={props.onCancel}
          action={props.action}
          actionCancel={props.actionCancel}
          configStyles={props.configStyles}
          configGrid={props.configGrid}
        />
      </MainProvider>
    </div>
  );
};

export default JsonToReactFormBuilder;
