import React from "react";
// import moment from "moment";
import Countdown from "react-countdown";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ETZECountdown from "./ez-countdown";

// import "./App.css";
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
  const classes = useStyles();
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({
    formatted: { days, hours, minutes, seconds },
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
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
                {`${days}`}
                <br />
                Days
              </Typography>
              {/* <Typography className={classes.texts}>Days</Typography> */}
            </Grid>
            <Grid className={classes.elementHolder}>
              <Typography align="center" className={classes.texts}>
                {`${hours}`} <br />
                Hours
              </Typography>
            </Grid>
            <Grid className={classes.elementHolder}>
              <Typography align="center" className={classes.texts}>
                {`${minutes}`} <br />
                Minutes
              </Typography>
            </Grid>
            <Grid className={classes.elementHolder}>
              <Typography align="center" className={classes.texts}>
                {`${seconds}`} <br />
                Seconds
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justify="center"
            style={{ border: "1px solid white", width: "50%", padding: 40 }}
          >
            <Typography align="center" className={classes.texts}>
              {`${hours}:${minutes}:${seconds}`}
            </Typography>
          </Grid>
          {/* <Typography>{`${state.days} ${state.hours} ${state.minutes} ${state.seconds}`}</Typography> */}
          {/* {state.hours} {state.minutes} {state.seconds} */}
          {/* <button onClick={() => console.log(state)}>show state</button> */}
        </Grid>
      );
    }
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      {/* <ETZECountdown /> */}
      <Countdown
        date={Date.now() + 43234300}
        // renderer={renderer}
        intervalDelay={1000}
        precision={10}
        renderer={renderer}
      >
        {/* <Completionist /> */}
      </Countdown>
    </Grid>
  );
}

export default App;
