import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: ".15rem .2rem .15rem .1rem rgba(0, 0, 0, .8)",
}));

export default FlexBetween;
