'use client'

import { useState,useContext,createContext } from 'react'
import { usePathname } from 'next/navigation';

import './globals.css'
import SideBar from '@components/SideBar.jsx'

const AppContext = createContext();

export default function RootLayout({ children }) {
  const currentPath = usePathname();
  const [selected, setSelected] = useState(currentPath)

  return ( 
    <html lang="en">
      <body>
        <AppContext.Provider value={{selected, setSelected}}> 
          <main className='flex flex-col items-start justify-start max-w-4xl
                          ml-4 mt-6 md:flex-row md:ml-4 md:mt-10 md:pt-8 
                          lg:mx-auto lg:mt-30 lg:pt-20 overflow-auto'>         
            <SideBar
              selected={selected}
              setSelected={setSelected}
            />
            {children}
          </main>
        </AppContext.Provider>
      </body>
    </html>
  )
}


export function useAppContext() {
  return useContext(AppContext);
} 