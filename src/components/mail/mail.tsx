import { Divider, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

const Mail: FC = () => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        width: "fit-content",
        position: "fixed",
        bottom: "3px",
        right: "80px",
      }}
      flexDirection="column"
      spacing={4}
    >
      <Grid item>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "SF Mono",
            writingMode: "vertical-rl",
            fontSize: "14px",
            letterSpacing: "1.5px",
            color: hover ? "#64FFDA" : "#a8b2d1",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          abinesheswaranone@gmail.com
        </Typography>
      </Grid>
      <Grid item>
        <Divider
          sx={{
            width: "1px",
            height: "100px",
            writingMode: "vertical-rl",
            bgcolor: hover ? "#64FFDA" : "#a8b2d1",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </Grid>
    </Grid>
  );
};
export default Mail;
