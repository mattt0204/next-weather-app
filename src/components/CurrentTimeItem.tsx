import { getTime } from '@/utils/getTime'

export default async function CurrentTimeItem() {
  const currentTime = await getTime('Asia/Seoul')

  return <p>현재 시각은 {currentTime.dateTime}</p>
}
