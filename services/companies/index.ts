import { useQuery } from '@apollo/client';
import { GET_COMPANIES_STATS } from '../../graphql/queries/companies';
import { Query } from '../../graphql/types';

type CompaniesStatsProps = {
  timeUnit?: string;
  timeUnitCount?: number;
};

export const useCompanies = (props: CompaniesStatsProps = {}) => {
  const { data, loading, error } = useQuery<Query>(GET_COMPANIES_STATS, {
    skip: !props,
    variables: props,
  });

  return {
    data: data?.dashboard,
    loading,
    error,
  };
};
