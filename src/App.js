import React from "react";
import moment from "moment";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "black",
    width: "100%",
    height: "400px"
  },
  elementHolder: {
    width: "150",
    height: "150"
  },
  texts: {
    color: "white"
  }
}));
function App() {
  // console.log(moment("20111031", "YYYYMMDD").fromNow());
  const input = {
    days: 10,
    hours: 23,
    minutes: 45,
    seconds: 12
  };
  const [state, setState] = React.useState(input);
  const classes = useStyles();
  const handleState = (stateName, stateValue) => {
    setState(prevState => ({ ...prevState, [stateName]: stateValue }));
  };
  const timeEnging = () => {
    if (state.seconds === 0) {
      handleState("seconds", 60);
      handleState("minutes", state.minutes - 1);
    } else if (state.minutes === 0) {
      handleState("minutes", 60);
      handleState("hours", state.hours - 1);
    } else if (state.hours === 0) {
      handleState("hours", 24);
      handleState("days", state.days - 1);
    }
  };
  const decreaseTime = element => {
    setTimeout(() => {
      setState({
        ...state,
        [element]: state.seconds - 1
      });
    }, 1000);
  };
  React.useEffect(() => {
    decreaseTime("seconds");
    timeEnging();
  }, [state.seconds]);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        item
        justify="space-between"
        style={{ border: "1px solid white", width: "50%", padding: 40 }}
      >
        <Grid className={classes.elementHolder}>
          <Typography align="center" className={classes.texts}>
            {`${state.days}`}
            <br />
            Days
          </Typography>
          {/* <Typography className={classes.texts}>Days</Typography> */}
        </Grid>
        <Grid className={classes.elementHolder}>
          <Typography align="center" className={classes.texts}>
            {`${state.hours}`} <br />
            Hours
          </Typography>
        </Grid>
        <Grid className={classes.elementHolder}>
          <Typography align="center" className={classes.texts}>
            {`${state.minutes}`} <br />
            Minutes
          </Typography>
        </Grid>
        <Grid className={classes.elementHolder}>
          <Typography align="center" className={classes.texts}>
            {`${state.seconds}`} <br />
            Seconds
          </Typography>
        </Grid>
      </Grid>

      {/* <Typography>{`${state.days} ${state.hours} ${state.minutes} ${state.seconds}`}</Typography> */}
      {/* {state.hours} {state.minutes} {state.seconds} */}
      {/* <button onClick={() => console.log(state)}>show state</button> */}
    </Grid>
  );
}

export default App;
