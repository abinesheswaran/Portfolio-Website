import { Grid, Typography, Divider } from "@mui/material";
import { FC } from "react";

interface Props {
  count: string;
  children: string;
  lineWidth: string;
}

const Title: FC<Props> = ({ count, children, lineWidth }) => {
  return (
    <Grid container item alignItems="center" spacing={2}>
      <Grid item>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#64FFDA",
            fontFamily: "Roboto Mono,monospace",
          }}
        >
          {count}.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">{children}</Typography>
      </Grid>
      <Grid item>
        <Divider sx={{ width: lineWidth, bgcolor: "#233554" }} />
      </Grid>
    </Grid>
  );
};
export default Title;
