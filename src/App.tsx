import { useMemo } from "react";
import { themeSettings } from "./themes";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar";
const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 3rem 0rem 3rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route
                path="/predictions"
                element={<div>Predictions Page</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
