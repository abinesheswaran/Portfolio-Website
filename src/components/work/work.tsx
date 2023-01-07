import { Grid } from "@mui/material";
import { FC } from "react";
import { WORK_HISTORY } from "../../constants";
import Title from "../title";
import WorkCard from "../work-card";

const Work: FC = () => {
  return (
      <Grid
      id="experience-section"
        container
        sx={{ width: "850px", margin: "0 auto", py: "10rem" }}
        alignContent="start"
        spacing={3}
      >
        <Title count={"02"} lineWidth={"218px"}>
          Where I’ve Worked
        </Title>
        <Grid container item spacing={3}>
          {WORK_HISTORY.map((el, key) => (
            <WorkCard
              key={key}
              companyName={el.companyName}
              companyUrl={el.companyUrl}
              position={el.position}
              date={el.date}
              role={el.role}
            />
          ))}
        </Grid>
      </Grid>
  );
};
export default Work;
