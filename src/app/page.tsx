import CurrentTimeItem from '@/components/CurrentTimeItem'
import RevalidationButton from '@/components/RevalidationButton'
import { City } from '@/types/city'
import { getCurrentWeather } from '@/utils/getCurrentWeather'
import { getTime } from '@/utils/getTime'
import Link from 'next/link'
import React from 'react'
import CurrentWeatherItem from '@/components/CurrentWeatherItem'
export default function Home() {
  // 지역별 날씨 데이터
  // current.condition.text 홍콩과 서울
  const cities: City[] = [
    { name: '서울', code: 'seoul' },
    { name: '홍콩', code: 'hongkong' },
  ]

  return (
    <div>
      <h1>날씨앱 만들기 🌈</h1>
      <CurrentTimeItem />
      <RevalidationButton />
      <ul>
        {cities.map((city) => {
          return (
            <CurrentWeatherItem
              key={city.code}
              cityCode={city.code}
              cityName={city.name}
            />
          )
        })}
      </ul>
    </div>
  )
}
