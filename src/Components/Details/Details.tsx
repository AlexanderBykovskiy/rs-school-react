import React, { useEffect, useState } from "react";
import classes from "./Detais.styles.module.css";
import { Link, useParams } from "react-router-dom";
import { typeMovieDetails } from "../API/api.types";
import { IMG_URL } from "../API/api.constants";
import { getMovie } from "../API/api";
import Loader from "../Loader/Loader";

const Details: React.FC = () => {
  const { movieId } = useParams();

  const [dataObj, setDataObj] = useState<typeMovieDetails | null>(null);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  const getData = async (id: number) => {
    setIsFetchingData(true);

    const responseData: typeMovieDetails | null = await getMovie(id);

    if (responseData) {
      setDataObj(responseData);
    }

    setIsFetchingData(false);
  };

  useEffect(() => {
    if (movieId) {
      getData(Number(movieId)).then();
    }
  }, [movieId]);

  const dateOfRelease = dataObj ? new Date(dataObj?.release_date) : undefined;

  return (
    <>
      <div className={classes.wrapper}>
        <Link
          to="/"
          className={classes.closeButton}
          onClick={() => setDataObj(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes.icon}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </Link>
        {isFetchingData && <Loader />}
        {dataObj && (
          <div className={classes.contentBlock}>
            <div className={classes.image}>
              <img src={`${IMG_URL}/${dataObj.poster_path}`} alt="" />
            </div>

            <div className={classes.titleBlock}>
              <div className={classes.currentTitle}>{dataObj.title}</div>
              <div className={classes.originalTitle}>
                {dataObj.original_title} ({dataObj.original_language})
              </div>
            </div>

            <div className={classes.infoBlock}>
              <div>
                <span>Дата релиза:</span>{" "}
                {dateOfRelease &&
                  dateOfRelease.toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
              </div>
              <div>
                <span>Популярность:</span> {dataObj.popularity}
              </div>
              <div>
                <span>Средняя оценка:</span> {dataObj.vote_average}
              </div>
              <div>
                <span>Всего оценок:</span> {dataObj.vote_count}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
