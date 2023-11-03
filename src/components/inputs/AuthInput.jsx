import './style.css';

const AuthInput = ({ type, handleChange }) => {
    return (
        <input type={type.toLocaleLowerCase()} placeholder={type} name={type.toLocaleLowerCase()} className="auth-input" required onChange={handleChange} />
    )
}

export default AuthInput