import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer: FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      sx={{ pb: "3rem" }}
      justifyContent="center"
      spacing={1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid item>
        <Typography
          variant="h5"
          sx={{ fontSize: "14px", color: hover ? "#64FFDA" : "" }}
        >
          Designed & Build by Abinesh Eswaran
        </Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <CopyrightIcon sx={{ fill: hover ? "#64FFDA" : "#8892B0" }} />
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            sx={{ fontSize: "14px", color: hover ? "#64FFDA" : "" }}
          >
            2023 Abinesh Eswaran. All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Footer;
