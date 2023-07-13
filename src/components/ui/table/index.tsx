import styled from "styled-components";
import Box from "@mui/material/Box";

const HeaderInfo = styled(Box)`
  display: grid;
  grid-template-columns: 17% 30% 24% 15% 12%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  align-items: flex-end;
  justify-items: flex-start;
  padding: 10px 20px;
  & div p {
    font-family: "Prompt";
    font-size: 15px;
    line-height: 120%;
    color: #727f88;
    padding: 0 27px 0 0;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 26% 44% 24%;
    & div p {
      font-size: 13px;
    }
  }
`;

interface Table {
  thead: Array<string | undefined>;
}

const Index = ({ thead }: Table) => {
  return (
    <Box mt={5}>
      <HeaderInfo>
        {thead.map((item) => (
          <div>{item ? <p>{item}</p> : null}</div>
        ))}
      </HeaderInfo>
    </Box>
  );
};

export default Index;
