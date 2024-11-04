import { z } from "zod";

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required"),
  fatherOccupation: z.string().nonempty("Father's occupation is required"),
  fatherContactNo: z.string().nonempty("Father's contact number is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  motherOccupation: z.string().nonempty("Mother's occupation is required"),
  motherContactNo: z.string().nonempty("Mother's contact number is required")
});

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty("First name is required")
    .max(20, "First name must be 20 characters or fewer")
    .refine(
      val => val === val.charAt(0).toUpperCase() + val.slice(1).toLowerCase(),
      {
        message: "First name must be capitalized"
      }
    ),
  middleName: z.string().optional(),
  lastName: z.string().nonempty("Last name is required").trim()
});

// LocalGuardian schema
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty("Local guardian's name is required"),
  occupation: z.string().nonempty("Local guardian's occupation is required"),
  contactNo: z.string().nonempty("Local guardian's contact number is required"),
  address: z.string().nonempty("Local guardian's address is required")
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().nonempty("Student ID is required"),
  password: z.string().max(30),
  name: userNameValidationSchema,
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Gender is required" })
  }),
  email: z.string().email("Invalid email address"),
  contactNo: z.string().nonempty("Contact number is required"),
  emergencyContactNo: z
    .string()
    .nonempty("Emergency contact number is required"),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string().nonempty("Present address is required"),
  permanentAddress: z.string().nonempty("Permanent address is required"),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active")
});

export default studentValidationSchema;
