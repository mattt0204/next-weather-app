import Link from 'next/link'
import React from 'react'
export default function Home() {
  // 지역별 날씨 데이터
  // current.condition.text 홍콩과 서울
  const cities = [
    { name: '서울', code: 'seoul' },
    { name: '홍콩', code: 'hongkong' },
  ]

  return (
    <div>
      <h1>날씨앱 만들기 🌈</h1>
      <button>캐시 비우기</button>
      <ul>
        {cities.map((city) => {
          return (
            <li key={city.code}>
              <Link href={`/${city.code}`}> {city.name}의 날씨는 sunny </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
