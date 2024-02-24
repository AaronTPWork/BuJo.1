import { axiosInstance } from '../axios-instance';

export const createJournal = async (journal) => axiosInstance.post(`/journal/daily_journal`, journal);
export const editJournal = async (journal) => axiosInstance.put(`/journal/daily_journal/${journal.id}`, journal);
