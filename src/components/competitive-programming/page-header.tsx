import Image from "next/image";
import CPIcon from "@images/logocp.svg";
import Star from "@images/star.svg";
import GamePad from "@images/gamepad.svg";
import { Button } from "../ui/button";

export const PageHeader = () => {
  return (
    <section className="bg-[#f3b539] bg-[linear-gradient(90deg,_rgb(11,10,10)_2%,_transparent_1%),_linear-gradient(rgb(11,10,10)_2%,_transparent_1%)] bg-[length:80px_80px] w-full relative flex justify-center items-center flex-col pt-32 pb-20 overflow-hidden">
      {/* Images */}
      <Image
        src={Star}
        alt="Star Background"
        className="absolute top-28 left-10 rotate-30 max-lg:hidden"
      />
      <Image
        src={GamePad}
        alt="Gamepad Background"
        className="absolute bottom-20 right-[-15%] max-lg:hidden"
      />
      <Image src={CPIcon} alt="Cp Profile" className="w-1/5 z-10" />
      {/* Content */}
      <div className="bg-white flex flex-col items-center justify-center p-8 w-3/4 lg:w-1/2 mt-[-3rem] pt-[4rem] gap-5">
        <h1 className="font-black text-white text-center lg:text-[3.5rem] text-[1.5rem]  [text-shadow:-1px_-1px_0_#000,1px_-4px_0_#000,-1px_4px_0_#000,1px_4px_0_#000]">
          Competitive Programming
        </h1>
        <p className="text-sm text-[16px] text-center leading-6">
          Competitive Programming adalah kompetisi yang menguji kemampuan
          analisis para peserta dalam pemecahan masalah dan berpikir
          komputasional dengan menyelesaikan persoalan - persoalan yang
          diberikan dengan menggunakan bahasa pemrograman tertentu dan tidak
          melanggar batasan waktu dan memori yang ditentukan. Kompetisi ini
          ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia.
        </p>
        {/* Buttons */}
        <div className="flex lg:flex-row flex-col text-xl gap-5">
          <Button
            className="border-2 font-bold border-blue-950 text-blue-900 px-16 py-8 rounded-xl hover:border-blue-900 hover:bg-white hover:text-blue-800"
            variant={"outline"}
          >
            Download Guidebook
          </Button>
          <Button 
            className="bg-blue-900 font-bold text-white px-20 py-8 hover:bg-blue-950"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};