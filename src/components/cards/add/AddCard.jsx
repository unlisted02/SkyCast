import "./style.css";
import AddIcon from "../../svg/AddIcon";
import CityIllustration from "../../svg/CityIllustration";

const AddCard = ({ darkMode }) => {
    return (
        <div className={`add__card ${darkMode && 'add__card-dark'}`}>
            <div className="header__container">
                <span className="card__title">Add city</span>
            </div>
            <div className="body__container">
                <AddIcon darkMode={darkMode} />
                <CityIllustration darkMode={darkMode} />
            </div>
        </div >
    )
}

export default AddCard