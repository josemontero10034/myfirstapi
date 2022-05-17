import { Diaryentry, nonsensitiveinfo } from '../type'
import diaryData from './diaries.json'
const diaries: Diaryentry[] = diaryData as Diaryentry[]
export const getentries = (): Diaryentry[] => diaries
export const getentrieswithoutsensitiveinfo = (): nonsensitiveinfo[] => diaries
export const addentry = (): undefined => undefined
