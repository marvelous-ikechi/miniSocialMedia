import { format, isToday } from "date-fns";

export const formatDateAndTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  if (isToday(date)) {
    // If the message was sent today, show only the time
    return format(date, "HH:mm");
  } else {
    // If the message was sent on a different day, show the date
    return format(date, "yyyy-MM-dd");
  }
};
