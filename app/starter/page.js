'use client'

import { useState, useEffect } from 'react'
import InsideHeader from '../components/headers/InsideHeader'
import AddNewLink from './AddNewLink'
import Image from 'next/image'
import LinkCard from './LinkCard'
import SaveButton from '../components/forms/SaveButton'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function Starter() {
  const [links, setLinks] = useState([{ platform: null, value: '' }])

  // Load links from localStorage when component mounts
  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem('links')) || []
    if (storedLinks.length > 0) {
      setLinks(storedLinks)
    }
  }, [])

  const handleAddLink = () => {
    setLinks([...links, { platform: null, value: '' }])
  }

  // Remove a link from both the state and localStorage
  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index)
    setLinks(updatedLinks)
    localStorage.setItem('links', JSON.stringify(updatedLinks)) // Update localStorage
  }

  const handleLinkChange = (e, index) => {
    const updatedLinks = [...links]
    updatedLinks[index].value = e.target.value
    setLinks(updatedLinks)
  }

  const handlePlatformChange = (platform, index) => {
    const updatedLinks = [...links]
    updatedLinks[index].platform = platform
    setLinks(updatedLinks)
  }

  // Save all links to localStorage
  const handleSave = () => {
    localStorage.setItem('links', JSON.stringify(links))
    console.log('Links saved:', links)
  }

  // Handle the drag end event for reordering
  const handleDragEnd = (result) => {
    const { source, destination } = result

    // If no destination, exit the function
    if (!destination) return

    // Reorder the links array
    const reorderedLinks = Array.from(links)
    const [movedLink] = reorderedLinks.splice(source.index, 1)
    reorderedLinks.splice(destination.index, 0, movedLink)

    // Update the state with the reordered links
    setLinks(reorderedLinks)
    localStorage.setItem('links', JSON.stringify(reorderedLinks))
  }

  // Check if there is at least one valid link (platform selected and value entered)
  const hasValidLink = links.some((link) => link.platform && link.value)

  return (
    <>
      <InsideHeader />
      <div className="p-4 text-slateBlack">
        {/* Add new link button */}
        <div className="rounded-md shadow-md">
          <AddNewLink onAddLink={handleAddLink} />

          {/* Conditionally show intro section if there are no valid links */}
          {!hasValidLink && (
            <div className="m-4 mb-8 rounded-md bg-offWhite bg-red-400 p-4 text-center shadow-lg">
              <Image
                src="/assets/images/illustration-empty.svg"
                width={120}
                height={120}
                alt="Illustration indicating getting started"
                className="mx-auto w-full"
              />
              <h1 className="mt-4 text-xl font-bold">
                Let&apos;s get you started
              </h1>
              <p className="mt-2 text-midGray">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We&apos;re here to
                help you share your profiles with everyone!
              </p>
            </div>
          )}
        </div>
        {/* DragDropContext for handling drag and drop */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="links">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {links.map((link, index) => (
                  <Draggable
                    key={index}
                    draggableId={`link-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="mt-4"
                      >
                        <LinkCard
                          selectedPlatform={link.platform}
                          value={link.value}
                          onChange={(e) => handleLinkChange(e, index)}
                          onRemove={() => handleRemoveLink(index)}
                          onSelectPlatform={(platform) =>
                            handlePlatformChange(platform, index)
                          }
                          linkNumber={index + 1}
                          dragHandleProps={provided.dragHandleProps} // Pass dragHandleProps to LinkCard
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Show SaveButton only if there is at least one valid link */}
        {hasValidLink && (
          <div className="mt-4">
            <SaveButton onClick={handleSave} disabled={links.length === 0} />
          </div>
        )}
      </div>
    </>
  )
}
