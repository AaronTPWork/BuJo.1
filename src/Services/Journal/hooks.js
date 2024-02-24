import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axios-instance';

export const useDailyJournals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['journals'],
    queryFn: () => axiosInstance.get('/journal/daily_journal_date'),
  });

  return { journals: data && data.data ? Object.values(data?.data) : [], isLoading };
};

export const useDailyJournalNotes = (date) => {
  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['journals', date],
    queryFn: () => axiosInstance.get(`/journal/daily_journal_date?date_created=${date}`),
  });

  return { notes: data && data.data ? Object.values(data?.data) : [], isLoading, isRefetching };
};
