import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Box, Typography, useTheme } from "@mui/material";

type NavbarPros = {
  name: string;
};
const Navbar = ({ name }: NavbarPros) => {
  const { palette } = useTheme();

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <h1>Ramo</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/predictions">predictions</Link>
          </li>
          <li>{name}</li>
        </ul>
      </nav>
    </Box>
  );
};
export default Navbar;
