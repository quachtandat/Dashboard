import React, { useState } from 'react';
import search from '../image/Search.png';
import { data } from '../constants/data';
import './Search.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TimKiem = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleButtonClick = () => {
      navigate('/edu'); // Điều hướng sang trang Edu khi nhấn vào nút
    };
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.toLowerCase() === 'education') {
            setResults(data);
            setIsModalOpen(true);
        } else if (value.length > 0) {
            const filteredResults = data.filter(item =>
                item.title.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredResults);
            setIsModalOpen(true);
        } else {
            setResults([]);
            setIsModalOpen(false);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSearchTerm('');
    };

    const displayedResultsCount = searchTerm.toLowerCase() === 'education' ? 10124 : results.length;

    const highlightEducation = (title) => {
        return title.replace(/Education/g, '<span class="highlight">Education</span>');
    };

    return (
        <div>
            <input 
                type='text'  
                placeholder="Do fundrise now" 
                className='search-input' 
                value={searchTerm} 
                onChange={handleSearchChange} 
            />
            <button className='search-sub' onClick={handleButtonClick}>
                <img src={search} alt='' />
            </button>

            {isModalOpen && (
            <div className="search-results-modal">
              <div className="search-results-header">
                <h4>See all {displayedResultsCount} fundraisers</h4>
                <button className="close-btn" onClick={handleModalClose}>✖</button>
              </div>

              <ul className="search-results-list">
                {results.map(result => (
                  <li key={result.id} className="search-result-item">
                    <div className='result-image'>
                      <img src={result.image} alt=''/>
                    </div>
                    <div>
                      <p className="result-title" dangerouslySetInnerHTML={{ __html: highlightEducation(result.title) }}></p>
                      <p className="result-by">{result.by}</p>
                    </div>
              
                  </li>
                ))}
              </ul>

              <div className="related-searches">
                <h5>Related searches</h5>
                <ul>
                  <li> <span>education</span> fund</li>
                  <li>scholarship fund</li>
                  <li><span>education</span> and schools fund</li>
                </ul>
              </div>
            </div>
          )}
        </div>
    );
};

export default TimKiem;
