import { Fragment, useState } from "react";
import styled from "styled-components";
import Header from "@/layouts/header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Animation from "@/components/animation/Animation";
import Image from "next/image";
import IconCalendar from "@/assets/icons/calendar.svg";
import IconUser from "@/assets/icons/user.svg";
import IconAdminSchoolCycle from "@/assets/icons/admin-school-cycle.svg";
import Table from "@/components/ui/table";
import DisabledAccountBadge from "@/components/DisabledAccountBadge";
import WeekCard from "@/components/ui/card/WeekCard";
import { useUserStore } from "@/store";

const Content = styled(Box)`
  margin: 60px auto;
  max-width: 1000px;
  @media screen and (max-width: 820px) {
    margin: 40px 20px;
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
  @media screen and (max-width: 820px) {
    font-size: 20.5px;
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

const FilterOptions = styled(Box)`
  @media screen and (max-width: 820px) {
    position: relative;
    overflow: scroll;
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

  const date = new Date();
  const current_year = date.getFullYear();

  const current_school_cycle = {
    first_year: JSON.stringify(current_year),
    end_year: JSON.stringify(current_year + 1),
  };

  const [cycleSelected, setCycleSelected] = useState<cycleSelected | {}>(
    current_school_cycle || {}
  );

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
                    src={IconUser}
                    alt="icon-user"
                  />
                </ContentIcon>
              </Box>
              <Box>
                {!!user?.school_cycle?.length && (
                  <SchoolCycle>
                    {/* @ts-ignore */}
                    Ciclo escolar: {cycleSelected?.first_year} -{" "}
                    {/* @ts-ignore */}
                    {cycleSelected?.end_year}
                  </SchoolCycle>
                )}
                <Student>{user?.student_name}</Student>
                {!user?.active_account && <DisabledAccountBadge />}
              </Box>
            </Stack>
          </Box>
          {!!user?.school_cycle?.length && (
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
          )}
        </Stack>
        {showFilters && (
          <Animation>
            <FilterOptions mb={4} mt={4}>
              <Stack
                direction={{ xs: "row", sm: "row" }}
                spacing={2}
                alignItems="center"
              >
                {user?.school_cycle?.map((cycle: any) => (
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Prompt",
                      boxShadow: "none",
                      padding: "8px 10px",
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
            </FilterOptions>
          </Animation>
        )}
        {cyclesFiltered && cyclesFiltered.length && cyclesFiltered[0].weeks ? (
          <Box>
            <Table thead={thead} />
            {cyclesFiltered &&
              cyclesFiltered.length &&
              cyclesFiltered[0].weeks?.map((week: any, i: any) => (
                <WeekCard {...week} i={i} />
              ))}
          </Box>
        ) : (
          <Fragment>
            {!!user?.school_cycle?.length ? (
              <Box mt={10} textAlign="center">
                <p>Selecciona un ciclo escolar</p>
              </Box>
            ) : (
              <Box mt={10} textAlign="center">
                <Image
                  width={200}
                  height={200}
                  priority
                  src={IconAdminSchoolCycle}
                  alt="icon-admin-school-cycle"
                  style={{ marginBottom: "20px" }}
                />
                <p>
                  Espere al administrador a que cree el nuevo ciclo escolar de
                  este año
                </p>
              </Box>
            )}
          </Fragment>
        )}
      </Content>
    </Box>
  );
};

export default Index;
