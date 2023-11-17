import React, { useEffect, useState } from "react";
import classes from "./Detais.styles.module.css";
import { Link, useParams } from "react-router-dom";
import { IMG_URL } from "../API/api.constants";
import Loader from "../Loader/Loader";
import { useLazyGetDetailsQuery } from "../API/rtkApi";
import { typeMovieDetails } from "../API/api.types";

const Details: React.FC = () => {
  const { movieId } = useParams();

  const [detailsData, setDetailsData] = useState<null | typeMovieDetails>(null);

  const [getDetailsData, { isFetching }] = useLazyGetDetailsQuery();

  const getData = async (movieId: number) => {
    const data = await getDetailsData(movieId).unwrap();
    console.log(data);
    if (data) {
      setDetailsData(data);
    }
  };

  useEffect(() => {
    const numId = Number(movieId);
    if (numId) getData(numId).then();
  }, [movieId]);

  const dateOfRelease = detailsData
    ? new Date(detailsData?.release_date)
    : undefined;

  return (
    <>
      <div className={classes.wrapper} data-testid="details">
        <Link to="/" className={classes.closeButton}>
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
        {isFetching && <Loader />}
        {detailsData && (
          <div className={classes.contentBlock}>
            <div className={classes.image} data-testid="poster">
              <img src={`${IMG_URL}/${detailsData.poster_path}`} alt="" />
            </div>

            <div className={classes.titleBlock}>
              <div className={classes.currentTitle} data-testid="title">
                {detailsData.title}
              </div>
              <div
                className={classes.originalTitle}
                data-testid="original-title"
              >
                {detailsData.original_title} ({detailsData.original_language})
              </div>
            </div>

            <div className={classes.infoBlock}>
              <div data-testid="release-date">
                <span>Дата релиза:</span>{" "}
                {dateOfRelease &&
                  dateOfRelease.toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
              </div>
              <div data-testid="popularity">
                <span>Популярность:</span> {detailsData.popularity}
              </div>
              <div data-testid="vote-average">
                <span>Средняя оценка:</span> {detailsData.vote_average}
              </div>
              <div data-testid="vote-count">
                <span>Всего оценок:</span> {detailsData.vote_count}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
