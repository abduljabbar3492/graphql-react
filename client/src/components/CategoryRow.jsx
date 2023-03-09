import { useMutation} from '@apollo/client';
import {FaTrash} from 'react-icons/fa';

import { DELETE_CATEGORY } from '../mutations/categoryMutations';
import { GET_CATEGORIES } from '../queries/categoryQueries';
const CategoryRow = ({category}) => {
    const[deleteCategory] =useMutation(DELETE_CATEGORY, {
        variables: {id: category._id},
        refetchQueries: [{query: GET_CATEGORIES, }]
    })
  return (
    <tr>
        <td>{category._id}</td>
        <td>{category.name}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteCategory}>
                <FaTrash />
            </button>
        </td>
    </tr>
  )
}

export default CategoryRow