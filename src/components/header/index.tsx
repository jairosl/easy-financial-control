import Image from "next/image";
import { ButtonMedium } from "../button";

export function Header() {
  return (
    <header className="bg-black w-full pt-10 px-20 h-52">
      <div className="w-full flex items-center justify-between">
        <Image alt="logo" src="/logo.png" width={170} height={40} />

        <ButtonMedium>Nova transação</ButtonMedium>
      </div>
    </header>
  );
}
