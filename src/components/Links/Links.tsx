import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Links.style.module.css";

export const Links: React.FC = () => {
  return (
    <nav className={classes.wrapper}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/uncontrolled-form"}>Uncontrolled form</NavLink>
      <NavLink to={"/controlled-form"}>Controlled form</NavLink>
    </nav>
  );
};
