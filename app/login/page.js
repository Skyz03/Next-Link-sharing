import Header from '../components/headers/Header'
import LoginForm from './Login'

export default function LoginPage() {
  return (
    <div className="flex h-full w-full flex-col gap-5 bg-pureWhite p-6">
      <Header />
      <LoginForm />
    </div>
  )
}
