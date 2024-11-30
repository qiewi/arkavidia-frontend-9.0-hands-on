import React from 'react'
import Image from 'next/image'

import StarryStar from '@images/starry-star.svg'
import GameArcade from '@images/game-arcade.svg'
import Trophy from '@images/trophy.svg'

type PrizeProps = {
    label: string;
    prize: string;
  }
  
const prizeItems: PrizeProps[] = [
    {
        label: "Juara 1",
        prize: "Rp7.000.000,-"
    },
    {
        label: "Juara 2",
        prize: "Rp5.000.000,-"
    },
    {
        label: "Juara 3",
        prize: "Rp3.000.000,-"
    },
    {
        label: "First Solver on Final",
        prize: "Rp100.000,-/soal"
    }
]

export const PrizeReward = () => {
  return (
    <section className="bg-blue-950 w-full items-center justify-center text-center py-20 flex flex-col relative">
        {/* Images */}
        <Image 
            src={StarryStar}
            alt="StarryStar"
            className="absolute top-5 left-0 max-lg:hidden"
        />
        <h1 className="max-lg:text-transparent text-white font-black text-[4rem] pt-[1rem]">
            PRIZE
        </h1>
        {/* Prize Rewards */}
        <div className="flex flex-row py-10 gap-4">
            <Image
                width={260}
                src={Trophy}
                alt="Trophy"
            />
            <ul className="flex flex-col gap-4 w-full">
                {prizeItems.map((d, i) => (
                    <li key={i} className="text-white w-full px-64 pt-2 pb-8 bg-red-700 font-black text-2xl flex flex-col items-center border-8 border-black gap-6">
                        <h2>{d.label}</h2>
                        <h3 className="text-[3rem]">{d.prize}</h3>
                    </li>
                ))}
            </ul>
        </div>
        <Image 
            src={GameArcade}
            alt="GameArcade"
            className="absolute z-10 right-0 bottom-[-20%] max-lg:hidden"
        />
    </section>
  )
}
