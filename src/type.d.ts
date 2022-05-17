export type weather = 'sunny'|'rainy'|'cloudy'|'windy'|'storny'
export type visibility = 'grear'|'good'|'ok'|'poor'
export interface Diaryentry{
  id: number
  date: string
  weather: weather
  visibility: visibility
  comment: string
}
export type nonsensitiveinfo = omit < Diaryentry, 'comment' >
