import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "@/layouts/header";
import Stack from "@mui/material/Stack";
import UpdateProfile from "@/components/UpdateProfile";
import Button from "@mui/material/Button";
import ButtonBack from "@/components/ButtonBack";
import DisabledAccountBadge from "@/components/DisabledAccountBadge";
import Box from "@mui/material/Box";
import { useUserStore } from "@/store";

const Content = styled(Box)`
  margin: 60px auto;
  max-width: 1000px;
  @media screen and (max-width: 820px) {
    margin: 30px 20px;
  }
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Email = styled.p`
  font-size: 14px;
`;

const Line = styled.hr`
  margin: 35px 0;
  border-color: #dadada;
`;

const Index = () => {
  const router = useRouter();

  // @ts-ignore
  const user = useUserStore((state) => state.user);
  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const logOut = () => {
    setUserInfo({});
    localStorage.removeItem("user_uid");
    router.push("/login");
  };

  return (
    <Box>
      <Header />
      <Content>
        <Stack
          direction="row"
          spacing={1}
          mt={1}
          justifyContent="space-between"
        >
          <Box>
            <ButtonBack destination="/home" />
            <Title>{user?.student_name}</Title>
            <Email>{user?.email}</Email>
            {!user?.active_account && <DisabledAccountBadge />}
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                fontFamily: "Prompt",
                boxShadow: "none",
                marginRight: "10px",
                padding: "6px 30px",
                color: "#1d1d1d",
              }}
              onClick={logOut}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Stack>
        <Line />
        <Box pl={5} pr={5}>
          <UpdateProfile />
        </Box>
      </Content>
    </Box>
  );
};

export default Index;
