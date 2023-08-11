import { Main } from '@/templates/Main';
import { Meta } from '@/layouts/Meta';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '@/layouts/header';
import Stack from '@mui/material/Stack';
import UpdateProfile from '@/components/UpdateProfile';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonBack from '@/components/ButtonBack';
import Image from 'next/image';
import IconEmail from '@/assets/icons/mail.svg';
import IconLogout from '@/assets/icons/logout.svg';
import DisabledAccountBadge from '@/components/DisabledAccountBadge';
import { useUserStore } from '@/store';

const Content = styled(Box)`
  margin: 60px auto;
  max-width: 1000px;
  @media screen and (max-width: 820px) {
    margin: 30px 20px;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  @media screen and (max-width: 820px) {
    font-size: 30px;
  }
`;

const Email = styled.p`
  font-size: 14px;
  & img {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const Line = styled.hr`
  margin: 35px 0;
  border-color: #dadada;
`;

const ContentFormUpdateProfile = styled(Box)`
  padding: 0 40px;
  @media screen and (max-width: 820px) {
    padding: 0;
  }
`;

const Index = () => {
  const router = useRouter();

  // @ts-ignore
  const user = useUserStore((state) => state.user);
  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const logOut = () => {
    setUserInfo({});
    localStorage.removeItem('student_id');
    router.push('/login');
  };

  return (
    <Main
      meta={
        <Meta
          title="TranscoR - Mi Cuenta"
          description="lleva el control de los pagos de tu hijo"
        />
      }
    >
      <Box>
        <Header />
        <Content>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            mt={1}
            justifyContent="space-between"
          >
            <Box>
              <ButtonBack destination="/home" />
              <Title>{user?.student_name}</Title>
              <Email>
                <Image
                  width={14}
                  height={14}
                  priority
                  src={IconEmail}
                  alt="icon-email"
                />
                {user?.email}
              </Email>
              {!user?.active_account && <DisabledAccountBadge />}
            </Box>
            <Box>
              <Button
                variant="text"
                sx={{
                  fontFamily: 'Prompt',
                  boxShadow: 'none',
                  marginRight: '10px',
                  padding: '6px 30px',
                  color: '#1d1d1d',
                  background: '#f2f2f2',
                }}
                onClick={logOut}
              >
                <Image
                  width={14}
                  height={14}
                  priority
                  src={IconLogout}
                  alt="icon-logout"
                  style={{ marginRight: '5px' }}
                />
                Cerrar sesión
              </Button>
            </Box>
          </Stack>
          <Line />
          <ContentFormUpdateProfile>
            <UpdateProfile />
          </ContentFormUpdateProfile>
        </Content>
      </Box>
    </Main>
  );
};

export default Index;
