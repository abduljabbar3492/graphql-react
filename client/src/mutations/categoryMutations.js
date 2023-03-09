import { gql } from '@apollo/client';


const ADD_CATEGORY = gql`
    mutation addCategory($name: String!){
        addCategory(input: {name:$name}){
            name
        }
    }
`
const DELETE_CATEGORY = gql`
    mutation deleteCategory($id: ID!) {
        deleteCategory(id: $id){
            name
        }
    }
`

export { ADD_CATEGORY, DELETE_CATEGORY }