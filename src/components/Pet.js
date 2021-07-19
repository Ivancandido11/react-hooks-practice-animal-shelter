import React from "react";

function Pet(pet) {
  const petGender = () => {
    if (pet.pet.gender === "male") {
      return "♂"
    } else return "♀"
  }

  const handleAdoptClick = () => {
    pet.onAdoptPet(pet.pet.id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.pet.name} {petGender()} 
        </span>
        <div className="meta">
          <span className="date">{pet.pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.pet.age}</p>
          <p>Weight: {pet.pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.pet.isAdopted ? 
          <button className="ui disabled button">Already adopted</button>
          : 
          <button 
            className="ui primary button"
            onClick={handleAdoptClick}
          >Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
