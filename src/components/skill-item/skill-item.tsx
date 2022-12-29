import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {
  logo: any;
  name: string;
  width: string;
  color: string;
}
const SkillItem: FC<Props> = ({ logo, name, width, color }) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      item
      flexDirection="column"
      alignItems="center"
      spacing={1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Grid item sx={{ width: width, fill: color }}>
        {logo}
      </Grid>
      <Grid item>
        <Typography
          sx={{
            color: hover ? color : "#8892B0",
            fontWeight: "600",
          }}
        >
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SkillItem;
