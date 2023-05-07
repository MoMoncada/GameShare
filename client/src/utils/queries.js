import { gql } from '@apollo/client'

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_GAMELIBRARY = gql`
    query getGamesLibrary {
        gamelibrary {
            _id
            name
            img
            date_released
            genres
            platforms
          }
    }
    `;

// export const QUERY_GAMELIBRARY = gql`
// `