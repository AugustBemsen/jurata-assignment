import { gql } from "@apollo/client";

const GetAnswers = gql`
  query Answer {
    answer(query: $question) @rest(type: "Answer", path: "/question?{args}") {
      answer
      image
      url
    }
  }
`;

export default GetAnswers;
