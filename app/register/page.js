import Header from '../components/headers/Header'
import Register from './Register'

export default function RegisterPage() {
  return (
    <div className="flex h-full w-full flex-col gap-5 bg-pureWhite p-4">
      <Header />
      <Register />
    </div>
  )
}
