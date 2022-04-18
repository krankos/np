import React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const handleSubmit = () => {};
  const [userData, setUserData] = useState({ email: "", password: "" });
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.from}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" color="initial"></Typography>
        <TextField
          name="Email"
          variant="outlined"
          label="Email"
          fullWidth
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;
