import { Button } from 'primereact/button'

export default function AddNewLink({ onAddLink }) {
  // Accept onAddLink as a prop
  return (
    <div className="p-4 text-slateBlack">
      <h1 className="headingM text-2xl font-bold">Customize your links </h1>
      <p className="mt-2">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="mt-6">
        <Button
          label="+ Add new link"
          className="mx-0 w-full rounded-md border border-primary px-6 py-2 text-center font-bold text-primary"
          onClick={onAddLink} // Use the onClick handler here
        />
      </div>
    </div>
  )
}
