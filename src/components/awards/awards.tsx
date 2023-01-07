import { Grid } from "@mui/material";
import { FC } from "react";
import { AWARDS } from "../../constants";
import Title from "../title";
import AwardCard from "./../award-card";

const Awards: FC = () => {
  return (
    <Grid container alignContent="start" spacing={9}>
      <Title count={"04"} lineWidth={"280px"}>
        Awards and Achievements
      </Title>
      <Grid container item spacing={3}>
        {AWARDS.map((el, key) => (
          <AwardCard
            key={key}
            title={el.title}
            role={el.role}
            companyName={el.companyName}
            companyUrl={el.companyUrl}
            discription={el.discription}
            imageName={el.imageName}
          />
        ))}
      </Grid>
    </Grid>
  );
};
export default Awards;
