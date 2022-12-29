import { Box, ThemeProvider, Toolbar, useMediaQuery } from "@mui/material";
import About from "./components/about";
import ResponsiveAppBar from "./components/app-bar";
import Header from "./components/header";
import Skills from "./components/skills";
import Work from "./components/work";
import Projects from "./components/projects";
import Awards from "./components/awards";
import Contact from "./components/contact";
import portfolioTheme from "./theme/theme";
import Footer from "./components/footer";
import GlobalFonts from "./styles/fonts";
import Error from "./components/error";

function App() {
  const isFullScreen = useMediaQuery("(min-width:1018px)");
  return (
    <ThemeProvider theme={portfolioTheme}>
      <GlobalFonts />
      {isFullScreen ? (
        <>
          <ResponsiveAppBar />
          <Box
            component="main"
            sx={{ p: "0 150px", bgcolor: "#0A192F" }}
            id="main-container"
          >
            <Toolbar />
            <Header />
            <About />
            <Skills />
            <Work />
            <Projects />
            <Awards />
            <Contact />
            <Footer />
          </Box>
        </>
      ) : (
        <Error />
      )}
    </ThemeProvider>
  );
}

export default App;
