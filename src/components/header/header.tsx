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
          Frontend Developer with 3+ years of experience in building responsive web applications using React.js, JavaScript, and TypeScript. Skilled in turning Figma designs into polished UIs and integrating with backend services via Node.js. Experienced in Agile collaboration, version control with Git, and Docker-based deployments. Passionate about writing clean, maintainable code and improving app performance.        </Typography>
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
