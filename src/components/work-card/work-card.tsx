import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { ArrowLogo } from "../../icons/arrow-logo";

interface Props {
  companyName: string;
  position: string;
  date: string;
  role: Array<string>;
}
const WorkCard: FC<Props> = ({ companyName, position, date, role }) => {
  return (
    <Grid item container flexDirection={"row"} flexWrap="nowrap" spacing={9}>
      <Grid item>
        <Typography variant="h5" sx={{ width: "max-content" }}>
          {companyName}
        </Typography>
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item flexDirection="column" spacing={1}>
          <Grid container item alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="h2" sx={{ fontSize: "20px" }}>
                {position}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{` @ ${companyName}`}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ fontSize: "14px" }}>
              {date}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          {role.map((el, key) => (
            <Grid
              key={key}
              container
              item
              alignItems="baseline"
              flexWrap="nowrap"
            >
              <Grid item>
                <ArrowLogo width={"10px"} height={"10px"} />
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={{ ml: 1 }}>
                  {el}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default WorkCard;
