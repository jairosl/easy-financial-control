export function TableHeader() {
  return (
    <div className="w-full flex items-center px-8 py-2 bg-black rounded-md">
      <div className="w-1/2 pr-2">
        <p className="text-white text-base leading-[160%]">Descrição</p>
      </div>

      <div className="flex w-1/2 items-center gap-2">
        <p className={`w-1/2 text-white text-base leading-[160%]`}>Preço</p>
        <p className="w-1/2 text-white text-base leading-[160%]">Categoria</p>
        <p className="w-1/4 text-white text-base leading-[160%]">Data</p>
      </div>
    </div>
  );
}
