import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image
        src="./assets/images/logo-devlinks-small.svg"
        width={35}
        height={35}
      />
      <h1 className="lowercase font-bold">DevLinks</h1>
    </div>
  );
}
