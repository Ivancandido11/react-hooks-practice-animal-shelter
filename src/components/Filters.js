import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const handleChangeType = (e) => {
    onChangeType(e.target.value)
  }
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <label> type
          <select 
            id="type"
            name="type"
            onChange={handleChangeType} 
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </label>
      </div>

      <div className="field">
        <button 
          className="ui secondary button"
          onClick={onFindPetsClick}
        >Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
