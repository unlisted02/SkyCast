import './style.css';

const AuthButton = ({ value, handleClick }) => {
    return (
        <input type="submit" name="submit" value={value} className="auth-btn bg-custom-green" onClick={handleClick} />
    )
}

export default AuthButton