import { getCurrentWeather } from '@/utils/getCurrentWeather'
import Link from 'next/link'

type Props = {
  cityName: string
  cityCode: string
}
export default async function CurrentWeatherItem({
  cityName,
  cityCode,
}: Props) {
  const currentWeaher = await getCurrentWeather(cityCode)

  return (
    <li>
      <Link href={`/${cityCode}`}>
        {cityName}의 날씨는 {currentWeaher.current.condition.text}
      </Link>
    </li>
  )
}
