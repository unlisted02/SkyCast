import './style.css';
import StateIcon from '../../components/svg/StateIcon';
import { getCityIllustrationPath } from '../../assets/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchWeatherDetail } from '../../services/weatherApi';

const Detail = ({ darkMode }) => {
    const navigate = useNavigate();
    const { name } = useParams();

    const [temp, setTemp] = useState(0);
    const [state, setState] = useState('');
    const [hum, setHum] = useState(0);
    const [wind, setWind] = useState(0);
    const [daysInfo, setDaysInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetchWeatherDetail(name);
            setTemp(response.temp);
            setState(response.state);
            setHum(response.hum);
            setWind(response.wind);
            setDaysInfo(response.daysInfo);
        }

        fetchData();
    }, [])

    const handleClick = () => {
        navigate("/home");
    }

    return (
        <div className={`details-page__wrapper ${darkMode && 'details-page__wrapper-dark'}`}>
            <div className={`background-gradient__circle ${darkMode && 'background-gradient__circle-dark'}`}></div>
            <svg className="back__button" viewBox="4085 152 98.5 126" tabIndex="0" onClick={handleClick}>
                <g transform="translate(3980)">
                    <circle className="a" cx="39" cy="39" r="39" transform="translate(105 152)"></circle>
                    <line className="b" transform="translate(123.5 190.5)" x1="80"></line>
                    <line className="b" transform="translate(123.5 164.5)" x2="26" y1="26"></line>
                    <line className="c" transform="translate(123.5 190.5)" x1="26" y1="27"></line>
                    <text className="d" transform="translate(117 274)">
                        <tspan x="0" y="0">BACK</tspan>
                    </text>
                </g>
            </svg>

            <section className="main-weather__card">
                <section className="card-header__container-dark" >
                    <img className="city__illustration" src={getCityIllustrationPath(name)} />
                    <div className="header-content__wrapper">
                        <div className="today-weather__container">
                            <div className="temp-state__container">
                                <span className="temperature__text">{temp}°</span>
                                <span className="weather-state__text">{state}</span>
                            </div>
                            <div className="hum-wind__container">
                                <div className="hum__container">
                                    <span className="hum__text">humidity</span>
                                    <span className="hum-value__text">{hum} %</span>
                                </div>
                                <div className="hum-wind__separator">&nbsp;</div>
                                <div className="wind__container">
                                    <span className="wind__text">wind</span>
                                    <span className="wind-value__text">{wind} K/M</span>
                                </div>
                            </div>
                        </div>
                        <div className="city-name__container">
                            <div className="city-name__underline">
                                <span className="city-name__text">{name}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="body-content__wrapper">
                    <section className="twitter-feed__container">
                        <div className="twitter-feed__header">
                            <svg className="twitter__icon" viewBox="4332 625.812 30 24.375">
                                <path className="twitter-icon-fill" d="M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z" transform="translate(4332 577.812)" />
                            </svg>
                            <span className="twitter-feed__text">Comments</span>
                            <span className="twitter-feed-tag__text">#{name}</span>
                        </div>
                        <div className="twitter-feed__body">
                            <p className="twitter-no-tweets__text">No Comments Found</p>
                        </div>
                    </section>

                    <section className="forecast__container">
                        {daysInfo.map((day, index) => (
                            <div className="day-weather__container" key={index}>
                                <span className="day-name__text">{day.name}</span>
                                <StateIcon
                                    state={day.state} customClass='forecast-condition__icon' />
                                <span className="day-temp__text">{day.temp}°</span>
                                <span className="day-state__text">{day.state}</span>
                            </div>
                        ))}
                    </section>
                </main>
            </section>
        </div>
    )
}

export default Detail