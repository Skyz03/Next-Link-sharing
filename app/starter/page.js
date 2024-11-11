'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import InsideHeader from '../components/headers/InsideHeader'
// import MobileHeader from '../components/headers/MobileHeader'
// import DesktopHeader from '../components/headers/DesktopHeader'
import AddNewLink from './AddNewLink'
import Image from 'next/image'
import LinkCard from './LinkCard'
import SaveButton from '../components/forms/SaveButton'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// Custom hook to detect screen size for responsive design
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export default function Starter() {
  const [links, setLinks] = useState([{ platform: null, value: '' }])
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)') // Detect if screen width is desktop size

  // Load links from localStorage after component mounts (client-side)
  useEffect(() => {
    setIsMounted(true)
    const storedLinks = JSON.parse(localStorage.getItem('links')) || []
    if (storedLinks.length > 0) {
      setLinks(storedLinks)
    }
  }, [])

  const handleAddLink = useCallback(() => {
    setLinks((prevLinks) => [...prevLinks, { platform: null, value: '' }])
  }, [])

  const handleRemoveLink = useCallback((index) => {
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.filter((_, i) => i !== index)
      localStorage.setItem('links', JSON.stringify(updatedLinks))
      return updatedLinks
    })
  }, [])

  const handleLinkChange = useCallback((e, index) => {
    const { value } = e.target
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks]
      updatedLinks[index].value = value
      return updatedLinks
    })
  }, [])

  const handlePlatformChange = useCallback((platform, index) => {
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks]
      updatedLinks[index].platform = platform
      return updatedLinks
    })
  }, [])

  const handleSave = useCallback(() => {
    localStorage.setItem('links', JSON.stringify(links))
    console.log('Links saved:', links)
  }, [links])

  const handleDragEnd = useCallback((result) => {
    const { source, destination } = result
    if (!destination) return

    setLinks((prevLinks) => {
      const reorderedLinks = Array.from(prevLinks)
      const [movedLink] = reorderedLinks.splice(source.index, 1)
      reorderedLinks.splice(destination.index, 0, movedLink)
      localStorage.setItem('links', JSON.stringify(reorderedLinks))
      return reorderedLinks
    })
  }, [])

  const hasValidLink = useMemo(
    () => links.some((link) => link.platform && link.value),
    [links],
  )

  if (!isMounted) return null

  return (
    <>
      {/* Render different headers based on screen size */}
      {isDesktop ? <InsideHeader /> : <InsideHeader />}

      <div className={`flex bg-lightGray ${isDesktop ? 'min-h-screen' : ''}`}>
        {/* Left Image Section for Desktop */}
        {isDesktop && (
          <div className="hidden h-full w-1/3 bg-cover bg-center xl:m-8 xl:mr-0 xl:block xl:rounded-xl xl:bg-pureWhite xl:p-8">
            <Image
              src="/assets/images/illustration-phone-mockup.svg"
              alt="Desktop Side Illustration"
              objectFit="cover"
              width={350}
              height={650}
              className="m-auto"
            />
          </div>
        )}

        {/* Main Content Section */}
        <div className={`flex-1 p-4 ${isDesktop ? 'xl:p-8' : 'w-full'}`}>
          <div className="rounded-xl bg-pureWhite py-4 shadow-sm">
            <AddNewLink onAddLink={handleAddLink} />

            {!hasValidLink && (
              <div className="mx-4 rounded-xl bg-offWhite p-4 text-justify">
                <Image
                  src="/assets/images/illustration-empty.svg"
                  width={124}
                  height={70}
                  alt="Illustration indicating getting started"
                  className="mx-auto"
                />
                <h1 className="mt-4 text-center text-2xl font-bold">
                  Let&apos;s get you started
                </h1>
                <p className="font-bodyM mt-2 text-center tracking-wide text-midGray">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We&apos;re
                  here to help you share your profiles with everyone!
                </p>
              </div>
            )}

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="links">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {links.map(({ platform, value }, index) => (
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
                              selectedPlatform={platform}
                              value={value}
                              onChange={(e) => handleLinkChange(e, index)}
                              onRemove={() => handleRemoveLink(index)}
                              onSelectPlatform={(platform) =>
                                handlePlatformChange(platform, index)
                              }
                              linkNumber={index + 1}
                              dragHandleProps={provided.dragHandleProps}
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
          </div>

          {hasValidLink && (
            <div className="mt-4">
              <SaveButton onClick={handleSave} disabled={links.length === 0} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
