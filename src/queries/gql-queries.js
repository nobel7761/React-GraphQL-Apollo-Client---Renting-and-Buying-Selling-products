import { gql } from "@apollo/client";

export const GET_USER_BY_EMAIL = gql`
  query MyQuery($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      password
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query MyQuery {
    Products {
      id
      name
      price
      description
      brought
      rent
      category_id
      created_at
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
query MyQuery {
  Categories {
    name
    id
  }
}
`