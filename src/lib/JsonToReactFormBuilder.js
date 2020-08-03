import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Button } from '@material-ui/core';
import Components from './components';
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
    setState({
      ...state,
      [property]: event.target.value,
    });
  };

  const loadData = () => props.jsonFile? JSON.parse(JSON.stringify(props.jsonFile)) : [];
  
  useEffect(() => {
    const newObj = loadData();
    if (newObj) {
      setJsonFile(newObj);
      let tempState = {};
      newObj.map((block) => (tempState[block.attributes.name] = block.content[0].value));
      setState(tempState);
      setValidation(tempState);
    }
  }, []);

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
                  {Components(
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
