import Image from 'next/image'
import Header from './components/Header'
import LoginForm from './components/Login'
import NewAccount from './components/NewAccount'

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col bg-pureWhite p-4">
      <Header />
      {/* <LoginForm /> */}
      <NewAccount />
    </div>
  )
}
