import { ReactNode } from 'react'
import { DateTime } from 'luxon'

export type WithChildren<T = {}> =
T & { children?: ReactNode };

export const addOpacity = (color: string, opacity: number) => {
  const opacityHex = Math.round(opacity * 255).toString(16)
  return `${color}${opacityHex}`
}

type FormatDateProps = {
  dateParser: string,
  lang: string
}

export const formatDate = ({ dateParser, lang }: FormatDateProps) => {
  const dateToday = DateTime.now()
  const date = DateTime.fromISO(dateParser, {
    locale: lang
  })

  const format = dateToday.year === date.year ? 'LLL dd' : 'LLL dd yyyy'
  return date.toFormat(format)
}
