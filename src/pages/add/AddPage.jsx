import './style.css';
import { months, days } from "../../constants";
import { useState } from 'react';
import WeatherCard from "../../components/cards/weather/WeatherCard";
import StateIcon from '../../components/svg/StateIcon';

const AddPage = ({ darkMode }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [showNote, setShowNote] = useState(false);
    const [cardCity, setCardCity] = useState("Tokyo");
    const [followedCM, setFollowedCM] = useState(false);
    const [state, setState] = useState('Sunny');

    const date = new Date();
    const temp = 72;

    const handleCityInputChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const selectCity = (city) => {
        // Implement your logic for selecting a city here
    };

    const addCityOfTheMonth = () => {
        // Implement your logic for adding the city of the month here
        setFollowedCM(true); // Example: Set to true when the city is followed
    }

    return (
        <div className="add-wrapper">
            <section className="main-card">
                <div className="city-search-wrapper">
                    <div className="city-search-header">
                        <h3 className="city-search-title">SEARCH CITIES</h3>
                        <div className="search-city-input-wrapper">
                            <input
                                className="search-city-input"
                                autoComplete="off"
                                placeholder="search city"
                                value={selectedCity}
                                onChange={handleCityInputChange}
                            />
                            <button className="search-city-btn" onClick={() => selectCity(selectedCity)}>
                                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
                                    <path fill="#FFF"
                                        d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"></path>
                                </svg>
                            </button>
                        </div>
                        <span className="city-search-hr">O  O  O</span>
                    </div>
                    <div className="city-search-body">
                        {showNote && <span className="city-invalid-note">City name is not valid. Note: only capital cities are supported for now</span>}
                        {cardCity && <WeatherCard cityName={cardCity} addMode={true} darkMode={darkMode} />}
                    </div>
                </div>

                <div className="fav-city-wrapper">
                    <img className="fav-city-image" src="https://www.viajarsolo.com/thumbnails/gallery_image_full/components/kcfinder/kcfinder-3.12/upload/images/0B8ejrJ3IlSZvQUdyWHgtZjdtVVE.jpg?itok=Y2KZ6rfH" alt="" />
                    <div className="fav-city-image-overlay"></div>
                    <div className="fav-city-header">
                        <h3 className="fav-city-title">CITY OF THE MONTH</h3>
                        <hr className="fav-city-hr" />
                        <span className="fav-city-date">{days[date.getDay()]}, {date.getDate()}th {months[date.getMonth()]}</span>
                    </div>
                    <div className="fav-city-body">
                        <div className="fav-city-body-subwrapper">
                            <div className="fav-weather-icon">
                                <StateIcon state={state} />
                            </div>
                            <div className="fav-city-info">
                                <span className="fav-city-temp">{temp}°</span>
                                <div className="fav-city-name-wrapper">
                                    <span className="fav-city-name">Rome</span>
                                    <span className="fav-city-country">IT</span>
                                </div>
                                <span className="fav-city-state">{state}</span>
                            </div>
                            <button className={`fav-city-add-btn ${followedCM ? 'fav-city-added-btn' : ''}`} onClick={addCityOfTheMonth} disabled={followedCM}>
                                {followedCM ? "FOLLOWED" : "FOLLOW"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default AddPage