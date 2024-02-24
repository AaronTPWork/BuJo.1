import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axios-instance';

export const useJournalRefs = (refName) => {
  const query = useQuery({
    queryKey: [refName],
    queryFn: () => axiosInstance.get(`/journal/${refName}`),
  });

  return {
    data: query && query.data && query.data.data ? Object.values(query?.data?.data) : [],
    isLoading: query?.isLoading,
  };
};

export const useSingleJournalRef = (refName, id) => {
  const query = useQuery({
    queryKey: [refName, id],
    queryFn: () => axiosInstance.get(`/journal/${refName}?id=${id}`),
  });

  return {
    data: query && query.data && query.data.data ? Object.values(query?.data?.data) : [],
    isLoading: query?.isLoading,
  };
};
