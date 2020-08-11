import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import { MainContext } from '../context/MainContext';
const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1.5),
  },
  formLabelRoot: {
    textTransform: 'capitalize',
  },
}));

const SelectBlock = (props) => {
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
      xs={block.attributes.xs ? block.attributes.xs : 12}
      md={block.attributes.md ? block.attributes.md : 12}
      style={
        block.attributes.order
          ? { order: block.attributes.order }
          : { order: 'inherit' }
      }>
      <TextField
        className={classes.textField}
        select
        label={block.attributes.title}
        value={state[block.attributes.name]}
        onChange={handleChangeStateEvent(block.attributes.name)}
        required={block.attributes.required}
        fullWidth
        SelectProps={{
          native: true,
        }}
        //   error={props.validation.startTime}
        //   helperText={
        //     props.validation[props.property] && props.state[props.property] === ''
        //       ? 'Empty!'
        //       : ' '
        //   }
        //   onBlur={props.validate('startTime')}
        variant='outlined'
        InputLabelProps={{
          shrink: true,
          className: classes.formLabelRoot,
        }}>
        {block.content.map((item, index) => (
          <option key={index} value={item.value}>
            {item.value}
          </option>
        ))}
      </TextField>
    </Grid>
  );
};

export default SelectBlock;
