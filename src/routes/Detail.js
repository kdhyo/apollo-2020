import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  let { id } = useParams();
  id = parseInt(id);
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (data && data.movie) {
    return <div>{data.movie.title}</div>;
  }
};
