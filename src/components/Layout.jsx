import React from 'react'
import { Toaster } from 'react-hot-toast'

function Layout({children}) {
  return (
    <>
    <Toaster position="top-right" />
    <main className='container mx-auto'>
        {children}
    </main>
    </>
  )
}

export default Layout