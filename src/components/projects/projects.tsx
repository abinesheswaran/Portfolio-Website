import { Grid } from "@mui/material";
import { FC } from "react";
import { PROJECTS } from "../../constants";
import ProjectCard from "../project-card";
import Title from "../title";

const Projects: FC = () => {
  return (
    <Grid
      id="work-section"
      sx={{ pb: "10rem" }}
      container
      alignContent="start"
      spacing={9}
    >
      <Title count={"03"} lineWidth={"300px"}>
        Some Things I’ve Worked
      </Title>
      <Grid item container spacing={5}>
        {PROJECTS.map((el, key) => (
          <ProjectCard
            key={key}
            companyName={el.companyName}
            companyUrl={el.companyUrl}
            date={el.date}
            projectName={el.projectName}
            discription={el.discription}
            technologies={el.technologies}
          />
        ))}
      </Grid>
    </Grid>
  );
};
export default Projects;
