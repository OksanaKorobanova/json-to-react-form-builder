import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Grid,
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
  radioGroup: {
    padding: theme.spacing(5),
  },
  card: {
    textAlign: 'center',
  },
}));

const ComponentsList = (props) => {
  const classes = useStyles();
  const {
    block,
    property,
    handleChangeState,
    state,
    handleChangeStateEvent,
  } = props;

  // useEffect(() => {
  //   handleChangeState(property, block.content[0].value);
  // }, []);

  const CustomTemplate = (props) => {
    return (
      <Card className={classes.card}>
        <CardActionArea
          onClick={(property, newValue) =>
            handleChangeState(property, props.item.id)
          }>
          <CardMedia
            component='img'
            alt={props.item.title}
            height='140'
            image={props.item.img}
            title={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.item.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {props.item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <FormControl
      variant='outlined'
      component='fieldset'
      className={classes.domainRadioGroup}>
      <FormLabel component='legend'>{block.attributes.title}</FormLabel>
      <RadioGroup
        name='commercialType'
        className={classes.radioGroup}
        value={state[property]}>
        <Grid container className={classes.customTemplate}>
          {block.content.map((item, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <FormControlLabel
                  key={index}
                  value={item.value}
                  control={
                    <Radio
                      onClick={handleChangeStateEvent(property)}
                      color='primary'
                    />
                  }
                  label={<CustomTemplate item={item} />}
                />
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default ComponentsList;
