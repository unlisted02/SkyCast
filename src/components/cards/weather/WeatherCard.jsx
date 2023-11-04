import { useEffect, useState } from "react";
import StateIcon from "../../svg/StateIcon";
import "./style.css";
import { fetchWeatheData } from "../../../services/weatherApi";
import { useNavigate } from "react-router-dom";
import { addCity, checkIfCityAlreadyExist } from "../../../services/firebaseApi";
import AddButton from "../../buttons/AddButton";


const WeatherCard = ({ cityName, darkMode, addMode }) => {
    const [cityExist, setCityExist] = useState(false);
    const [state, setState] = useState('');
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await fetchWeatheData(cityName);
            const cityAlreadyExist = await checkIfCityAlreadyExist(cityName);

            setCityExist(cityAlreadyExist);
            setState(response.state);
            setTemp(response.temp);
            setMinTemp(response.minTemp);
            setMaxTemp(response.maxTemp);
        }

        fetchData();
    }, [cityName])

    const handleClick = () => {
        navigate(`/detail/${cityName}`);
    }

    const handleAdd = () => {
        if (!cityExist) {
            const cityObj = {
                id: '',
                createdBy: localStorage.getItem('uid'),
                name: cityName
            }

            addCity(cityObj);
        }
    }

    return (
        <section
            className={`weather__card ${addMode ? (cityName ? '' : 'hidden') : ''} ${darkMode && 'weather__card-dark'} ${addMode && 'weather__card-add'}`} onClick={handleClick}>
            <span className="city-name__text">{cityName}</span>
            <div className="weather-icon__container">
                <StateIcon state={state} />
            </div>
            <div className="temperature-text__container">
                <span className="temperature-metric__text">{temp}°</span>
                <span className="weather-condition__text">{state}</span>
            </div>
            <section className="min-max__container">
                <div className="min__container">
                    <svg className="min-arrow__icon" viewBox="188.5 807 21 21">
                        <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow" />
                    </svg>
                    <span className="min-temperature__text">{minTemp}</span>
                    <span className="min__text">Min</span>
                </div>
                <div className="max__container">
                    <svg className="max-arrow__icon" viewBox="449.5 820 21 21">
                        <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow" />
                    </svg>
                    <span className="max-temperature__text">{maxTemp}</span>
                    <span className="max__text">Max</span>
                </div>
            </section>
            {addMode && (<AddButton handleAdd={handleAdd} />)}
        </section>
    );
};

export default WeatherCard;
