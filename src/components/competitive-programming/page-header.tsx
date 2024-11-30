import Image from "next/image";
import CPIcon from "@images/logocp.svg";
import Star from "@images/star.svg";
import GamePad from "@images/gamepad.svg";
import { Button } from "../ui/button";

export const PageHeader = () => {
  return (
    <section className="bg-[#f3b539] bg-[linear-gradient(90deg,_rgb(11,10,10)_2%,_transparent_1%),_linear-gradient(rgb(11,10,10)_2%,_transparent_1%)] bg-[length:80px_80px] w-full relative bg-yellow300 flex justify-center items-center flex-col pt-40 pb-20 overflow-hidden">
      <Image
        src={Star}
        alt="Star Background"
        className="absolute top-40 left-4 max-lg:hidden"
      />
      <Image
        src={GamePad}
        alt="Gamepad Background"
        className="absolute bottom-20 right-[-15%] max-lg:hidden"
      />
      <Image src={CPIcon} alt="Cp Profile" className="w-1/5 z-10" />
      <div className="bg-white flex flex-col items-center justify-center p-8 w-3/4 lg:w-1/2 mt-[-3rem] pt-[4rem] gap-5">
        <h1 className="font-black text-white text-center lg:text-[3.5rem] text-[1.5rem]  [text-shadow:-1px_-1px_0_#000,1px_-4px_0_#000,-1px_4px_0_#000,1px_4px_0_#000]">
          Competitive Programming
        </h1>
        <p className="text-sm text-[16px]">
          Competitive Programming adalah kompetisi yang menguji kemampuan
          analisis para peserta dalam pemecahan masalah dan berpikir
          komputasional dengan menyelesaikan persoalan - persoalan yang
          diberikan dengan menggunakan bahasa pemrograman tertentu dan tidak
          melanggar batasan waktu dan memori yang ditentukan. Kompetisi ini
          ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia.
        </p>
        <div className="flex lg:flex-row flex-col text-lg gap-5">
          <Button
            className="border-2 border-blue-800 text-blue-950 px-10 py-8"
            variant={"outline"}
          >
            Download Guidebook
          </Button>
          <Button className="bg-blue-950 text-white px-10 py-8">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};