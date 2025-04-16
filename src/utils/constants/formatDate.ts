import dayjs from "dayjs";

export function formatDate(
  date: string | Date,
  formatString: string = "DD/MM/YYYY HH:mm"
): string {
  return dayjs(date).format(formatString);
}
