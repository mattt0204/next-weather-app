import HomeButton from '@/components/HomeButton'
import React from 'react'

export default function DetailPage() {
  // 3일 데이터
  // 3일 데이터에 forecast.forecastday
  // 리스트
  // forecast.forecastday[0].date 날짜
  // forecast.forecastday[0].day.avgtemp_c

  return (
    <>
      <h1>상세 페이지에서는 서울의 3일 날씨를 나타냅니다.</h1>
      <ul>
        <li>서울의 날씨는 11월 15일 섭씨 10도입니다.</li>
        <li>서울의 날씨는 11월 15일 섭씨 10도입니다.</li>
        <li>서울의 날씨는 11월 15일 섭씨 10도입니다.</li>
      </ul>
      <HomeButton />
    </>
  )
}
