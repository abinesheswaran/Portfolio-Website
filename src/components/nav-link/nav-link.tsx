import { Grid, Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-scroll";

interface Props {
  name: string;
  count: number;
  sectionId: string;
  offset: number;
}

const NavLink: FC<Props> = ({ name, count, sectionId, offset }) => {
  const [hover, setHover] = useState(false);

  return (
    <Grid item>
      <Link to={sectionId} smooth={true} offset={-offset}>
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Typography
            sx={{
              color: "#64FFDA",
              mr: 1,
              fontSize: "13px",
              fontFamily: "Roboto Mono,monospace",
            }}
          >
            {"0" + (count + 1) + "."}
          </Typography>

          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: "13px",
              fontFamily: "Roboto Mono,monospace",
              color: hover ? "#64FFDA" : "#ccd6f6",
            }}
          >
            {name}
          </Typography>
        </Button>
      </Link>
    </Grid>
  );
};
export default NavLink;
