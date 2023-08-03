import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import IconDollar from "@/assets/icons/dollar-sign.svg";
import IconTransfer from "@/assets/icons/transfer.svg";
import IconAlert from "@/assets/icons/alert-circle.svg";
import { COLORS } from "@/constants/colors";

interface Paid {
  paid: boolean;
}

const Card = styled(Box)<Paid>`
  width: 420px;
  background-color: ${({ paid }) => (paid ? "#f1ca3b2a" : "#cccccc2e")};
  border: ${({ paid }) => (paid ? "1px solid #f1c93b" : "1px solid #ccc")};
  padding: 20px;
  border-radius: 12px;
`;

const Title = styled.h4`
  font-weight: 500;
  & img {
    vertical-align: middle;
    margin-right: 10px;
  }
`;

const Legend = styled(Box)`
  margin-top: 5px;
  display: flex;
  align-items: center;
  & img {
    margin-right: 5px;
  }
`;

interface DayCard {
  paid?: any;
  transfer_payment?: boolean;
  amount?: number;
  week_index?: any;
  vacations?: boolean;
  collector_name: string;
}

const Index = ({
  paid,
  transfer_payment,
  amount,
  vacations,
  collector_name,
}: DayCard) => {
  const router = useRouter();
  const query = router.query;

  return (
    <Box>
      <Card paid={paid}>
        <Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Title>
                {!paid && (
                  <Image
                    width={19}
                    height={19}
                    priority
                    src={IconAlert}
                    alt="icon-alert"
                  />
                )}
                Pago{" "}
                {paid
                  ? "completado"
                  : vacations
                  ? "de vacaciones pendiente"
                  : "semanal pendiente"}
              </Title>
              {paid && (
                <Box>
                  <Legend>
                    <Image
                      width={13}
                      height={13}
                      priority
                      src={transfer_payment ? IconTransfer : IconDollar}
                      alt="icon-dollar"
                    />
                    <small>
                      Pago realizado con{" "}
                      {transfer_payment ? "transferencia" : "efectivo"}
                    </small>
                  </Legend>
                  <Box>
                    <small>Cobrado por: {collector_name}</small>
                  </Box>
                </Box>
              )}
            </Box>
            {paid && (
              <Box>
                <p>${amount}</p>
              </Box>
            )}
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};

export default Index;
