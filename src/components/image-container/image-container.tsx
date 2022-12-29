import { Grid } from "@mui/material";
import { FC, useState } from "react";

interface Props {
  imageName: string;
  width: string;
  height?: string;
  altName: string;
}
const ImageContainer: FC<Props> = ({
  imageName,
  width,
  height,
  altName,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid item sx={{ width: "fit-content", position: "relative" }}>
      <div
        style={{
          width: width,
          height: height ? height : width,
          backgroundColor: "rgba(100, 255, 218)",
          position: "absolute",
          borderRadius: "4px",
        }}
      >
      </div>
      <img
        src={imageName}
        alt={altName}
        style={{
          width: width,
          height: height ? height : width,
          filter: hover ? "grayscale(0%)" : "grayscale(100%)",
          opacity: hover ? "1" : "0.7",
          borderRadius: "4px",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    </Grid>
  );
};
export default ImageContainer;
