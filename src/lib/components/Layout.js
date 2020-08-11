import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import ComponentBuilder from './ComponentBuilder';

import { MainContext } from './context/MainContext';

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1.5),
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const [jsonFile, setJsonFile] = useState();

  const {
    setState,
    state,
    validation,
    setValidation,
    setConfigStyles,
    setConfigGrid,
  } = useContext(MainContext);

  useEffect(() => {
    setConfigStyles(props.configStyles);
  }, [props.configStyles]);

  useEffect(() => {
    setConfigGrid(props.configGrid);
  }, [props.configGrid]);

  useEffect(() => {
    const newObj = props.jsonFile
      ? JSON.parse(JSON.stringify(props.jsonFile))
      : '';
    if (newObj) {
      setJsonFile(newObj);
      if (props.state) {
        setState(props.state);
      } else {
        let tempState = {};
        newObj.map(
          (block) => (tempState[block.attributes.name] = block.content[0].value)
        );
        setState(tempState);
        setValidation(tempState);
      }
    }
  }, [props.jsonFile, props.state]);

  useEffect(() => {
    console.log('validation changed!');
    console.log(validation);
  }, [validation]);

  const checkErrors = () => {
    Object.keys(state).map(function (key) {
      if (!state[key]) {
        return false;
      }
      return true;
    });
  };
  const handleSave = () => {
    let hasNoErrors = checkErrors();
    if (hasNoErrors) {
      props.onSubmit ? props.onSubmit(state) : console.log('onSubmit');
    }
  };
  return (
    <form className={classes.root}>
      <Grid container={true}>
        {jsonFile
          ? jsonFile.map((block, index) => {
              return (
                <React.Fragment key={index}>
                  {ComponentBuilder(block)}
                </React.Fragment>
              );
            })
          : ''}
      </Grid>

      {props.action ? (
        <div className={classes.btnContainer}>
          <Button variant='contained' color='primary' onClick={handleSave}>
            {props.action}
          </Button>
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default Layout;
