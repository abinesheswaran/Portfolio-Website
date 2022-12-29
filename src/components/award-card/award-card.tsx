import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { QuotationLogo } from "../../icons/quotation-logo";
import ImageContainer from "../image-container";

interface Props {
  title: string;
  role: string;
  companyName: string;
  discription: string;
  imageName: string;
}

const AwardCard: FC<Props> = ({
  title,
  role,
  companyName,
  discription,
  imageName,
}) => {
  return (
    <Grid
      container
      item
      spacing={2}
      flexWrap="nowrap"
      sx={{ maxWidth: "90rem" }}
    >
      <Grid container item spacing={1} alignContent="baseline">
        <Grid item>
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="h3">{role}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">@ {companyName}</Typography>
          </Grid>
        </Grid>
        <Grid item container flexWrap="nowrap" spacing={1}>
          <Grid item>
            <QuotationLogo width="16px" />
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ mt: 2 }}>
              {discription}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ImageContainer
          imageName={imageName}
          width={"200px"}
          height={"250px"}
          altName={title.toLowerCase() + ".jpg"}
        />
      </Grid>
    </Grid>
  );
};
export default AwardCard;
