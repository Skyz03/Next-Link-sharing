// components/RegisterButton.js
import { Button } from 'primereact/button'

export default function RegisterButton({ label, icon, onClick }) {
  return (
    <Button
      label={label}
      icon={icon}
      onClick={onClick}
      className="btn-primary"
      type="submit"
    />
  )
}
