import { Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import Title from "../title";
import ImageContainer from "../image-container";
import { TECHNOLOGIES_WORKED } from "../../constants";
import myPhoto from "../../images/me.jpg";
import TechnologiesWorked from "../technologies-worked";

const About: FC = () => {
  console.log(import.meta);
  return (
    <Grid
      container
      sx={{
        width: "850px",
        margin: "0px auto",
        mb: "4rem",
      }}
      alignContent="start"
      spacing={3}
      id="about-section"
    >
      <Title count={"01"} lineWidth={"300px"}>
        About Me
      </Title>
      <Grid container item flexDirection="row" flexWrap="nowrap" spacing={5}>
        <Grid container item spacing={2}>
          <Grid item>
            <Typography variant="h4">
              Hello! My name is Abinesh and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to create a simple portfolio page -- turns out
              hacking frontend technologies taught me a lot about HTML & CSS!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              Fast-forward to today, and I’ve had the privilege of working at{" "}
              <Link href={"https://kudelskisecurity.com/"} target={"_blank"}>
                Kudelski security.
              </Link>{" "}
              My main focus these days is building fast and scalable application
              at{" "}
              <Link href={"https://kudelskisecurity.com/"} target={"_blank"}>
                Kudelski security.
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              Here are a few technologies I’ve been working with recently:
            </Typography>
          </Grid>
          <Grid container item xs={6} spacing={1}>
            {TECHNOLOGIES_WORKED.map((technologie, key) => (
              <TechnologiesWorked technologie={technologie} key={key} />
            ))}
          </Grid>
        </Grid>
        <ImageContainer
          imageName={myPhoto}
          width={"250px"}
          altName={"profile_photo.jpg"}
        />
      </Grid>
    </Grid>
  );
};
export default About;
