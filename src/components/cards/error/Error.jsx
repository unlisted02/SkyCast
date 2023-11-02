import './style.css';

const Error = ({ message }) => {
    return (
        <div className={`error-wrapper ${message ? 'error-wrapper-active' : ''}`}>
            <span className="error-message">{message}</span>
            <button className="error-btn">GOT IT</button>
        </div>)
}

export default Error