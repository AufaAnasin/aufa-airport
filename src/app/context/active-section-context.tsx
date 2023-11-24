"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react'
import type { SectionName } from 'app/hooks/types';

// ini untuk deklarasikan tipe2 datanya
type Props = {
    children: ReactNode
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); 

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

function ActiveSectionContextProvider({children}: Props) {

    // ini fule utamanya

    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    // ini untuk children nya
  return <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  }}>
    {children}
  </ActiveSectionContext.Provider>;
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
    }
    return context
}

export default ActiveSectionContextProvider