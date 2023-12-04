import { boolean, mixed, number, object, ref, string } from "yup";
import { typeFile } from "./types.ts";

export const formSchema = object().shape({
  name: string().required(),
  age: number()
    .typeError("age must be a number")
    .required("required")
    .test("is not negative", "is not negative", (value) => value >= 0)
    .integer(),
  email: string().required().email(),
  password: string()
    .required()
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{4,})/,
      "Invalid password: 1 number, 1 lowercase, 1 uppercase, 1 special",
    ),
  confirmPassword: string()
    .required("Confirm Password is required")
    .oneOf([ref("password")], "Passwords must match"),
  gender: string().required(),
  accept: boolean().required().oneOf([true], "required"),
  image: mixed()
    .required("Picture is required")
    .test("fileFormat", "Only PNG and JPEG are allowed.", (value: unknown) => {
      const myValueList = value as typeFile[];
      if (myValueList.length) {
        return (
          myValueList[0].type === "image/png" ||
          myValueList[0].type === "image/jpeg"
        );
      } else {
        return false;
      }
    })
    .test(
      "fileSize",
      "File size is too large. Maximum 5MB.",
      (value: unknown) => {
        const myValueList = value as typeFile[];
        if (myValueList.length) {
          return myValueList[0].size <= 5 * 1024 * 1024;
        } else {
          return false;
        }
      },
    ),
  country: string().required(),
});
