import { Card } from 'primereact/card'
import Image from 'next/image'
import { InputText } from 'primereact/inputtext'

export default function LinkCard({ platform, value, onChange, onRemove }) {
  return (
    <Card className="mt-8 rounded-lg bg-lightGray p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/icon-drag-and-drop.svg"
            width={20}
            height={20}
            alt="Drag and Drop Icon"
          />
          <h3 className="font-bold text-slateBlack">Link</h3>
        </div>
        <p
          className="cursor-pointer text-red-500 hover:underline"
          onClick={onRemove}
        >
          Remove
        </p>
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-black">
          <Image
            src="/assets/images/icon-link.svg"
            width={20}
            height={20}
            alt="Link Icon"
          />
          Link
        </label>
        <div className="flex items-center rounded-md border border-gray-300 bg-white p-2">
          <Image
            src="/assets/images/icon-link.svg"
            width={20}
            height={20}
            alt="Link Icon"
            className="mr-2"
          />
          <InputText
            value={value}
            onChange={onChange}
            className="w-full border-none bg-transparent text-black focus:outline-none"
            placeholder="Enter your link"
          />
        </div>
      </div>
    </Card>
  )
}
