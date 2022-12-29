import { Grid, Paper, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {
  companyName: string;
  date: string;
  projectName: string;
  discription: string;
  technologies: Array<string>;
}
const ProjectCard: FC<Props> = ({
  companyName,
  date,
  projectName,
  discription,
  technologies,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      xs={6}
    >
      <Paper
        sx={{ bgcolor: "#112240", display: "grid", height: "100%" }}
        elevation={hover ? 24 : 1}
      >
        <Grid item container sx={{ p: 3 }} spacing={2} flexDirection="column">
          <Grid container item justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">@ {companyName}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ color: "#8892B0", fontSize: "14px" }}>
                {date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h2" sx={{ color: hover ? "#64FFDA" : "" }}>
              {projectName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{discription}</Typography>
          </Grid>
          <Grid container item spacing={2} sx={{ color: "#8892B0" }}>
            {technologies.map((el, key) => (
              <Grid item key={key}>
                <Typography sx={{ fontSize: "13px" }}>{el}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default ProjectCard;
