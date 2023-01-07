import { Button, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Grid
      container
      flexDirection="column"
      spacing={3}
      justifyContent="center"
      alignContent="center"
      sx={{
        minHeight: "calc(100vh - 40px)",
      }}
    >
      <Grid item>
        <Typography variant="h6" sx={{ fontSize: "16px", wordSpacing: "4px" }}>
          Hi, my name is
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1">Abinesh Eswaran.</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1" sx={{ color: "#8892B0", lineHeight: "0.9" }}>
          I build things for the web.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" sx={{ width: "580px" }}>
          I’m a associate engineer specializing in building (and occasionally
          designing) react application. Currently, I’m focused on building fast
          and reusable things at{" "}
          <Link href={"https://kudelskisecurity.com/"} target={"_blank"}>
            Kudelski security.
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            window.open("mailto:abinesheswaranone@gmail.com");
          }}
        >
          Say Hello
        </Button>
      </Grid>
    </Grid>
  );
};
export default Header;
