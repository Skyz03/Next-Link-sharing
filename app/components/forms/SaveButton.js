import { Button } from 'primereact/button'

export default function SaveButton({ onClick, disabled }) {
  return (
    <Button
      label="Save"
      className={`btn-primary ${disabled ? 'bg-primaryLight' : 'bg-primary'}`}
      onClick={onClick}
      disabled={disabled}
    />
  )
}
