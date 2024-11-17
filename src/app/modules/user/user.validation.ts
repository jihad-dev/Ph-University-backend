import { z } from "zod";

// Define the Zod schema for TUser
export const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: "password must be string"
    })
    .max(20, "Password cannot be more than 20 charectors")
    .optional()
});

// Usage example
export const userValidation = {
  userValidationSchema
};
