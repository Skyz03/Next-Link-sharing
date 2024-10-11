import { Dropdown } from 'primereact/dropdown'
import Image from 'next/image'

export default function PlatformDropdown({ selectedPlatform, onSelect }) {
  const platforms = [
    { name: 'LinkedIn', code: 'linkedin' },
    { name: 'Twitter', code: 'twitter' },
    { name: 'Facebook', code: 'facebook' },
    { name: 'GitHub', code: 'github' },
    { name: 'StackOverflow', code: 'stackoverflow' },
    { name: 'Instagram', code: 'instagram' },
  ]

  const platformTemplate = (option) =>
    option ? (
      <div className="flex items-center gap-2">
        <Image
          src={`/assets/images/icon-${option.code.toLowerCase()}.svg`}
          alt={option.name}
          width={20}
          height={20}
          className="mr-2"
        />
        <span>{option.name}</span>
      </div>
    ) : null

  return (
    <Dropdown
      value={selectedPlatform}
      onChange={(e) => onSelect(e.value)}
      options={platforms}
      optionLabel="name"
      placeholder="Select a Platform"
      valueTemplate={platformTemplate(selectedPlatform)}
      itemTemplate={platformTemplate}
      className="w-full rounded-md border border-gray-300 bg-white p-2 text-black"
      panelClassName="text-black bg-white"
      showClear
      dropdownIcon={
        <Image
          src="/assets/images/icon-chevron-down.svg"
          alt="Chevron Down"
          width={16}
          height={16}
        />
      }
    />
  )
}
