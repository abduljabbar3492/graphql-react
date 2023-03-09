import { useQuery} from '@apollo/client';
import CategoryRow from './CategoryRow';
import { GET_CATEGORIES } from '../queries/categoryQueries';
import Spinner from './Spinner';

export default function Category(){
    const {loading, error, data} = useQuery(GET_CATEGORIES);
    console.log('data', data)
    if(loading) return <Spinner />
    if(error) return <p>Something went wrong....</p>
    return (
        <>
        {!loading && !error && (
            <table className='table table-hover mt-3'>
                <thead>
                    <tr className='fw-bold'>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {data.categories.map(category => (
                        <CategoryRow key={category._id} category={category} />
                    ))}
                </tbody>
            </table>
        )}
        </>
    )
}