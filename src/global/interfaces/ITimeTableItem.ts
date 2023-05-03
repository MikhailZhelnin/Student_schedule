import {Dayjs} from "dayjs";

export interface ITimeTableItem {
  id: string
  subject: string
  teacher: string
  room: string
  day: string
  time: {
    from: Dayjs
    to: Dayjs
  }
  color: string
}