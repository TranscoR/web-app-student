import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import IconArrow from "@/assets/icons/arrow-left.svg";

const ButtonBack = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  & img {
    margin-right: 5px;
    vertical-align: bottom;
  }
`;

interface ButtonBack {
  destination: string;
}

const Index = ({ destination }: ButtonBack) => {
  const router = useRouter();

  return (
    <ButtonBack onClick={() => router.push(destination)}>
      <Image width={18} height={18} priority src={IconArrow} alt="<" />
      Regresar
    </ButtonBack>
  );
};

export default Index;
