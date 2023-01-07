import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
interface Props {
  technologyName: string;
}

const ProjectTechnology: FC<Props> = ({ technologyName }) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ cursor: "default" }}
    >
      <Typography sx={{ fontSize: "13px", color: hover ? "#64FFDA" : "" }}>
        {technologyName}
      </Typography>
    </Grid>
  );
};

export default ProjectTechnology;
