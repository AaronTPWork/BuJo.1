import { axiosInstance } from '../axios-instance';

export const createJournal = async (journal) => axiosInstance.post(`/journal/daily_journal`, journal);
export const editJournal = async (journal) => {
  // delete it to prevent errors on the BE
  delete journal.state_stream_text;
  return axiosInstance.put(`/journal/daily_journal/${journal.id}`, journal);
};
export const createProject = async ({ user_id, name, color }) =>
  axiosInstance.post(`/journal/ref_project`, { user_id, name, color });
export const editProject = async ({ id, name, color }) =>
  axiosInstance.put(`/journal/ref_project/${id}`, {
    name,
    color,
  });
export const migrateNote = async ({ noteId }) => axiosInstance.get(`/journal/daily_journal_migrate?id=${noteId}`);
