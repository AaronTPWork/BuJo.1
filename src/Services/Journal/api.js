import { axiosInstance } from '../axios-instance';

export const createJournal = async (journal) => axiosInstance.post(`/daily_journal`, journal);
export const editJournal = async (journal) => {
  // delete it to prevent errors on the BE
  delete journal.state_stream_text;
  return axiosInstance.put(`/daily_journal/${journal.id}`, journal);
};
export const createProject = async ({ user_id, name, color }) =>
  axiosInstance.post(`/ref_project`, { user_id, name, color });
export const editProject = async ({ id, name, color }) =>
  axiosInstance.put(`/ref_project/${id}`, {
    name,
    color,
  });
export const migrateNote = async ({ noteId }) => axiosInstance.get(`/daily_journal_migrate?id=${noteId}`);
