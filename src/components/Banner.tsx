'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0);

    const router = useRouter(); 

    const { data: session } = useSession()
    console.log(session?.user.token)

    return (
        <div className='block p-1 m-0 w-screen relative h-[80vh]' onClick={()=>{setIndex(index + 1)}}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            style={{objectFit:"cover"}}/>
            <div className='relative z-20 text-center top-24'>
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h2 className='text-xl font-serif'>Get Covid-19 Protection Now!!!</h2>
            </div>

            {
                session ? <div className='z-30 absolute top-5 right-10
                font-semibold text-cyan-800 text-xl'>
                        Welcome {session.user?.name}
                        </div>
                        : null
            }

            <button className='bg-white text-cyan border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transpasrent'
            onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
                Select Hospital
            </button>
        </div>
    );
}