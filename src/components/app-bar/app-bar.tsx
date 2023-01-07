import {
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Box,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { Menu_Items } from "../../constants";
import { LogoSvg } from "../../icons/dark-logo";
import NavLink from "../nav-link";

interface Props {
  children: React.ReactElement;
}

const ResponsiveAppBar = () => {
  const [hover, setHover] = useState(false);
  const HideOnScroll = (props: Props) => {
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {props.children}
      </Slide>
    );
  };

  return (
    <HideOnScroll>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "#0A192F",
          px: 10,
        }}
      >
        <Toolbar>
          <Box sx={{ display: "block", flexGrow: 1 }} component="div">
            <LogoSvg
              width={"40px"}
              style={{ fill: hover ? "#ffffff1f" : "" }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </Box>
          <Box>
            <Grid container spacing={3}>
              {Menu_Items.map((item, key) => (
                <NavLink
                  key={key}
                  name={item.menuName}
                  sectionId={item.sectionId}
                  offset={item.offset}
                  count={key}
                />
              ))}
              <Grid item>
                <Button
                  variant="outlined"
                  href={
                    "https://docs.google.com/document/d/e/2PACX-1vRpL5b9nAt0nMyuCfzSYHc4R1QSwUffJZrZJD7wtyq7eBUSwlEJ5KdrhL40oR_9Ew/pub"
                  }
                  target={"_blank"}
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default ResponsiveAppBar;
