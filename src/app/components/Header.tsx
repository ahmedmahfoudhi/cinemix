import { headerItems } from "../constants";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex justify-between flex-col-reverse sm:flex-row m-5 ">
      <h1 className="text-4xl mt-[-4px] cursor-pointer text-center">Cinemix</h1>
      <div
        className="flex gap-4 justify-evenly self-center 
      h-auto flex-grow max-w-2xl"
      >
        {headerItems.map((item, idx) => (
          <HeaderItem key={idx} {...item} />
        ))}
      </div>
    </header>
  );
}
