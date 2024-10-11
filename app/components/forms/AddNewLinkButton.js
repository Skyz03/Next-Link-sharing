import { Button } from 'primereact/button'

export default function AddNewLinkButton({ onClick }) {
  return (
    <Button
      label="Add new link"
      className="mt-6 w-full rounded-md bg-primaryLight py-3 font-semibold text-pureWhite"
      onClick={onClick}
    />
  )
}
