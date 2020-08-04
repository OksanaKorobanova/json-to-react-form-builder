import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Button } from '@material-ui/core';
import ComponentBuilder from './ComponentBuilder';
const useStyles = makeStyles((theme) => ({}));

const JsonToReactFormBuilder = (props) => {
  const classes = useStyles();
  const [jsonFile, setJsonFile] = useState();
  const [state, setState] = useState();
  const [validation, setValidation] = useState();
  // change state
  const handleChangeState = (property, newValue) => {
    setState({
      ...state,
      [property]: newValue,
    });
  };

  const handleChangeStateEvent = (property) => (event) => {
    if (state[property] !== event.target.value) {
      setState({
        ...state,
        [property]: event.target.value,
      });
    }
  };
  useEffect(() => {
    const newObj = props.jsonFile
      ? JSON.parse(JSON.stringify(props.jsonFile))
      : '';
    if (newObj) {
      setJsonFile(newObj);
      if (props.state) {
        setState(props.state)
      } else {
        let tempState = {};
        newObj.map(
          (block) => (tempState[block.attributes.name] = block.content[0].value)
        );
        setState(tempState);
        setValidation(tempState);
      }
    }
  }, [props.jsonFile]);

  useEffect(() => {
    console.log('state changed!');
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log('validation changed!');
    console.log(validation);
  }, [validation]);

  return (
    <React.Fragment>
      <CssBaseline />
      <form className={classes.root}>
        {jsonFile
          ? jsonFile.map((block, index) => {
              return (
                <div key={index}>
                  {ComponentBuilder(
                    block,
                    state,
                    handleChangeState,
                    handleChangeStateEvent
                  )}
                </div>
              );
            })
          : ''}
        <Button onClick={props.onSubmit}>{props.action}</Button>
      </form>
    </React.Fragment>
  );
};

export default JsonToReactFormBuilder;
