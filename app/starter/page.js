import InsideHeader from '../components/InsideHeader'
import AddNewLink from '../components/AddNewLink'
import Image from 'next/image'
import { Button } from 'primereact/button'

export default function Starter() {
  return (
    <div className="text-slateBlack">
      <InsideHeader />
      <AddNewLink />
      <div className="rounded-md bg-lightGray p-7 text-center shadow-lg">
        <Image
          src="/assets/images/illustration-empty.svg" // Use leading slash for correct path resolution
          width={120}
          height={120}
          alt="Illustration indicating getting started" // Add alt text for accessibility
          className="mx-auto w-full" // Changed mx-0 to mx-auto for centering
        />
        <h1 className="text-xl font-bold">Let&apos;s get you started</h1>{' '}
        {/* Fixed typo in className */}
        <p>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We&apos;re here to help you
          share your profiles with everyone!
        </p>
      </div>
      <Button label="Submit" className="mt-4" />{' '}
      {/* Added margin for spacing */}
    </div>
  )
}
