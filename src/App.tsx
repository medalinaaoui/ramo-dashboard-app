import { useMemo } from "react";
import { themeSettings } from "./themes";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Prediction from "./pages/predictions/Prediction";
const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 3rem 0rem 3rem">
            <Navbar name="med ali" />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Prediction />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
