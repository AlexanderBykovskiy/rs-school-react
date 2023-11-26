import Head from 'next/head';
import Layout from "@/components/Layout/Layout";
import React from "react";
import MainBlockContent from "@/components/MainBlockContent/MainBlockContent";
import {getMovieList, getSearchMovieList} from "@/api/api";
import {GetServerSideProps} from "next";
import {typeMovieResponse, typeMovieResponseMiddle} from "@/api/api.types";

export const getServerSideProps: GetServerSideProps<{data: (typeMovieResponse | null)}> = async (context): Promise<{
  props: typeMovieResponseMiddle
}> => {

    const q = (context.query.q && typeof(context.query.q) === "string") ? context.query.q : null;
    const page = (context.query.page && Number(context.query.page) > 0) ? Number(context.query.page) : 1;

  const responseData =  q === null ? await getMovieList(page) : await getSearchMovieList(q!, page)

  return { props:
        {
          data: responseData,
            searchPhrase: q,
        }
  };
}

const Page: React.FC<typeMovieResponseMiddle> = ({data, searchPhrase}) => {

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Movie App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <MainBlockContent data={data} searchPhrase={searchPhrase}/>
        </Layout>
    </>
  )
}

export default Page;
