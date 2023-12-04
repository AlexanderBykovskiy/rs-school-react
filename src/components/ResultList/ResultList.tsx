import React from "react";
import { useAppSelector } from "../../store/store.ts";
import classes from "./ResultList.style.module.css";

export const ResultList: React.FC = () => {
  const resultList = useAppSelector((state) => state.results.resultList);

  return (
    <div className={classes.wrapper}>
      {resultList.length ? (
        <div className={classes.item}>
          {resultList.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className={classes.item}>
                <div className={classes.image}>
                  <img src={item.image} alt="" />
                </div>
                <div className={classes.row}>
                  <span>Name:</span> <div>{item.name}</div>
                </div>
                <div className={classes.row}>
                  <span>Email:</span> <div>{item.email}</div>
                </div>
                <div className={classes.row}>
                  <span>Age:</span> <div>{item.age}</div>
                </div>
                <div className={classes.row}>
                  <span>Gender:</span> <div>{item.gender}</div>
                </div>
                <div className={classes.row}>
                  <span>Password:</span> <div>{item.password}</div>
                </div>
                <div className={classes.row}>
                  <span>Country:</span> <div>{item.country}</div>
                </div>
                <div className={classes.row}>
                  <span>Accept:</span>{" "}
                  <div>{item.accept ? "I agree" : "I not agree"}</div>
                </div>
              </div>
              {index !== resultList.length - 1 && (
                <div className={classes.separator}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className={classes.empty}>
          No results. Fill out and submit one of the forms.
        </div>
      )}
    </div>
  );
};
