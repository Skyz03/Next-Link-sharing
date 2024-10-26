// components/InputField.js
import { InputText } from 'primereact/inputtext'
import Image from 'next/image'

export default function InputField({
  id,
  type = 'text',
  label,
  placeholder,
  iconSrc,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center rounded-md border border-lightGray p-4">
        <Image
          src={iconSrc}
          alt={`${label} Icon`}
          width={20}
          height={20}
          className="mr-2"
        />
        <InputText
          id={id}
          type={type}
          placeholder={placeholder}
          className="flex-grow border-none focus:shadow-none"
        />
      </div>
    </div>
  )
}
