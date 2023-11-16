import ForcastWeatherItem from '@/components/ForcastWeatherItem'
import HomeButton from '@/components/HomeButton'
import { getForcastWeather } from '@/utils/getFutureWeather'
import React from 'react'

type Props = {
  params: {
    location: string
  }
}

export async function generateMetadata({ params }: Props) {
  const title = `${params.location}의 3일 날씨`
  return {
    title,
  }
}

export default async function DetailPage({ params }: Props) {
  // 3일 데이터
  // 3일 데이터에 forecast.forecastday
  // 리스트
  // forecast.forecastday[0].date 날짜
  // forecast.forecastday[0].day.avgtemp_c
  const location = params.location
  const forcastWeatherDays = await getForcastWeather(location)

  return (
    <>
      <h1>상세 페이지에서는 {location}의 3일 날씨를 나타냅니다.</h1>

      <ul>
        {forcastWeatherDays.forecast.forecastday.map((day) => {
          return (
            <ForcastWeatherItem
              location={location}
              date={day.date}
              avgTemp={day.day.avgtemp_c}
            ></ForcastWeatherItem>
          )
        })}
      </ul>
      <HomeButton />
    </>
  )
}
