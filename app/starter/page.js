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
          src="assets/images/illustration-empty.svg"
          width={120}
          height={120}
          className="mx-0 w-full"
        />
        <h1 clas>Let's get you started</h1>
        <p>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>

      <Button  label="Submit" />
    </div>
  )
}
