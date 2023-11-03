import "./style.css";
import AddCard from "../../components/cards/add/AddCard";
import WeatherCard from "../../components/cards/weather/WeatherCard";
import { useEffect, useState } from "react";
import { getCities } from "../../services/firebaseApi";

const Home = ({ darkMode }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            const cityList = await getCities();
            setCities(cityList);
        };

        fetchCities();
    }, []);

    return (
        <div className="flex justify-around items-center flex-wrap min-h-[90vh] relative">
            {cities.map((city, index) => (
                <WeatherCard key={index} cityName={city.name} darkMode={darkMode} />
            ))}
            <AddCard darkMode={darkMode} />
        </div>
    )
}

export default Home