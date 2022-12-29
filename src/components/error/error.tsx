import { Grid, Typography } from "@mui/material";
import { FC } from "react";

const Error: FC = () => {
  return (
    <Grid
      container
      sx={{ bgcolor: "#0A192F", height: "100vh" }}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Grid item>
        <Typography variant="h1">Sorry For the inconvenience</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">
          This application won't support this screen size
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">
          Please open this application in laptop or desktop
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          I am working on mobile screens
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Error;
