import React, { useState } from 'react';
import TickIcon from '../../assets/icons/tick.svg';
import '../../styles/Dropdown.css';

const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' },
];

function Dropdown({id, label, selectedOption, setSelectedOption, isOpen, setIsOpen}) {
    const placeholder = label

    const toggleDropdown = () => isOpen == id ? setIsOpen(-1) : setIsOpen(id);

    const handleSelectOption = (option) => {
        if (selectedOption && option.id === selectedOption.id) {
            setSelectedOption({"id": -1, "label": placeholder}); 
        } else {
            setSelectedOption(option);
        }
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-selected" onClick={toggleDropdown}>
                {selectedOption.label}
                <div className="dropdown-icon">{isOpen == id ? '▲' : '▼'}</div>
            </div>
            {isOpen == id && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            className={`dropdown-option ${selectedOption.id === option.id ? 'selected' : ''}`}
                            onClick={() => handleSelectOption(option)}
                        >
                            {selectedOption.id === option.id && <img src={TickIcon} width={24} height={24}/>}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
