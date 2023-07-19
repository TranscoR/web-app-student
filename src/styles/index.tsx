import styled from "styled-components";
import Box from "@mui/material/Box";
import { COLORS } from "@/constants/colors";

// Forms
export const Field = styled(Box)`
  width: 100%;
  margin: 15px 0;
  & label {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: "Prompt";
  }
  & a {
    color: ${COLORS.brightYellow};
  }
`;
