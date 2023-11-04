
import './style.css';

const AddButton = ({ handleAdd }) => {
    return (
        <button className="add-city-btn" onClick={handleAdd}>
            ADD CITY +
        </button>)
}

export default AddButton