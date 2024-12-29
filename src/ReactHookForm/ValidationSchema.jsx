import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required!")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabets and spaces!"),
  age: yup
    .number()
    .typeError("Age must be a number!")
    .required("Age is required!")
    .positive("Age must be a positive number!")
    .integer("Age must be an integer!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Invalid email format!")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must match the required pattern!"
    ),
  category: yup.string().required("Category is required!"),
  terms: yup.boolean().oneOf([true], "You must accept the terms!"),
  gender: yup.string().required("Gender is required!"),
});
