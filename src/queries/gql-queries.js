import { gql } from "@apollo/client";

export const GET_USER_BY_EMAIL = gql`
    query MyQuery($email: String!) {
        users(where: {email: {_eq: $email}}) {
          id
          email
          password
        }
      }
    `