import React from 'react'
import Image from 'next/image'

import Disk from '@images/disk.svg'

type TimerProps = {
  label: string;
  firstDigit: string;
  secondDigit: string;
}

const timerItems: TimerProps[] = [
  {
    label: "DAYS",
    firstDigit: "0",
    secondDigit: "0"
  },
  {
    label: "HOURS",
    firstDigit: "0",
    secondDigit: "0"
  },
  {
    label: "MINUTES",
    firstDigit: "0",
    secondDigit: "0"
  }
]

export const RegistrationCountdown = () => {
  return (
    <div className="flex flex-col relative">
        {/* LABEL */}
        <div className="relative overflow-hidden w-full h-12 bg-white text-3xl border-4 border-black">
            <div className="font-black absolute whitespace-nowrap animate-marquee">
                CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
            </div>
        </div>
        <div className="flex flex-col bg-black w-full text-white pt-10 pb-10 items-center justify-center gap-6 overflow-visible  ">
            {/* Disk */}
            <Image 
              src={Disk}
              alt="Multidisk"
              className='absolute z-10 bottom-[-20%] max-lg:hidden'
            />
            <h1 className="max-lg:text-transparent text-white font-black text-[1.25rem]">
              Sabtu, 31 Desember 2022 - 23.59 WIB
            </h1>
            {/* Timer */}
            <div className="flex flex-row gap-12">
              {timerItems.map((d, i) => (
                <li key={i} className="flex flex-col gap-2 justify-center items-center">
                  <div className=" text-black font-black flex flex-row gap-4 text-[1.5rem]">
                    <span className="bg-white py-6 px-4 rounded-xl border-2 border-black">
                      {d.firstDigit}
                    </span>
                    <span className="bg-white py-6 px-4 rounded-xl border-2 border-black">
                      {d.secondDigit}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-md">{d.label}</h3>
                </li>
              ))}
            </div>
        </div>
    </div>
  )
}
