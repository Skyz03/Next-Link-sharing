// Register.js
import { Card } from 'primereact/card'
import InputField from './InputField'
import RegisterButton from './RegisterButton'

/**
 * @component Register
 * A form component for user registration with email and password fields.
 * Accepts handlers for input change and registration submission.
 */
export default function Register({ onRegisterClick, onInputChange }) {
  return (
    <Card
      title="Create account"
      subTitle="Let’s get you started sharing your links!"
      className="p-m-4 headingM mt-10 shadow-none"
    >
      <div className="flex flex-col gap-4">
        <InputField
          id="email"
          type="email"
          label="Email address"
          placeholder="e.g. alex@email.com"
          iconSrc="/assets/images/icon-email.svg"
          onChange={onInputChange}
        />

        <InputField
          id="password"
          type="password"
          label="Create Password"
          placeholder="At least 8 characters"
          iconSrc="/assets/images/icon-password.svg"
          onChange={onInputChange}
        />

        <InputField
          id="confirm-password"
          type="password"
          label="Confirm Password"
          placeholder="At least 8 characters"
          iconSrc="/assets/images/icon-password.svg"
        />

        <RegisterButton
          label="Create new account"
          icon="pi pi-sign-in"
          onClick={onRegisterClick}
        />
      </div>
    </Card>
  )
}
