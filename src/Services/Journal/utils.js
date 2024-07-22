import { format, parseISO } from 'date-fns';

export const appendDueDate = (note) => {
  let res = '';
  if (note.due_date) {
    try {
      const REMINDER_CONTEXT_ID = '2';
      const DUE_TIME = format(parseISO(note?.due_date), 'hh:mm aaa');
      const DUE_DATE = format(parseISO(note?.due_date), 'yyyy-MM-dd');
      let date_str =
        note.context_stream === REMINDER_CONTEXT_ID
          ? `Due: ${DUE_DATE}`
          : `Time: ${DUE_DATE} ${DUE_TIME}`;
      res = date_str;
    } catch (error) {
      console.error('Error parsing date', note?.due_date, error);
    }
  }

  return res;
};
