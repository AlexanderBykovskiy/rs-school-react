import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Details from "./Details";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import React from "react";
import { Provider } from "react-redux";
// import createFetchMock from "vitest-fetch-mock"

vi.mock("react-router-dom", async () => {
  const mod =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );
  return {
    ...mod,
    useParams: vi.fn().mockReturnValue({ movieId: "1" }),
  };
});

/* const fetchMock = createFetchMock(vi);
fetchMock.enableMocks(); */

describe("Testing Details component", () => {
  let details: undefined | HTMLElement;
  /*let image: undefined | HTMLElement;
  let title: undefined | HTMLElement;
  let originalTitle: undefined | HTMLElement;
  let releaseDate: undefined | HTMLElement;
  let popularity: undefined | HTMLElement;
  let voteAverage: undefined | HTMLElement;
  let voteCount: undefined | HTMLElement;*/

  beforeEach(() => {
    /*fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify({
      "adult": false,
      "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
      "belongs_to_collection": null,
      "budget": 20000000,
      "genres": [
        {
          "id": 27,
          "name": "ужасы"
        },
        {
          "id": 9648,
          "name": "детектив"
        }
      ],
      "homepage": "",
      "id": 507089,
      "imdb_id": "tt4589218",
      "original_language": "en",
      "original_title": "Five Nights at Freddy's",
      "overview": "Проблемный охранник начинает работать в пиццерии «У Фредди Фазби». Проводя свою первую ночь на работе, он понимает, что ночную смену в «Фредди» будет не так-то просто выдержать.",
      "popularity": 2054.608,
      "poster_path": "/wCtKSnduzjkMZAAXIcnNF444zEH.jpg",
      "production_companies": [
        {
          "id": 3172,
          "logo_path": "/kDedjRZwO8uyFhuHamomOhN6fzG.png",
          "name": "Blumhouse Productions",
          "origin_country": "US"
        },
        {
          "id": 211144,
          "logo_path": null,
          "name": "Scott Cawthon Productions",
          "origin_country": "US"
        }
      ],
      "production_countries": [
        {
          "iso_3166_1": "US",
          "name": "United States of America"
        }
      ],
      "release_date": "2023-10-25",
      "revenue": 252000000,
      "runtime": 110,
      "spoken_languages": [
        {
          "english_name": "English",
          "iso_639_1": "en",
          "name": "English"
        }
      ],
      "status": "Released",
      "tagline": "Сможешь ли ты выжить?",
      "title": "Пять ночей с Фредди",
      "video": false,
      "vote_average": 8,
      "vote_count": 2129
    }))*/
    render(
      <Provider store={store}>
        <Details />
      </Provider>,
      { wrapper: BrowserRouter },
    );
    details = screen.getByTestId("details");
    /*image = screen.getByTestId("poster");
    title = screen.getByTestId("title");
    originalTitle = screen.getByTestId("original-title");
    releaseDate = screen.getByTestId("release-date");
    popularity = screen.getByTestId("popularity");
    voteAverage = screen.getByTestId("vote-average");
    voteCount = screen.getByTestId("vote-count");*/
  });

  afterEach(() => {});

  test("is exist", () => {
    expect(details).toBeInTheDocument();
  });

  /*test("is exist all fields", () => {
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(originalTitle).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(popularity).toBeInTheDocument();
    expect(voteAverage).toBeInTheDocument();
    expect(voteCount).toBeInTheDocument();
  });*/
});
