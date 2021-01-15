import { Grid, TextField } from "@material-ui/core";
import React from "react";
import userService from "../services/UserService";
const Profile = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}></Grid>
      <div>
        <br />
        <br />
        <TextField label="Name" value={userService.getLoggedInUser().name} />
        <br />
        <TextField label="Role" value={userService.getLoggedInUser().role} />
      </div>
    </Grid>
  );
};

export default Profile;
