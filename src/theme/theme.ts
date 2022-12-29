import { createTheme } from "@mui/material";

const portfolioTheme = createTheme({
  typography: {
    fontFamily: ["Calibre", "sans-serif"].join(","),
    h1: {
      fontSize: "80px",
      color: "#CCD6F6",
      fontWeight: "600",
      lineHeight: "1.1",
    },
    h2: { color: "#CCD6F6", fontSize: "32px", fontWeight: "600" },
    h3: { color: "#8892B0", fontSize: "20px", fontWeight: "600" },
    h4: {
      fontSize: "20px",
      color: "#8892B0",
    },
    h5: {
      color: "#8892B0",
      fontSize: "18px",
    },
    h6: {
      fontSize: "14px",
      color: "#64FFDA",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#64FFDA",
          borderColor: "#64FFDA",
          textTransform: "capitalize",
          fontFamily: "Roboto Mono,monospace",
          "&:hover": { borderColor: "#64FFDA", backgroundColor: "#64ffda24" },
        },
      },
    },
  },
});
export default portfolioTheme;
