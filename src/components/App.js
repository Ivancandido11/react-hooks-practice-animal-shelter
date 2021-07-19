import React, { useState } from "react"

import Filters from "./Filters"
import PetBrowser from "./PetBrowser"

function App() {
  const [pets, setPets] = useState([])
  const [filters, setFilters] = useState({ type: "all" })
  const url = `http://localhost:3001/pets`

  const handleChangeType = (newType) => {
    setFilters({ type: newType })
  }
  const handleFindPetsClick = () => {
    if(filters.type === "all") {
      fetch(url)
        .then(r => r.json())
        .then(data => setPets(data))
    } else {
      fetch(`${url}?type=${filters.type}`)
        .then(r => r.json())
        .then(data => setPets(data))
    }
  }
  const handleAdoptClick = (id) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isAdopted: true })
    }
    fetch(`${url}/${id}`, configObj)
      .then(r => r.json())
      .then(data => {
        const updatedPet = pets.map(pet => {
          if (pet.id === data.id) return data
          else return pet
        })
        setPets(updatedPet)
      })
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={handleChangeType}
              onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser
              onAdoptPet={handleAdoptClick} 
              pets={pets}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
