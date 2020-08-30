import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Movie } from "../components/Movie";

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movies.map((movies) => <Movie key={movies.id} id={movies.id}></Movie>);
}

export default ExchangeRates;
