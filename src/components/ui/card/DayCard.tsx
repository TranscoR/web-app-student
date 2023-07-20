import styled from "styled-components";
import Box from "@mui/material/Box";
import Image from "next/image";
import IconCheck from "@/assets/icons/check.svg";
import { renderDateFirebase } from "@/services/utils/date";
import { type Student } from "@/types";
interface Paid {
  paid: boolean;
}

const Card = styled(Box)<Paid>`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ paid }) => (paid ? "#f1ca3b2a" : "#cccccc2e")};
  border: ${({ paid }) => (paid ? "1px solid #f1c93b" : "1px solid #ccc")};
  padding: 13px;
  border-radius: 12px;
  text-align: center;
`;

const Day = styled.p`
  margin-bottom: 5px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
`;

const DatepPay = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 11px;
  text-transform: capitalize;
  & img {
    position: relative;
    top: 2px;
    margin-right: 2px;
  }
`;

const Date = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
`;

const Status = styled.p<Paid>`
  color: ${({ paid }) => (paid ? "#f1c93b" : "#a3a3a3")};
  font-size: 13px;
`;

interface DayCard {
  day: number;
  label_day: string;
  label_date: string;
  paid: boolean;
  paid_date: any;
  days: any;
  amount: any;
  week_index: any;
  student: Student;
}

const Index = ({
  label_day,
  label_date,
  week_index,
  paid,
  paid_date,
  amount,
}: DayCard) => {
  return (
    <Box key={week_index}>
      <Day>{label_day}</Day>
      <Card paid={paid}>
        <Box>
          <Date>
            {label_date.split(" ")[0]}{" "}
            {label_date.split(" ")[1].substring(0, 3).toUpperCase()}
          </Date>
          <Status paid={paid}>{paid ? "Pagado" : "Pendiente"}</Status>
          {paid && (
            <DatepPay>
              {/* <Image
                width={12}
                height={12}
                priority
                src={IconCheck}
                alt="icon-check"
              />
              {renderDateFirebase(paid_date)} */}
              ${amount}
            </DatepPay>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default Index;
