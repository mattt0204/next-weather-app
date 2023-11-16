type Props = {
  date: string
  location: string
  avgTemp: number
}

export default function ForcastWeatherItem({ date, location, avgTemp }: Props) {
  return (
    <li>
      {location}의 날씨는 {date} 섭씨 {avgTemp}도입니다.
    </li>
  )
}
