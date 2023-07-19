import styled from "styled-components";
import Box from "@mui/material/Box";
import ButtonBack from "@/components/ButtonBack";
import { COLORS } from "@/constants/colors";

const Content = styled(Box)`
  margin: 60px auto;
  max-width: 1000px;
  @media screen and (max-width: 820px) {
    margin: 60px 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-weight: 500;
  color: ${COLORS.brightYellow};
`;

const Text = styled.p`
  font-size: 15px;
  text-transform: uppercase;
`;

const Index = () => {
  return (
    <Content>
      <ButtonBack destination="/register" />
      <Title>Términos y condiciones</Title>
      <Box mb={4}>
        <Subtitle>Pagos</Subtitle>
        <Box mt={2}>
          <Text>- No se toleran retrasos en los pagos</Text>
        </Box>
        <Box mt={2}>
          <Text>
            - Por cada periodo vacacional se cobraran 2 semanas diciembre,
            semana santa y fin de curso
          </Text>
        </Box>
        <Box mt={2}>
          <Text>
            - Los alumnos que salgan de 3o de kinder, 6o de primaria y 3o de
            secundaria tambien pagan las vacaciones. este pago es por el período
            que se trabajo aunque no regresen
          </Text>
        </Box>
      </Box>
      <Box>
        <Subtitle>Alumnos</Subtitle>
        <Box mt={2}>
          <Text>
            - Al alumno se le tomará la temperatura al subir y al bajar
          </Text>
        </Box>
        <Box mt={2}>
          <Text>- Las unidades se sanitizan diario</Text>
        </Box>
        <Box mt={2}>
          <Text>
            - El servicio de transporte escolar consta de trasladar al alumno de
            su domicilio o punto de reunion, que se le asigne al colegio y
            viceversa
          </Text>
        </Box>
        <Box mt={2}>
          <Text>
            - Al alumno se le asignara un horario, mismo que debera respetar y
            por lo cual no se le dara tolerancia, sin exception alguna
          </Text>
        </Box>
        <Box mt={2}>
          <Text>
            - El alumno debera mostrar respeto a sus compañeros, operador,
            asistente y peatones de modo que deberia permanecer sentado durante
            el trayecto
          </Text>
        </Box>
        <Box mt={2}>
          <Text>
            - Sera obligacion del alumno abordar la unidad una vez que haya
            salido del colegio y de informar al operador o asistente si requiere
            de mas tiempo dentro de las instalaciones escolares (si demora mas
            tiempo se le dara aviso al tutor)
          </Text>
        </Box>
        <Box mt={2}>
          <Text>
            - Dentro de la unidad de transporte el operador y asistente no se
            hace responsable por objetos olvidados (celular, dinero, trabajos
            escolares, etc.)
          </Text>
        </Box>
        <Box mt={2}>
          <Text>
            - En caso de no encontrar a alguien en el domicilio, el tutor tendra
            la oblogacion de localizar al operador para saber donde lo recogera
            y esto causara cobro de guarderia de $100.00 pesos
          </Text>
        </Box>
      </Box>
    </Content>
  );
};

export default Index;
