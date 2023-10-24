import { Box, useMediaQuery } from "@mui/material";
import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";
import { gridTemplateLg, gridTemplateSm } from "@/utils/grids";

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      height="100%"
      margin="1rem 0rem"
      width="100%"
      display="grid"
      gap="1.4rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr) )",
              gridTemplateAreas: gridTemplateLg,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSm,
            }
      }
    >
      <RowOne />
      <RowTwo />
      <RowThree />
    </Box>
  );
};
export default Dashboard;
