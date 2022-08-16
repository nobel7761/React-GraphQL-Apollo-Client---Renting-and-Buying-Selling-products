import { useQuery } from '@apollo/client';
import LoadingSpinner from '../Components/Shared/LoadingSpinner/LoadingSpinner';
import GET_USER_BY_EMAIL from './gql-queries';

export const useGetUserByEmail = (email) => {
    const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, {
        variables: { email: email }
    });
    if (loading) return <LoadingSpinner />
    if (error) return <p>Something Wrong!!!</p>

    return data
}