import { Button } from 'primereact/button'

export default function AddNewLink({ onAddLink }) {
  return (
    <div className="p-4 text-slateBlack">
      <h1 className="headingM text-2xl font-bold">Customize your links </h1>
      <p className="mt-2 tracking-wide">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <div className="mt-6">
        <Button
          label="+ Add new link"
          className="btn-secondary"
          onClick={onAddLink}
        />
      </div>
    </div>
  )
}
