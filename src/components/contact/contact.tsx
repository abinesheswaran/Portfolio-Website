import { Button, Grid, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Grid
      id="contact-section"
      container
      flexDirection="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ pt: "10rem", pb: "3rem" }}
    >
      <Grid container item justifyContent="center" alignItems="baseline">
        <Grid item>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#64FFDA",
              lineHeight: "1.1",
              fontFamily: "Roboto Mono,monospace",
            }}
          >
            05.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ wordSpacing: "4px" }}>
            What’s Next?
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h1" sx={{ fontSize: "60px" }}>
          Get In Touch
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          sx={{
            width: "580px",
            lineHeight: "1.3",
            textAlign: "center",
          }}
        >
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
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
export default Contact;
