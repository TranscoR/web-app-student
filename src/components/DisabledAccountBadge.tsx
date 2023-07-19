import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import IconLock from "@/assets/icons/lock.svg";

const Index = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Box mt={0.25}>
        <Image width={15} height={15} priority src={IconLock} alt="icon-lock" />
      </Box>
      <Box>
        <small>Cuenta actualmente desactivada</small>
      </Box>
    </Stack>
  );
};

export default Index;
