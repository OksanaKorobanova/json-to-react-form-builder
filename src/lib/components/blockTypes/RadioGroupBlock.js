import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Grid,
} from '@material-ui/core';
import { MainContext } from '../context/MainContext';

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
  formLabelRoot: {
    textTransform: 'capitalize',
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

  const { block } = props;
  const {
    state,
    handleChangeStateEvent,
    configStyles,
    configGrid,
  } = useContext(MainContext);

  return (
    <Grid
      item={true}
      xs={configGrid[block.attributes.name]? configGrid[block.attributes.name].container.xs : 12}
      md={configGrid[block.attributes.name]? configGrid[block.attributes.name].container.md : 12}
      style={
        block.attributes.order
          ? { order: block.attributes.order }
          : { order: 'inherit' }
      }>
      <FormControl
        variant='outlined'
        component='fieldset'
        className={classes.domainRadioGroup}>
        <FormLabel component='legend' className={classes.formLabelRoot}>
          {block.attributes.title}
        </FormLabel>
        <RadioGroup
          name='commercialType'
          className={classes.radioGroup}
          value={state[block.attributes.name]}>
          {block.content.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item.value}
                control={
                  <Radio
                    onClick={handleChangeStateEvent(block.attributes.name)}
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
    </Grid>
  );
};

export default RadioGroupBlock;
