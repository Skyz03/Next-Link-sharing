import { Button } from 'primereact/button'

export default function SaveButton({ onClick, disabled }) {
  return (
    <Button
      label="Save"
      className={`mt-6 w-full rounded-md py-3 font-semibold text-pureWhite ${
        disabled ? 'bg-primaryLight' : 'bg-primary'
      }`}
      onClick={onClick}
      disabled={disabled}
    />
  )
}
