import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 p-4 text-white">
        <h1 className="text-xl">E-commerce Website</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-green-600 p-4 text-white text-center">
        &copy; 2024 E-commerce Website
      </footer>
    </div>
  )
}

export default Layout