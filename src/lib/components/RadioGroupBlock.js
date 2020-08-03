import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  infoBlock: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    textAlign: 'center',
  },
  avatarContainer: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  customLabelTextField: {
    margin: '0 10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  domainRadioGroup: {
    marginTop: theme.spacing(1.5),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1.2),
  },
  platformAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  templates: {
    marginTop: theme.spacing(1.5),
  },
  templateHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const CustomTitle = (props) => {
  return (
    <div>
      <Typography variant='subtitle1'>{props.title}</Typography>
      <Typography variant='subtitle2'>{props.subtitle}</Typography>
    </div>
  );
};
const RadioGroupBlock = (props) => {
  const classes = useStyles();

  // useEffect(() => {
  //   console.log('here');
  //   console.log(props.property);
  //   console.log(props.block.content[0].value);
  //   props.handleChangeState(props.property, props.block.content[0].value);
  // }, []);

  return (
    <FormControl
      variant='outlined'
      component='fieldset'
      className={classes.domainRadioGroup}>
      <FormLabel component='legend'>{props.block.attributes.title}</FormLabel>
      <RadioGroup
        name='commercialType'
        className={classes.radioGroup}
        value={props.state[props.property]}>
        {props.block.content.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              value={item.value}
              control={
                <Radio
                  onClick={props.handleChangeStateEvent(props.property)}
                  color='primary'
                />
              }
              label={
                <CustomTitle title={item.title} subtitle={item.subtitle} />
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupBlock;
