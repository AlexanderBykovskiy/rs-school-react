import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { typeFile, typeForm } from "./types.ts";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";
import { formSchema } from "./scheme.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { addResult } from "../../store/resultsReducer.ts";
import {genderList, typeResult} from "../../store/types.ts";
import { useNavigate } from "react-router-dom";

function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const Controlled: React.FC = () => {
  const countryList = useAppSelector((state) => state.countries.countryList);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onFormSubmit: SubmitHandler<typeForm> = async (data) => {
    const image = data.image as typeFile[];

    const file = image.length ? image[0] : undefined;

    if (file) {
      const myFile = (await getBase64(file as unknown as Blob)) as string;

      console.log(data.gender)

      const formObj: typeResult = {
        id: Date.now(),
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        gender: data.gender,
        accept: data.accept,
        image: myFile,
        country: data.country,
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
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="field-wrapper">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name?.message && (
          <div className="error">{errors.name?.message}</div>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="age">Age</label>
        <input id="age" type="number" step={0.1} {...register("age")} />
        {errors.age?.message && (
          <div className="error">{errors.age?.message}</div>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" {...register("email")} />
        {errors.email?.message && (
          <div className="error">{errors.email?.message}</div>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password?.message && (
          <div className="error">{errors.password?.message}</div>
        )}
      </div>
      <div className="field-wrapper">
        <label htmlFor="condirm-password">Confirm password</label>
        <input
          id="condirm-password"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <div className="error">{errors.confirmPassword?.message}</div>
        )}
      </div>
      <div className="horizontal-radio-group">
        <div className="radio-group-title">Gender:</div>
        <div className="field-wrapper">
          <div className="radio-row">
            <div className="radio-wrapper">
              <input
                type="radio"
                id="man"
                value={genderList.male}
                defaultChecked={true}
                {...register("gender")}
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
                id="woman"
                value={genderList.female}
                {...register("gender")}
                defaultChecked={false}
              />
              <span aria-hidden="true"></span>
            </div>
            <label htmlFor="woman">Woman</label>
          </div>
        </div>
      </div>
      <div className="field-wrapper">
        <div className="radio-row">
          <input
            id="accept"
            type="checkbox"
            {...register("accept")}
            defaultChecked={false}
          />
          <label htmlFor="accept">I agree to complete these stupid tasks</label>
          {errors.accept?.message && (
            <div className="error">{errors.accept?.message}</div>
          )}
        </div>
      </div>
      <div className="field-wrapper image-wrapper">
        <div className="radio-row">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image")}
          />
          {errors.image?.message && (
            <div className="error">{errors.image?.message}</div>
          )}
        </div>
      </div>
      <div className="field-wrapper">
        <label htmlFor="country">Country</label>
        <select id="country" {...register("country")} autoComplete="on">
          {countryList.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={!!Object.keys(errors).length}>
        Submit
      </button>
    </form>
  );
};
