import Header from '../components/headers/Header'
import LoginForm from './Login'

export default function LoginPage() {
  return (
    <div className="flex h-full w-full flex-col bg-pureWhite p-4">
      <Header />
      <LoginForm />
    </div>
  )
}
