import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '../axios-instance';

export const useUsers = () => {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: () => axiosInstance.get(`/users`),
  });

  return {
    data: query && query.data && query.data.data ? Object.values(query?.data?.data) : [],
    isLoading: query?.isLoading,
  };
};

export const useSingleUser = (id) => {
  const query = useQuery({
    queryKey: ['users', id],
    queryFn: () => axiosInstance.get(`/users${id ? `?id=${id}` : ''}`),
  });

  return {
    data: query && query.data ? query.data : [],
    isLoading: query?.isLoading,
  };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (user) => axiosInstance.post('/users', user),
    onSuccess: () => queryClient.invalidateQueries(['users']),
  });

  return mutation;
};
