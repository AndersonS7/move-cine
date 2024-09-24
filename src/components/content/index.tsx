import { FaPlay } from "react-icons/fa";
import Image from 'next/image';
import Imdb from '@/public/imdb.png';
import Tomato from '@/public/tomato.png';

const ContentTxt = () => {
    return (
        <div className="flex flex-col gap-6 text-white w-1/3 px-8 md:px-28 py-12">
            <h1 className="text-6xl font-bold">
                John Wick 3 : Parabellum
            </h1>
            <h2>
                John Wick is on the run after killing a member
                of the international assassins' guild,
                and with a $14 million price tag on his head,
                he is the target of hit men and women everywhere.
            </h2>
            <div className="flex gap-12">
                <span className="flex gap-4 items-center">
                    <Image
                        src={Imdb}
                        className='w-auto h-auto'
                        alt='imdb icon'
                    />
                    <p>86.0/100</p>
                </span>
                <span className="flex gap-4 items-center">
                    <Image
                        src={Tomato}
                        className='w-auto h-auto'
                        alt='tomato icon'
                    />
                    <p>97%</p>
                </span>
            </div>
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold w-48 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                <FaPlay className="mr-2" />
                WATCH TRAILER
            </button>
        </div>
    )
}

export default ContentTxt;