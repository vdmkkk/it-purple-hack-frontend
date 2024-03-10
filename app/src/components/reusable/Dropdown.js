import React, { useState } from 'react';
import TickIcon from '../../assets/icons/tick.svg';
import '../../styles/Dropdown.css';
import mockData from '../../data/mock1.json';


function Dropdown({id, label, selectedOption, setSelectedOption, isOpen, setIsOpen, labels}) {
    const placeholder = label

    const toggleDropdown = () => isOpen == id ? setIsOpen(-1) : setIsOpen(id);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    console.log(selectedOption);

    if (labels.length == 0) {
        var options = [
            {id: 1, label: "Общее"},
            {id: 2, label: "Топ-5"},
            {id: 3, label: "Выбрать"}
        ];
    } else {
        var options = labels;
    }

    return (
        <div onTap className="dropdown-container">
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
