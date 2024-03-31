import Link from 'next/link'
import { Button } from './ui/button'
import {LinkIcon} from 'lucide-react'

interface CardProps {
    title: string;
    description: string;
}

const Card = ({title, description}: CardProps) => {
  return (
    <Link 
        href='/playground' 
        className='
            transition-all
            hover:scale-[1.05]
            flex 
            flex-col
            border
            bg-primary-foreground
            items-center
            p-4
            rounded-lg
            w-full
            mx-10
            md:w-[20rem]
            text-center
        '
    >
        <h3 className='font-bold text-primary text-2xl'>
            {title}
            <span className='text-muted-foreground'><sup> ©</sup></span>
        </h3>
        <p className='mt-1 font-bold text-muted-foreground'>
            {description}
        </p>
        {/*  */}
        <Button className='mt-4 w-full bg-gradient-to-r from-rose-600 via-red-500 to-orange-400 md:w-[10rem] flex gap-2 rounded-full'>
            <p className='text-white'>Open link</p>
            <LinkIcon className='text-secondary' size={12}/>
        </Button>
    </Link>
  )
}

export default Card