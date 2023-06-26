"use client";
import { TypeTransaction } from "@/domain";
import { Dialog } from "@headlessui/react";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTransactionSchema, ICreateTransaction } from "./validation";
import { createTransaction } from "@/services/http/transactions";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function Modal({ handleClose, isOpen }: ModalProps) {
  const [selectedType, setSelectedType] = useState(TypeTransaction.enter);

  const isEnter = selectedType === TypeTransaction.enter;

  const { register, setValue, handleSubmit, reset } =
    useForm<ICreateTransaction>({
      resolver: zodResolver(CreateTransactionSchema),
    });

  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value as TypeTransaction);
    setValue("type", event.target.value as TypeTransaction);
  };

  const onSubmit: SubmitHandler<ICreateTransaction> = async (data) => {
    try {
      await createTransaction(data);
      reset();
      handleClose();
    } catch (error) {}
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => handleClose()}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <Dialog.Panel className="p-12 bg-white shadow-xl w-[28rem] rounded-md overflow-hidden border-2 border-solid border-black">
          <Dialog.Title className="mb-9 text-2xl font-bold">
            Nova transação
          </Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 mb-8">
              <label htmlFor="description" className="sr-only">
                Descrição
              </label>
              <input
                id="description"
                type="text"
                className="p-4 rounded-md border-2 bg-gray-shape placeholder-gray border-solid border-black w-full focus:outline-none focus:border-green-action"
                placeholder="Descrição"
                {...register("description")}
              />

              <label htmlFor="price" className="sr-only">
                Preço
              </label>
              <input
                id="price"
                type="number"
                className="p-4 rounded-md border-2 bg-gray-shape placeholder-gray border-solid border-black w-full focus:outline-none focus:border-green-action"
                placeholder="Preço"
                {...register("price")}
              />

              <label htmlFor="category" className="sr-only">
                Categoria
              </label>
              <input
                id="category"
                type="text"
                className="p-4 rounded-md border-2 bg-gray-shape placeholder-gray border-solid border-black w-full focus:outline-none focus:border-green-action"
                placeholder="Categoria"
                {...register("category")}
              />
            </div>

            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex-1 ">
                <input
                  id="enter"
                  type="radio"
                  name="type"
                  className="appearance-none checked:bg-blue-500 sr-only"
                  value={TypeTransaction.enter}
                  checked={selectedType === TypeTransaction.enter}
                  onChange={handleChangeType}
                />
                <label
                  htmlFor="enter"
                  className={`w-full h-full flex items-center justify-center cursor-pointer py-4 px-6 rounded-md border-2 border-solid border-black transition ${
                    isEnter ? "text-white bg-green-action" : "text-gray"
                  }`}
                >
                  <span className="mr-2">
                    <ArrowCircleUp
                      size={32}
                      color={isEnter ? "#ffffff" : "#0B4C26"}
                    />
                  </span>
                  Entrada
                </label>
              </div>
              <div className="flex-1 flex">
                <input
                  id="leave"
                  type="radio"
                  name="type"
                  className="appearance-none checked:bg-blue-500 sr-only"
                  value={TypeTransaction.leave}
                  checked={selectedType === TypeTransaction.leave}
                  onChange={handleChangeType}
                />
                <label
                  htmlFor="leave"
                  className={`w-full h-full flex items-center justify-center cursor-pointer py-4 px-6 rounded-md border-2 border-solid border-black transition ${
                    !isEnter ? "text-white bg-red" : "text-gray"
                  } `}
                >
                  <span className="mr-2">
                    <ArrowCircleDown
                      size={32}
                      color={!isEnter ? "#ffffff" : "#FF3835"}
                    />
                  </span>
                  Saida
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="px-8 py-4 flex items-center justify-center bg-black text-white font-bold leading-[160%] text-xl rounded-md w-full transition hover:bg-black/90"
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
