import { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useUserStore } from "@/store";
import { getUserInfo, getSchoolCycle } from "@/api/user";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 80px;
  background-color: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 25px -2px,
    rgba(0, 0, 0, 0) 0px 8px 0px -2px;
  @media screen and (max-width: 820px) {
    padding: 15px 20px;
  }
`;

const Index = () => {
  // @ts-ignore
  const user = useUserStore((state) => state.user);
  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  useEffect(() => {
    // Get User Info
    if (!Object.keys(user).length) {
      getUserInfo().then((userInfo: any) => {
        getSchoolCycle()
          .then((res) => {
            const info = {
              ...userInfo,
              school_cycle: res,
            };
            setUserInfo(info);
          })
          .catch((error) => console.log("error", error));
      });
    }
  }, []);
  return (
    <Header>
      <Box>
        <Link href="/home">
          <h2>TranscoR</h2>
        </Link>
      </Box>
      <Box>
        <Link href="/profile">
          <Button
            variant="contained"
            sx={{ color: "#fff", fontFamily: "Prompt", boxShadow: "none" }}
          >
            Mi cuenta
          </Button>
        </Link>
      </Box>
    </Header>
  );
};

export default Index;
