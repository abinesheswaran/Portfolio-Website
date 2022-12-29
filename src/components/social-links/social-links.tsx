import { Grid, Divider } from "@mui/material";
import { FC, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const SocialLinks: FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        width: "fit-content",
        position: "fixed",
        bottom: "3px",
        left: "40px",
      }}
      flexDirection="column"
      spacing={2}
    >
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <LocalPhoneOutlinedIcon
          sx={{ fill: "#a8b2d1", "&:hover": { fill: "#64FFDA" } }}
        />
      </Grid>
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <LinkedInIcon sx={{ fill: "#a8b2d1", "&:hover": { fill: "#64FFDA" } }}/>
      </Grid>
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <EmailOutlinedIcon sx={{ fill: "#a8b2d1", "&:hover": { fill: "#64FFDA" } }}/>
      </Grid>
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Divider
          sx={{
            width: "1px",
            height: "100px",
            writingMode: "vertical-rl",
            bgcolor: hover ? "#64FFDA" : "#a8b2d1",
          }}
        />
      </Grid>
    </Grid>
  );
};
export default SocialLinks;
