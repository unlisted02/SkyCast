import "./style.css";
import AddCard from "../../components/cards/add/AddCard";
import WeatherCard from "../../components/cards/weather/WeatherCard";

const Home = ({ darkMode }) => {
    const cityNames = [
        'New York',
    ];

    return (
        <div className="flex justify-around items-center flex-wrap min-h-[90vh] relative">
            {cityNames.map((name, index) => (
                <WeatherCard key={index} cityName={name} darkMode={darkMode} />
            ))}
            <AddCard darkMode={darkMode} />
        </div>
    )
}

export default Home