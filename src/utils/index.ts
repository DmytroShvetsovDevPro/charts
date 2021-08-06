import dayjs from 'dayjs';

export const formatDate = (date: number, day?: boolean): string => {
  if (day) return dayjs(date).format('HH:MM');
  return dayjs(date).format('MMMM DD');
};
