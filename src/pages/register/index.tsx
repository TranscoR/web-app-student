import styled from "styled-components";
import Box from "@mui/material/Box";
import RegisterForm from "@/components/RegisterForm";
import { currentSchoolCycle } from "@/services/utils/currentSchoolCycle";
import { COLORS } from "@/constants/colors";

const Content = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 0px;
  @media screen and (max-width: 820px) {
    grid-template-columns: 100%;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  line-height: 55px;
  & span {
    display: block;
    font-weight: 400;
    font-size: 40px;
  }
`;

const SchoolYear = styled.h1`
  margin-top: 10px;
  color: ${COLORS.brightYellow};
  font-size: 48px;
`;

const Description = styled.p`
  margin-top: 40px;
  font-weight: 400;
  font-size: 20px;
`;

const ContentLeft = styled(Box)`
  background-color: #fff;
  padding: 70px;
  @media screen and (max-width: 820px) {
    padding: 40px 20px 20px;
  }
`;

const ContentRight = styled(Box)`
  padding: 70px 70px 40px;
  @media screen and (max-width: 820px) {
    padding: 20px 20px 40px;
  }
`;

const Logo = styled.h2`
  color: #c6c6c6;
  font-weight: 500;
  margin-bottom: 24px;
`;

const Index = () => {
  return (
    <Content>
      <ContentLeft>
        <div style={{ position: "sticky", top: "70px" }}>
          <Logo>TranscoR</Logo>
          <Title>
            Bienvenidos al nuevo
            <span>Cliclo Escolar</span>
          </Title>
          <SchoolYear>{currentSchoolCycle()}</SchoolYear>
          <Description>
            El servicio más seguro de transporte escolar para tu hijo, llevar el
            control de tus pagos ahora es muy fácil
          </Description>
        </div>
      </ContentLeft>
      <Box>
        <ContentRight>
          <RegisterForm />
        </ContentRight>
      </Box>
    </Content>
  );
};

export default Index;
