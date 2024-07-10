import { create } from 'zustand'

type SidebarStoreType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useSidebarStore = create<SidebarStoreType>()((set) => ({
  isOpen: true,
  setIsOpen: (isOpen) => set({ isOpen }),
}))
