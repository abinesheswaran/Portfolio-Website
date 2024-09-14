import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ArrowLogo } from "../../icons/arrow-logo";

interface Props {
  technologie: string;
}

const TechnologiesWorked: FC<Props> = ({ technologie }) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      item
      xs={2} sm={4} md={3}
      alignItems="baseline"
      spacing={1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid item>
        <ArrowLogo width={"10px"} height={"10px"} />
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          sx={{ fontSize: "16px", mb: "2px", color: hover ? "#64FFDA" : "" }}
        >
          {technologie}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default TechnologiesWorked;
