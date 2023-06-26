"use client";

import { useState } from "react";
import Image from "next/image";
import { ButtonMedium } from "../button";
import { Modal } from "../modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black w-full pt-10 px-20 h-52">
      <div className="w-full flex items-center justify-between">
        <Image alt="logo" src="/logo.png" width={170} height={40} />

        <ButtonMedium onClick={() => setIsOpen(true)}>
          Nova transação
        </ButtonMedium>
        <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
