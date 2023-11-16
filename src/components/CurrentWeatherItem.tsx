type Props = {
  name: string
  code: 
}
function CurrentWeatherItem(props: Props) {
  return (
    // 여기 Item 빼기
    <li>
      <Link href={`/${props.city.code}`}>
        {props.city.name}의 날씨는 {props.text}
      </Link>
    </li>
  )
}
