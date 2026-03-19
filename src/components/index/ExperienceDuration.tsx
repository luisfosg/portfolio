import { useEffect, useState } from 'react'
import { getDuration } from '@lib/date-utils'

type ExperienceDurationProps = {
  startDate: string
  endDate?: string
  isLasted?: boolean
}

const ExperienceDuration = ({ startDate, endDate, isLasted = false }: ExperienceDurationProps) => {
  const [duration, setDuration] = useState(() => getDuration(startDate, isLasted ? undefined : endDate))

  useEffect(() => {
    const update = () => {
      setDuration(getDuration(startDate, isLasted ? undefined : endDate))
    }

    update()
    const timerId = window.setInterval(update, 60 * 1000)

    return () => window.clearInterval(timerId)
  }, [startDate, endDate, isLasted])

  return <span className="js-experience-duration">{duration}</span>
}

export default ExperienceDuration
