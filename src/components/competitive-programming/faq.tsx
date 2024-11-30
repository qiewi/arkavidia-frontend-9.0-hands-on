import React from 'react'
import Image from 'next/image'

import Star from '@images/star.svg'
import QuestionMark from '@images/question-mark.svg'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

type FaqProps = {
    label: string;
    content: string;
  }
  
const faqItems: FaqProps[] = [
    {
        label: "Apa itu Competitive Programming",
        content: `Competitive Programming (CP) Arkavidia adalah sebuah kompetisi pemrograman yang bertujuan untuk menguji kemampuan analisis pemecahan masalah (problem solving) dan berpikir komputasional dengan cara menyelesaikan persoalan yang diberikan dengan bahasa pemrograman tertentu dalam batasan waktu dan memori yang telah ditentukan. Kompetisi terdiri dari dua tahap yaitu babak penyisihan dan babak final`
    },
    {
        label: "Apa saja syarat peserta Competitive Programming?",
        content: `1. Peserta lomba merupakan 1 tim yang terdiri dari maksimal 3 mahasiswa tingkat S1 atau sederajat dari institusi yang sama.
                2. Peserta bukan merupakan anggota Himpunan Mahasiswa Informatika (HMIF) Institut Teknologi Bandung.
                3. Setiap peserta hanya terdaftar pada 1 tim pada cabang kompetisi yang sama.`
    },
    {
        label: "Apakah Competitive Programming diadakan secara berkelompok?",
        content: `Competitive Programming diladakan secara kelompok yang terdiri dari 1-3 orang.`
    },
    {
        label: "Berapa biaya pendaftaran Competitive Programming?",
        content: `Biaya pendaftaran untuk perlombaan Competitive Programming adalah Rp 90.000,- per tim.`
    },
    {
        label: "Berapa orang peserta yang akan lolos ke final?",
        content: `Peserta Competitive Programming dinyatakan lolos ke final jika peserta termasuk 10 tim terbaik pada babak penyisihan atau 5 tim terbaik dari Institusi berbeda yang tidak masuk ke dalam 10 tim sebelumnya yang menyelesaikan sekurang-kurangnya 1 (satu) soal.`
    },
    {
        label: "Bagaimana teknis perlombaan Competitive Programming?",
        content: `Perlombaan akan diadakan melalui platform DOMjudge dengan jumlah soal 12 pada setiap babak`
    },
    {
        label: "Apakah kegiatan perlombaan akan diadakan secara offline?",
        content: `Pada perlombaan Competitive Programming, babak penyisihan akan diadakan secara online dan babak final akan diadakan secara offline dan akan bertempat di Institut Teknologi Bandung.`
    },
]

export const Faq = () => {
  return (
    <section className="bg-yellow-500 w-full items-center justify-center text-center py-20 flex flex-col relative overflow-hidden">
        {/* Images */}
        <Image 
            src={Star}
            alt="Star"
            className="absolute top-16 left-0 max-lg:hidden"
        />
        <h1 className="max-lg:text-transparent text-black font-black text-[4rem] pt-[1rem]">
            F.A.Q.
        </h1>

        {/* FAQ */}
        <div className="flex flex-col px-36 relative items-center">
            <Accordion type="multiple" className="w-full flex flex-col gap-5 py-20 z-10 relative">
                {faqItems.map((d, i) => (
                    <AccordionItem
                        key={i}
                        className="text-white border rounded-2xl border-black w-full overflow-hidden"
                        value={d.label}
                    >
                        <div className="w-full">
                            <AccordionTrigger className="bg-black p-5 h-[5rem] w-[60rem] text-xl text-left hover:no-underline">
                                {d.label}
                            </AccordionTrigger>
                            <AccordionContent className="bg-white w-[60rem] text-black p-4 text-left">
                                {d.content}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        <Image 
                src={QuestionMark}
                alt="QuestionMark"
                className="absolute right-[-40] bottom-11 overflow-hidden max-lg:hidden"
        />

    </section>
  )
}
