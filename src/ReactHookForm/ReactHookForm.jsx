import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchema } from "./ValidationSchema";

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
  });

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#f0f4f8",
        padding: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={submit}
        sx={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ marginBottom: 2, color: "#333" }}
        >
          React Hook Form
        </Typography>
        <Stack spacing={2}>
          {/* Name Field */}
          <TextField
            {...register("name")}
            placeholder="Please Enter Name..."
            variant="outlined"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            fullWidth
          />

          {/* Age Field */}
          <TextField
            {...register("age")}
            placeholder="Please Enter Age..."
            variant="outlined"
            error={!!errors.age}
            helperText={errors.age ? errors.age.message : ""}
            fullWidth
          />

          {/* Email Field */}
          <TextField
            {...register("email")}
            placeholder="Please Enter Email..."
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
            fullWidth
          />

          {/* Select Field */}
          <FormControl fullWidth error={!!errors.category}>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem value="cat1">Category 1</MenuItem>
                  <MenuItem value="cat2">Category 2</MenuItem>
                  <MenuItem value="cat3">Category 3</MenuItem>
                </Select>
              )}
            />
            {errors.category && (
              <Typography color="error">{errors.category.message}</Typography>
            )}
          </FormControl>

          {/* Checkbox Field */}
          <FormControlLabel
            control={
              <Controller
                name="terms"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="I agree to the terms"
          />
          {errors.terms && (
            <Typography color="error">{errors.terms.message}</Typography>
          )}

          {/* Radio Button Field */}
          <FormControl fullWidth error={!!errors.gender}>
            <FormLabel>Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              )}
            />
            {errors.gender && (
              <Typography color="error">{errors.gender.message}</Typography>
            )}
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
