import Image from "next/image";

export const Header = () => {
  return (
    <header className="">
      <h1>This is the header</h1>
      <Image className="object-contain" src="https://links.papareact.com/ua6" alt="" width={200} height={100} />
    </header>
  );
};
