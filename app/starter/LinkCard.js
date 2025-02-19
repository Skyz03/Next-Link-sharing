import { Card } from 'primereact/card'
import Image from 'next/image'
import { InputText } from 'primereact/inputtext'
import PlatformDropdown from '../components/forms/PlatformDropdown'

export default function LinkCard({
  selectedPlatform,
  onSelectPlatform,
  value,
  onChange,
  onRemove,
  linkNumber,
  dragHandleProps, // Pass dragHandleProps to the card
}) {
  return (
    <div className="m-4">
      <Card className="m-4 rounded-lg bg-offWhite shadow-sm">
        <div className="my-2 flex items-center justify-between">
          <div
            className="flex items-center gap-2"
            {...dragHandleProps}
            style={{ cursor: 'grab', userSelect: 'none' }}
          >
            {/* Drag icon now uses dragHandleProps */}
            <Image
              src="/assets/images/icon-drag-and-drop.svg"
              width={12}
              height={6}
              alt="Drag and Drop Icon"
            />
            <h3 className="font-bold text-slateBlack">Link #{linkNumber}</h3>
          </div>
          <p
            className="cursor-pointer text-midGray hover:underline"
            onClick={onRemove}
          >
            Remove
          </p>
        </div>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-semibold text-black">
            Platform
          </label>
          <PlatformDropdown
            selectedPlatform={selectedPlatform}
            onSelect={onSelectPlatform}
          />
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
              className="w-full text-black focus:shadow-none"
              placeholder="Enter your link"
              variant="outlined"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
