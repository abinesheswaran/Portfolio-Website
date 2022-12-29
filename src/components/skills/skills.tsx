import { Grid } from "@mui/material";
import { FC } from "react";
import { SKILLS } from "../../constants";
import SkillItem from "../skill-item";
import Title from "../title";

const Skills: FC = () => {
  return (
    <Grid
      container
      sx={{ width: "600px", margin: "0px auto" }}
      alignContent="start"
      spacing={3}
    >
      <Title count={"1.1"} lineWidth={"200px"}>
        What I Know
      </Title>
      <Grid container item flexWrap="nowrap">
        {SKILLS.map((el, key) => (
          <SkillItem
            key={key}
            logo={el.logo}
            name={el.name}
            width={el.width}
            color={el.color}
          />
        ))}
      </Grid>
    </Grid>
  );
};
export default Skills;
