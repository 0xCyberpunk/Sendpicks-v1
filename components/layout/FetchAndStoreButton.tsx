// src/components/FetchAndStoreButton.tsx
import React from "react"

const FetchAndStoreButton: React.FC = () => {
  const handleFetchAndStoreData = async () => {
    try {
      // Assuming your endpoint is at /api/fetchAndStoreData
      const response = await fetch("/api/fetchAndStoreData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentWeek: 5 }), // Adjust the week number accordingly
      })

      if (!response.ok) {
        throw new Error(`Network response was not ok ${response.statusText}`)
      }

      const data = await response.json()
      console.log("Response data:", data)
    } catch (error) {
      console.error("Fetch and store data error:", error)
    }
  }

  return <button onClick={handleFetchAndStoreData}>Fetch and Store Data</button>
}

export default FetchAndStoreButton
