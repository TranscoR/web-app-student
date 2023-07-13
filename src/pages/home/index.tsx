import styled from "styled-components";
import Header from "@/layouts/header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import IconCalendar from "@/assets/icons/calendar.svg";
import Table from "@/components/ui/table";
import WeekCard from "@/components/ui/card/WeekCard";
import { currentSchoolCycle } from "@/services/utils/currentSchoolCycle";

const Content = styled(Box)`
  margin: 60px auto;
  max-width: 1000px;
  @media screen and (max-width: 820px) {
    margin: 60px 20px;
  }
`;

const Student = styled.h3`
  font-weight: 500;
`;

const SchoolCycle = styled.h2`
  font-weight: 400;
  & img {
    vertical-align: middle;
  }
`;

const ContentIcon = styled(Box)`
  display: inline-grid;
  background-color: #f1ca3b35;
  border-radius: 30px;
  padding: 10px 10px 10px;
`;

const Index = () => {
  const thead = ["Num Semana", "Semana", "Pago", ""];

  return (
    <Box>
      <Header />
      <Content>
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <ContentIcon>
                <Image
                  width={25}
                  height={25}
                  priority
                  src={IconCalendar}
                  alt="icon-calendar"
                />
              </ContentIcon>
            </Box>
            <Box>
              <SchoolCycle>Ciclo escolar: {currentSchoolCycle()}</SchoolCycle>
              <Student>Alumno: Jared Ortega</Student>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Table thead={thead} />
          {[1, 2, 3].map(() => (
            <WeekCard />
          ))}
        </Box>
      </Content>
    </Box>
  );
};

export default Index;
