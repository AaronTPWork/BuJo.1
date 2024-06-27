import { axiosInstanceBase } from '../axios-instance';

export const changeDueDate = async (due_date, datum) => {
  return axiosInstanceBase.put(`/journal/daily_journal/${datum?.id}`, {
    text_stream: datum?.text_stream,
    state_stream: datum?.state_stream,
    context_stream: datum?.context_stream,
    due_date,
  });
};
