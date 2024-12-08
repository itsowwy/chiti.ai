import type { PlasmoCSConfig } from "plasmo"
import React from "react"
import { createRoot } from "react-dom/client"

export const config: PlasmoCSConfig = {
  matches: ["https://chatgpt.com/*"]
}

const createSidebar = () => {
  if (document.getElementById("plasmo-right-sidebar")) return

  const sidebar = document.createElement("div")
  sidebar.id = "plasmo-right-sidebar"

  // Add Tailwind classes for the sidebar
  sidebar.className = `
    fixed hidden top-0 right-0 h-screen w-72 bg-gray-100 shadow-lg z-[9999] overflow-y-auto
  `

  document.body.appendChild(sidebar)

  const root = createRoot(sidebar)
  root.render(
    <div className="p-4">
      <h1 className="text-lg font-bold">Persistent Sidebar</h1>
      <p>This is a Tailwind CSS-based sidebar!</p>
    </div>
  )
}

// MutationObserver to prevent sidebar removal
const observer = new MutationObserver(() => {
  createSidebar() // Recreate the sidebar if it's removed
})

observer.observe(document.body, { childList: true, subtree: true })

// Initial creation
createSidebar()
