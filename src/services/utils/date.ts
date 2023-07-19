import { MONTH_NAMES } from "@/mocks/calendar";

export const renderDateFirebase = (value_date: any) => {
  if (value_date) {
    // @ts-ignore
    const date = new window.Date(
      value_date.seconds * 1000 + value_date.nanoseconds / 1000000
    );
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${day} ${MONTH_NAMES[month]}`;
  }
};
