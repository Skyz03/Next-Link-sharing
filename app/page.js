import Image from "next/image";
import Header from "./components/Header";
import LoginForm from "./components/Login";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full p-4">
      <Header />
      <LoginForm />
    </div>
  );
}
