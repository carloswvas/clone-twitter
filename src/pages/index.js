import Image from 'next/image'
import {Header} from '../containers/index'


export default function Home() {
  return (
    <div className='flex flex-row gap-2'>
      <div className='basis-1/3 flex justify-end'>
        <Header />
      </div>
      <div className='basis-1/2'>
        Feed
      </div>
      <div className='basis-1/3'>
        Aside
      </div>
    </div>
  )
}
