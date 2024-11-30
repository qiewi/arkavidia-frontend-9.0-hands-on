import Image from "next/image";
import CPIcon from "@images/logocp.svg";
import Star from "@images/star.svg";
import GamePad from "@images/gamepad.svg";
import { Button } from "../ui/button";

export const PageHeader = () => {
  return (
    <div className="relative w-full bg-yellow-400">
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat bg-[length:80px_80px]"
        aria-hidden="true"
      ></div>

      {/* Decorative Elements */}
      <Image
        src={Star}
        alt="Star Decoration"
        className="absolute top-10 left-10 w-12 h-12"
      />
      <Image
        src={GamePad}
        alt="Gamepad Decoration"
        className="absolute bottom-10 right-10 w-20 h-20"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 py-20 px-4">
        {/* Icon */}
        <div className="rounded-full border-4 border-black p-4 bg-white">
          <Image src={CPIcon} alt="C.P. Logo" className="w-16 h-16" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-4">Competitive Programming</h1>

        {/* Description */}
        <p className="text-lg max-w-3xl">
          Competitive Programming adalah kompetisi yang menguji kemampuan
          analisis para peserta dalam pemecahan masalah dan berpikir
          komputasional dengan menyelesaikan persoalan-persoalan yang diberikan
          dengan menggunakan bahasa pemrograman tertentu dan tidak melanggar
          batasan waktu dan memori yang ditentukan. Kompetisi ini ditujukan
          untuk Mahasiswa S1/D3/D4 se-Indonesia.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-4">
          <Button variant="outline" className="px-6 py-2">
            Download Guidebook
          </Button>
          <Button className="px-6 py-2 bg-blue-800 text-white hover:bg-blue-700">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};
