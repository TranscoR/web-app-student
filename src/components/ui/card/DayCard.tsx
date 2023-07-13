import styled from "styled-components";
import Box from "@mui/material/Box";

const Card = styled(Box)`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1ca3b2a;
  padding: 13px;
  border: 1px solid #f1c93b;
  border-radius: 12px;
  text-align: center;
`;

const Day = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
`;

const Date = styled.h3`
  font-weight: 500;
`;

const Status = styled.p`
  color: #f1c93b;
`;

const Index = () => {
  return (
    <Box>
      <Day>Lunes</Day>
      <Card>
        <Box>
          <Date>12 AGO</Date>
          <Status>Pagado</Status>
        </Box>
      </Card>
    </Box>
  );
};

export default Index;
