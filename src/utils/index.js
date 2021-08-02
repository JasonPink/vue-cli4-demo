import dayjs from 'dayjs'

export function formatDate(timestamp, format = 'YYYY-MM-DD') {
  return dayjs(timestamp * 1000).format(format)
}
