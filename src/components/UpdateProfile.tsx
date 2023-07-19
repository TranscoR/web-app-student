import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@/components/ui/form/Input";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";
import { updateUserInfo } from "@/api/user";
import { Field } from "@/styles";
import { Typography, FormControl, MenuItem, Select } from "@mui/material";
import { useUserStore } from "@/store";
import { Toaster, toast } from "sonner";

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Index = () => {
  const router = useRouter();

  // @ts-ignore
  const user = useUserStore((state) => state.user);
  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      student_name: user?.student_name || "",
      email: user?.email || "",
      password: user?.password || "",
      school_name: user?.school_name || "",
      education: user?.education?.toLowerCase() || "",
      grade: user?.grade || "",
      turn: user?.turn?.toLowerCase() || "",
      tutor_name: user?.tutor_name || "",
      house_phone_number: user?.house_phone_number || "",
      phone_number: user?.phone_number || "",
      subtutor_name: user?.subtutor_name || "",
      subtutor_phone_number: user?.subtutor_phone_number || "",
      address: user?.address || "",
      first_street_reference: user?.first_street_reference || "",
      second_street_reference: user?.second_street_reference || "",
      house_color: user?.house_color || "",
      door_color: user?.door_color || "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    const info = {
      ...dataForm,
      ...("weeks" in user ? { weeks: [...user?.weeks] } : null),
    };
    updateUserInfo(user?.uid, dataForm)
      .then(() => {
        setLoading(false);
        setUserInfo(info);
        toast.success("Perfil actualizado!");
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
      <Title>Actualizar perfil</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <label>Nombre del Alumno</label>
          <Input
            type="text"
            register={register}
            errors={errors}
            keyName="student_name"
            placeholder="Escribe el nombre del alumno"
            required={true}
            disabled={!user?.active_account}
          />
        </Field>
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
                disabled
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
                disabled={!user?.active_account}
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
                disabled={!user?.active_account}
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
                        disabled={!user?.active_account}
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
                        disabled={!user?.active_account}
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
                        disabled={!user?.active_account}
                        {...field}
                      >
                        {["matutino", "vespertino"].map(
                          (reason: any, k: any) => (
                            <MenuItem key={k} value={reason}>
                              {reason}
                            </MenuItem>
                          )
                        )}
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
            disabled={!user?.active_account}
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
                disabled={!user?.active_account}
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
                disabled={!user?.active_account}
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
                disabled={!user?.active_account}
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
                disabled={!user?.active_account}
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
            disabled={!user?.active_account}
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
              disabled={!user?.active_account}
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
              disabled={!user?.active_account}
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
                disabled={!user?.active_account}
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
                disabled={!user?.active_account}
              />
            </Field>
          </Stack>
        </Box>
        <Box mt={2}>
          <Field>
            <Checkbox checked={true} />
            <label style={{ fontWeight: "400" }}>
              Estoy de acuerdo con lo establecido y con términos y condiciones
            </label>
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
          disabled={!user?.active_account}
        >
          <span>Actualizar</span>
        </LoadingButton>
      </form>
      <Toaster position="bottom-right" />
    </Box>
  );
};

export default Index;
