import FlexBetween from "./FlexBetween";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  icon?: React.ReactNode;
  subtitle?: string;
  sideText: string;
};
const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  return (
    <FlexBetween margin="1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700">
        {sideText}
      </Typography>
    </FlexBetween>
  );
};
export default BoxHeader;
