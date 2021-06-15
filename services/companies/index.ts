import { useQuery } from '@apollo/client';
import { GET_COMPANIES_STATS } from '../../graphql/queries/companies';
import { Query } from '../../graphql/types';

export const useCompanies = () => {
  const { data, loading, error } = useQuery<Query>(GET_COMPANIES_STATS);
  return {
    data: data?.dashboard,
    loading,
    error,
  };
};
