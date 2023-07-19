import { useState } from "react";
import styled from "styled-components";
import Header from "@/layouts/header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Animation from "@/components/animation/Animation";
import Image from "next/image";
import IconCalendar from "@/assets/icons/calendar.svg";
import Table from "@/components/ui/table";
import DisabledAccountBadge from "@/components/DisabledAccountBadge";
import WeekCard from "@/components/ui/card/WeekCard";
import { currentSchoolCycle } from "@/services/utils/currentSchoolCycle";
import { useUserStore } from "@/store";

const Content = styled(Box)`
  margin: 60px auto;
  max-width: 1000px;
  @media screen and (max-width: 820px) {
    margin: 60px 20px;
  }
`;

interface Student {}

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

const ButtonFilters = styled.button`
  padding: 11px 17px;
  background-color: #e9edf3;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  & img {
    vertical-align: sub;
    margin-right: 5px;
  }
`;

interface cycleSelected {
  first_year: string;
  end_year: string;
}

const Index = () => {
  const thead = ["Num Semana", "Semana", "Pago", ""];

  // @ts-ignore
  const user = useUserStore((state) => state.user);

  // Filter By Cycle
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [cycleSelected, setCycleSelected] = useState<cycleSelected>({
    first_year: "2023",
    end_year: "2024",
  });

  const cyclesFiltered =
    Object.keys(cycleSelected).length &&
    user?.school_cycle?.filter(
      // @ts-ignore
      (cycle: any) => cycle.first_year === cycleSelected?.first_year
    );

  return (
    <Box>
      <Header />
      <Content>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
        >
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
                <SchoolCycle>
                  Ciclo escolar: {cycleSelected.first_year} -{" "}
                  {cycleSelected.end_year}
                </SchoolCycle>
                <Student>Alumno: {user?.student_name}</Student>
                {!user?.active_account && <DisabledAccountBadge />}
              </Box>
            </Stack>
          </Box>
          <Box>
            <ButtonFilters onClick={() => setShowFilters(!showFilters)}>
              <Image
                width={15}
                height={15}
                priority
                src={IconCalendar}
                alt="icon-calendar"
              />
              Ciclo escolar
            </ButtonFilters>
          </Box>
        </Stack>
        {showFilters && (
          <Animation>
            <Box mb={4} mt={4}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems="center"
              >
                {user?.school_cycle?.map((cycle: any) => (
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Prompt",
                      boxShadow: "none",
                      marginRight: "10px",
                      padding: "8px 30px",
                      backgroundColor: "#e9edf3",
                    }}
                    onClick={() =>
                      setCycleSelected({
                        first_year: cycle.first_year,
                        end_year: cycle.end_year,
                      })
                    }
                  >
                    {cycle.first_year} - {cycle.end_year}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Animation>
        )}
        <Box>
          <Table thead={thead} />
          {cyclesFiltered &&
            cyclesFiltered.length &&
            cyclesFiltered[0].weeks?.map((week: any, i: any) => (
              <WeekCard {...week} i={i} />
            ))}
        </Box>
      </Content>
    </Box>
  );
};

export default Index;
