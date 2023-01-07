import {
  Grid,
  Divider,
  Link,
  Tooltip,
  styled,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import { FC, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const SocialLinks: FC = () => {
  const [hover, setHover] = useState(false);

  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: "20px",
    },
  });

  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        width: "fit-content",
        position: "fixed",
        bottom: "3px",
        left: "40px",
      }}
      flexDirection="column"
      spacing={2}
    >
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CustomWidthTooltip
          title="+91 7010060374"
          arrow
          placement="right"
          sx={{ fontSize: "30px" }}
        >
          <LocalPhoneOutlinedIcon
            sx={{ fill: "#a8b2d1", "&:hover": { fill: "#64FFDA" } }}
          />
        </CustomWidthTooltip>
      </Grid>
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link
          href="https://www.linkedin.com/in/abinesh-eswaran/"
          target={"_blank"}
          sx={{ "&:hover": { border: "none" } }}
        >
          <LinkedInIcon
            sx={{
              fill: "#a8b2d1",
              "&:hover": { fill: "#64FFDA" },
            }}
          />
        </Link>
      </Grid>
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <EmailOutlinedIcon
          sx={{ fill: "#a8b2d1", "&:hover": { fill: "#64FFDA" } }}
          onClick={() => {
            window.open("mailto:abinesheswaranone@gmail.com");
          }}
        />
      </Grid>
      <Grid
        item
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Divider
          sx={{
            width: "1px",
            height: "100px",
            writingMode: "vertical-rl",
            bgcolor: hover ? "#64FFDA" : "#a8b2d1",
          }}
        />
      </Grid>
    </Grid>
  );
};
export default SocialLinks;
