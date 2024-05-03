import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axios-instance';

export const useDailyJournals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['journals'],
    queryFn: () => axiosInstance.get('/journal/daily_journal_date'),
  });

  return { journals: data && data.data ? Object.values(data?.data) : [], isLoading };
};

export const useDailyJournalNotes = (date, search = 'no completed') => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['journals', date, search],
    queryFn: () =>
      axiosInstance.get(
        `/journal/daily_journal_date_task?date_created=${date}${search !== 'all' ? `&search=${search}` : ''}`
      ),
  });

  return { notes: data && data.data ? Object.values(data?.data) : [], isLoading, isRefetching };
};

export const useDailyJournalsByUser = (userId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['journals', userId],
    queryFn: () => axiosInstance.get(`/journal/daily_journal_userid?user_id=${userId}`),
  });

  return { journals: data && data.data ? Object.values(data?.data) : [], isLoading };
};

export const useDailyJournalsBySearch = () => {
  const {
    mutate: searchValue,
    data,
    isLoading,
  } = useMutation({
    mutationFn: (search, userId) => {
      if (search === 'no completed')
        return axiosInstance.get(`/journal/journal_search_task?search=${search}&user_id=${userId ?? '0'}`);
      else return axiosInstance.get(`/journal/journal_search?search=${search}&user_id=${userId ?? '0'}`);
    },
  });

  return { searches: data && data.data ? Object.values(data?.data) : [], isLoading, searchValue };
};
