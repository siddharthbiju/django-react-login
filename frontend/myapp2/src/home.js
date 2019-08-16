import React, { Component } from "react";
import "./home.css";
import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <div class="ss">
      <div>
        <p>welcome</p>
        <p>to our</p>
        <p>project!</p>
        <br />
      </div>
      <div>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => props.display_form("login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => props.display_form("signup")}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

Home.propTypes = {
  display_form: PropTypes.func.isRequired
};
