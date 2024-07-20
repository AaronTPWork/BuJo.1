import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axios-instance';
import { useGlobalValues } from '../../Stores/GlobalValues';
import { parseISO } from 'date-fns';

export const useDailyJournals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['journals'],
    queryFn: () => axiosInstance.get('/daily_journal_date'),
  });

  return { journals: data && data.data ? Object.values(data?.data) : [], isLoading };
};

export const useDailyJournalNotes = (date, search = 'no completed') => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['journals', date, search],
    queryFn: () =>
      axiosInstance.get(
        `/daily_journal_date_task?date_created=${date}${
          search !== 'all' ? `&search=${search}` : ''
        }`,
      ),
  });

  return { notes: data && data.data ? Object.values(data?.data) : [], isLoading, isRefetching };
};

export const useDailyJournalsByUser = (userId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['journals', userId],
    queryFn: () => axiosInstance.get(`/daily_journal_userid?user_id=${userId}`),
  });

  return { journals: data && data.data ? Object.values(data?.data) : [], isLoading };
};

export const useDailyJournalsBySearch = () => {
  const { selectedUserId, currentFilter } = useGlobalValues();
  const {
    mutate: searchValue,
    data,
    isLoading,
  } = useMutation({
    mutationFn: (data) => {
      const { search } = data;
      if (currentFilter === 'no completed')
        return axiosInstance.get(
          `/journal_search_task?search=${search}&user_id=${
            selectedUserId ?? '0'
          }&state_stream=${currentFilter}`,
        );
      else
        return axiosInstance.get(
          `/journal_search?search=${search}&user_id=${selectedUserId ?? '0'}`,
        );
    },
  });

  return {
    searches:
      data && data.data
        ? Object.values(data?.data)?.sort(
            (a, b) => parseISO(b.date_created) - parseISO(a.date_created),
          )
        : [],
    isLoading,
    searchValue,
  };
};
