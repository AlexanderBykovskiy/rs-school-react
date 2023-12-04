import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import { number, string, boolean } from "yup";
import { genderList, typeResult } from "../../store/types.ts";
import { addResult } from "../../store/resultsReducer.ts";
import { useNavigate } from "react-router-dom";

function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const Uncontrolled: React.FC = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const name = useRef<HTMLInputElement | null>(null);
  const age = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const confirmPassword = useRef<HTMLInputElement | null>(null);
  const gender = useRef<HTMLInputElement | null>(null);
  const accept = useRef<HTMLInputElement | null>(null);
  const image = useRef<HTMLInputElement | null>(null);
  const country = useRef<HTMLSelectElement | null>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);
  const [acceptError, setAcceptError] = useState<string | null>(null);
  const [pictureError, setPictureError] = useState<string | null>(null);

  const countryList = useAppSelector((state) => state.countries.countryList);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let myFile: undefined | string;

    const file =
      image.current?.files && image.current?.files[0]
        ? image.current?.files[0]
        : undefined;

    if (file) {
      myFile = (await getBase64(file)) as string;
      if (myFile) setPictureError(null);
      else setPictureError("required file");
    } else {
      setPictureError("required file");
    }

    try {
      await string()
        .required()
        .validate(name.current?.value);
      setNameError(null);
    } catch (err) {
      const error = err as { errors: string[] };
      setNameError(error.errors.join(",") as string);
    }

    try {
      await number()
        .required()
        .integer()
        .test("is not negative", "is not negative", (value) => value >= 0)
        .validate(age.current?.value ? age.current.value : 0);
      setAgeError(null);
    } catch (err) {
      const error = err as { errors: string[] };
      setAgeError(error.errors.join(",") as string);
    }

    try {
      await string()
        .required()
        .email()
        .validate(email.current?.value);
      setEmailError(null);
    } catch (err) {
      const error = err as { errors: string[] };
      setEmailError(error.errors.join(",") as string);
    }

    try {
      await string()
        .required()
        .matches(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{4,})/,
          "Invalid password: 1 number, 1 lowercase, 1 uppercase, 1 special",
        )
        .validate(password.current?.value);
      setPasswordError(null);
    } catch (err) {
      const error = err as { errors: string[] };
      setPasswordError(error.errors.join(",") as string);
    }

    try {
      await string()
        .required()
        .oneOf([password.current?.value ?? ""], "Passwords must match")
        .validate(confirmPassword.current?.value);
      setConfirmPasswordError(null);
    } catch (err) {
      const error = err as { errors: string[] };
      setConfirmPasswordError(error.errors.join(",") as string);
    }

    try {
      await boolean()
        .oneOf([true], "required")
        .validate(accept.current?.checked);
      setAcceptError(null);
    } catch (err) {
      const error = err as { errors: string[] };
      setAcceptError(error.errors.join(",") as string);
    }

    if (
      !nameError &&
      !ageError &&
      !emailError &&
      !passwordError &&
      !acceptError &&
      myFile
    ) {
      const formObj: typeResult = {
        id: Date.now(),
        name: name.current?.value ?? "",
        age: Number(age.current?.value) ?? 0,
        email: email.current?.value ?? "",
        password: password.current?.value ?? "",
        gender: gender.current?.checked ? genderList.male : genderList.female,
        accept: !!accept.current?.checked,
        image: myFile,
        country: country.current?.value ?? "",
      };

      dispatch(addResult(formObj));

      navigate("/");
    }
  };

  return (
    <form
      className="form"
      method="post"
      encType="multipart/form-data"
      onSubmit={(e) => onSubmit(e)}
    >
      <div className="field-wrapper">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={name} />
        {nameError && <div className="error">{nameError}</div>}
      </div>
      <div className="field-wrapper">
        <label htmlFor="age">Age</label>
        <input id="age" type="number" step={0.1} ref={age} />
        {ageError && <div className="error">{ageError}</div>}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={email} />
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div className="field-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={password} />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>
      <div className="field-wrapper">
        <label htmlFor="condirm-password">Confirm password</label>
        <input id="condirm-password" type="password" ref={confirmPassword} />
        {confirmPasswordError && (
          <div className="error">{confirmPasswordError}</div>
        )}
      </div>
      <div className="horizontal-radio-group">
        <div className="radio-group-title">Gender:</div>
        <div className="field-wrapper">
          <div className="radio-row">
            <div className="radio-wrapper">
              <input
                type="radio"
                name="group"
                id="man"
                defaultChecked={true}
                value={genderList.male}
                ref={gender}
              />
              <span aria-hidden="true"></span>
            </div>
            <label htmlFor="man">Man</label>
          </div>
        </div>
        <div className="field-wrapper">
          <div className="radio-row">
            <div className="radio-wrapper">
              <input
                type="radio"
                name="group"
                id="woman"
                value={genderList.female}
              />
              <span aria-hidden="true"></span>
            </div>
            <label htmlFor="woman">Woman</label>
          </div>
        </div>
      </div>
      <div className="field-wrapper">
        <div className="radio-row">
          <input id="accept" type="checkbox" ref={accept} />
          <label htmlFor="accept">I agree to complete these stupid tasks</label>
          {acceptError && <div className="error">{acceptError}</div>}
        </div>
      </div>
      <div className="field-wrapper image-wrapper">
        <div className="radio-row">
          <label htmlFor="image">Image:</label>
          <input id="image" type="file" accept="image/*" ref={image} />
          {pictureError && <div className="error">{pictureError}</div>}
        </div>
      </div>
      <div className="field-wrapper">
        <label htmlFor="country">Country</label>
        <select id="country" ref={country} autoComplete="on">
          {countryList.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
