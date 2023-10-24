import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useState } from "react";

type NavbarPros = {
  name: string;
};
const Navbar = ({ name }: NavbarPros) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween padding="0rem 6rem" color={palette.grey[300]}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <FlexBetween gap=".5rem">
          <img src={logo} alt="logo" className="logo" />
          <Typography fontWeight="bold" fontSize="20px" variant="h4">
            Ramo
          </Typography>
        </FlexBetween>
      </Link>

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};
export default Navbar;
