import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
    query getCategories {
        categories {
            _id
            name
          } 
    }
`;

export {
    GET_CATEGORIES
}