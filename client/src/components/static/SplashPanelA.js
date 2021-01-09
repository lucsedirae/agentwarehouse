//* Dependencies
import React from "react";

//* Material UI components, hooks, and icons
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography"

const SplashPanelA = () => {
  return (
    <Paper variant="outlined" style={{padding: "10px"}}>
      <Typography variant="h4">Open House CRM</Typography>
      <Typography variant="body1">
        An open source React library for building business dashboards and
        customer relationship management apps quickly and professionally
      </Typography>
      <ButtonGroup size="large" variant="contained" color="primary">
        <Button href="/about">About</Button>
        <Button href="/dashboard">Login</Button>
        <Button href="/dashboard">Register</Button>
        <Button href="https://github.com/lucsedirae/open-house-crm">Develop</Button>
      </ButtonGroup>
    </Paper>
  );
};

export default SplashPanelA;