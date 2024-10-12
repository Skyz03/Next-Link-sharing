import { Dropdown } from 'primereact/dropdown'
import Image from 'next/image'

export default function PlatformDropdown({ selectedPlatform, onSelect }) {
  const platforms = [
    { name: 'GitHub', code: 'github' },
    { name: 'Frontend Mentor', code: 'frontend-mentor' },
    { name: 'Twitter', code: 'twitter' },
    { name: 'LinkedIn', code: 'linkedin' },
    { name: 'Youtube', code: 'youtube' },
    { name: 'Facebook', code: 'facebook' },
    { name: 'Twitch', code: 'twitch' },
    { name: 'Dev.to', code: 'devto' },
    { name: 'Codewars', code: 'codewars' },
    { name: 'Codepen', code: 'codepen' },
    { name: 'freeCodeCamp', code: 'freecodecamp' },
    { name: 'GitLab', code: 'gitlab' },
    { name: 'Hashnode', code: 'hashnode' },
    { name: 'StackOverflow', code: 'stack-overflow' },
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
        <span className="text-black">{option.name}</span>{' '}
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
      className="w-full rounded-md border border-gray-300 bg-white text-black"
      showClear
      dropdownIcon={
        <Image
          src="/assets/images/icon-chevron-down.svg"
          alt="Chevron Down"
          width={16}
          height={16}
        />
      }
      panelClassName="text-black bg-white"
    />
  )
}
