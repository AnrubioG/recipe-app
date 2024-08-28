type CategoryButtonProps = {
  name: string;
  img: string;
};

export function CategoryButton({ name, img }: CategoryButtonProps) {
  return (
    <>
      <button className="h-14  flex items-center gap-3 text-xs border-2 border-neutral-700 rounded-xl hover:bg-yellow-400 hover:text-black">
        <div className="relative h-full w-11 overflow-hidden">
          <img
            src={`/img/${img}`}
            alt=""
            className="absolute h-full inset-0 object-cover object-right"
          />
        </div>
        <p>{name}</p>
      </button>
    </>
  );
}
