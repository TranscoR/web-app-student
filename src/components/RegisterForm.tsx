import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@/components/ui/form/Input";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";
import { creatAccount } from "@/api/auth";
import { Field } from "@/styles";
import { GROUP_NAMES, TURNS } from "@/mocks/school";
import { Typography, FormControl, MenuItem, Select } from "@mui/material";

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 77% 20%;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  @media screen and (max-width: 820px) {
    grid-template-columns: 100%;
  }
`;

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    creatAccount(dataForm)
      .then(() => {
        setLoading(false);
        // setUserInfo(info);
        router.push("/home");
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  // @ts-ignore
  const gradeOptions =
    watch("education") === "primaria"
      ? ["primero", "segundo", "tercero", "cuarto", "quinto", "sexto"]
      : ["primero", "segundo", "tercero"];

  return (
    <Box>
      <Title>Formulario de Registro</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Field>
            <label>Nombre del Alumno</label>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="student_name"
              placeholder="Escribe el nombre del alumno"
              required={true}
            />
          </Field>
          <Field>
            <label>Número de lista</label>
            <Input
              type="number"
              register={register}
              errors={errors}
              keyName="list_number"
              placeholder="0"
              required={true}
            />
          </Field>
        </Grid>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Correo electrónico</label>
              <Input
                type="email"
                register={register}
                errors={errors}
                keyName="email"
                placeholder="Ingresa un correo electrónico"
                required={true}
              />
            </Field>
            <Field>
              <label>Contraseña</label>
              <Input
                type="password"
                register={register}
                errors={errors}
                keyName="password"
                placeholder="Escribe una contraseña"
                required={true}
              />
            </Field>
          </Stack>
        </Box>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Nombre de la escuela</label>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="school_name"
                placeholder="Escribe un nombre"
                required={true}
              />
            </Field>
            <Field>
              <label>Escolaridad</label>
              <Controller
                name="education"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Box>
                    <FormControl fullWidth>
                      <Select
                        id="mui-component-select-education"
                        variant="outlined"
                        {...field}
                      >
                        {["primaria", "secundaria"].map(
                          (reason: any, k: any) => (
                            <MenuItem key={k} value={reason}>
                              {reason}
                            </MenuItem>
                          )
                        )}
                      </Select>
                      {errors.education && (
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: "Prompt" }}
                        >
                          * Este campo es requerido
                        </Typography>
                      )}
                    </FormControl>
                  </Box>
                )}
              />
            </Field>
          </Stack>
        </Box>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Grado</label>
              <Controller
                name="grade"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Box>
                    <FormControl fullWidth>
                      <Select
                        id="mui-component-select-grade"
                        variant="outlined"
                        {...field}
                      >
                        {gradeOptions.map((reason: any, k: any) => (
                          <MenuItem key={k} value={reason}>
                            {reason}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.grade && (
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: "Prompt" }}
                        >
                          * Este campo es requerido
                        </Typography>
                      )}
                    </FormControl>
                  </Box>
                )}
              />
            </Field>
            <Field>
              <label>Grupo</label>
              <Controller
                name="turn"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Box>
                    <FormControl fullWidth>
                      <Select
                        id="mui-component-select-turn"
                        variant="outlined"
                        {...field}
                      >
                        {GROUP_NAMES.map((reason: any, k: any) => (
                          <MenuItem key={k} value={reason}>
                            {reason}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.turn && (
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: "Prompt" }}
                        >
                          * Este campo es requerido
                        </Typography>
                      )}
                    </FormControl>
                  </Box>
                )}
              />
            </Field>
          </Stack>
        </Box>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Nombre del profesor</label>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="teacher_name"
                placeholder="Escribe el nombre del alumno"
                required={true}
              />
            </Field>
            <Field>
              <label>Turno</label>
              <Controller
                name="turn"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Box>
                    <FormControl fullWidth>
                      <Select
                        id="mui-component-select-turn"
                        variant="outlined"
                        {...field}
                      >
                        {TURNS.map((reason: any, k: any) => (
                          <MenuItem key={k} value={reason}>
                            {reason}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.turn && (
                        <Typography
                          variant="caption"
                          sx={{ fontFamily: "Prompt" }}
                        >
                          * Este campo es requerido
                        </Typography>
                      )}
                    </FormControl>
                  </Box>
                )}
              />
            </Field>
          </Stack>
        </Box>
        <Field>
          <label>Nombre del Tutor</label>
          <Input
            type="text"
            register={register}
            errors={errors}
            keyName="tutor_name"
            placeholder="Escribe el nombre del tutor"
            required={true}
          />
        </Field>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Teléfono de casa</label>
              <Input
                type="number"
                register={register}
                errors={errors}
                keyName="house_phone_number"
                placeholder="Escribe un teléfono"
                required={true}
              />
            </Field>
            <Field>
              <label>Numero de celular</label>
              <Input
                type="number"
                register={register}
                errors={errors}
                keyName="phone_number"
                placeholder="Escribe un numero de celular"
                required={true}
              />
            </Field>
          </Stack>
        </Box>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Nombre de otro familiar</label>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="subtutor_name"
                placeholder="Escribe el nombre completo de otro familiar"
                required={true}
              />
            </Field>
            <Field>
              <label>Numero de celular</label>
              <Input
                type="number"
                register={register}
                errors={errors}
                keyName="subtutor_phone_number"
                placeholder="Escribe un teléfono"
                required={true}
              />
            </Field>
          </Stack>
        </Box>
        <Field>
          <label>Dirección</label>
          <Input
            type="text"
            register={register}
            errors={errors}
            keyName="address"
            placeholder="Escribe una dirección"
            required={true}
          />
        </Field>
        <Stack direction="row" spacing={2}>
          <Field sx={{ margin: "0px !important" }}>
            <label>Entre que calle</label>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="first_street_reference"
              placeholder="Escribe una calle"
              required={true}
            />
          </Field>
          <Field>
            <label>Entre que otra calle</label>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="second_street_reference"
              placeholder="Escribe una calle"
              required={true}
            />
          </Field>
        </Stack>
        <Box mt={2}>
          <Stack direction="row" spacing={2}>
            <Field sx={{ margin: "0px !important" }}>
              <label>Color de casa</label>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="house_color"
                placeholder="Escribe un color"
                required={true}
              />
            </Field>
            <Field>
              <label>Color de puerta o zaguan</label>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="door_color"
                placeholder="Escribe un color"
                required={true}
              />
            </Field>
          </Stack>
        </Box>
        <Box mt={2}>
          <Field>
            <Stack direction="row" spacing={0} alignItems="center">
              <Box>
                <Checkbox checked={true} />
              </Box>
              <Box>
                <label style={{ fontWeight: "400" }}>
                  Estoy de acuerdo con lo establecido y con{" "}
                  <Link href="/terms-and-conditions">
                    Términos y condiciones
                  </Link>
                </label>
              </Box>
            </Stack>
          </Field>
        </Box>
        <LoadingButton
          sx={{ margin: "20px 0 0px", color: "#fff", boxShadow: "none" }}
          size="medium"
          color="primary"
          type="submit"
          loading={loading}
          variant="contained"
          fullWidth={true}
        >
          <span>Registrar</span>
        </LoadingButton>
        <Link href="/login">
          <Button
            fullWidth={true}
            variant="text"
            sx={{
              marginTop: "10px",
              fontFamily: "Prompt",
              boxShadow: "none",
              marginRight: "10px",
              padding: "6px 30px",
            }}
          >
            Ya tengo cuenta
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default Index;
