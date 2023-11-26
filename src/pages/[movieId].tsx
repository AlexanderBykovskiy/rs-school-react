import Head from 'next/head';
import {GetServerSideProps} from "next";
import {typeMovieResponse, typeMovieResponseMiddle} from "@/api/api.types";
import {getMovie, getMovieList, getSearchMovieList} from "@/api/api";
import MainBlockContent from "@/components/MainBlockContent/MainBlockContent";
import Layout from "@/components/Layout/Layout";
import React from "react";
import Details from '@/components/Details/Details';


export const getServerSideProps: GetServerSideProps<{data: (typeMovieResponse | null)}> = async (context): Promise<{
    props: typeMovieResponseMiddle
}> => {

    const q = (context.query.q && typeof(context.query.q) === "string") ? context.query.q : null;
    const page = (context.query.page && Number(context.query.page) > 0) ? Number(context.query.page) : 1;
    const perPage = (context.query.page && Number(context.query.page) > 0) ? Number(context.query.page) : null;
    const movieId = context.query.movieId;

    console.log('###', context)

    const responseData =  q === null ? await getMovieList(page) : await getSearchMovieList(q!, page);
    const detailResponseData =  (movieId && Number(movieId)) ? await getMovie(Number(movieId)) : null;

    return { props:
            {
                data: responseData,
                details: detailResponseData,
                page: page,
                perPage: perPage,
                searchPhrase: q,
            }
    };
}

const Page: React.FC<typeMovieResponseMiddle> = ({data, page, perPage, searchPhrase, details}) => {

    return (
        <>
            <Head>
                <title>Movie App</title>
                <meta name="description" content="Movie Details" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <MainBlockContent data={data} searchPhrase={searchPhrase}/>
                <Details data={details} page={page} perPage={perPage} q={searchPhrase}/>
            </Layout>
        </>
    )
}

export default Page;
